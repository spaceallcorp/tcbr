
import { Injectable, inject, signal } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { Painel } from '../models/painel.models';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PainelService {
  private firestore = inject(Firestore);
  private eventosCollection = collection(this.firestore, 'noticias');
  
  eventos = signal<Evento[]>([]);

  constructor() {
    console.log('EventosService initializado');
    this.getEventos().subscribe(eventos => {
      console.log('Noticias carregadas', eventos);
      this.eventos.set(eventos);
    });
  }

  getEventos(): Observable<Evento[]> {
    console.log('Fetching all noticias');
    return collectionData(this.eventosCollection, { idField: 'id' }).pipe(
      map((eventos: any[]) => eventos.map(evento => evento as Evento)),
      tap(eventos => console.log('Eventos from Firestore:', eventos))
    ) as Observable<Evento[]>;
  }

  getEventoById(id: string): Observable<Evento | undefined> {
    console.log('Fetching noticia with ID:', id);
    const postDoc = doc(this.firestore, `vagas/${id}`);
    return docData(postDoc, { idField: 'id' }).pipe(
      map(evento => {
        if (!evento) {
          throw new Error('Noticia não encontrada');
        }
        return evento as Evento;
      }),
      tap(evento => console.log('Retrieved noticia:', evento))
    ) as Observable<Evento>;
  }
}