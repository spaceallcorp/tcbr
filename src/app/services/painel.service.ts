
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
  private paineisCollection = collection(this.firestore, 'paineis');
  
  paineis = signal<Painel[]>([]);

  constructor() {
    console.log('PaineisService initializado');
    this.getPaineis().subscribe(paineis => {
      console.log('Paineis carregados', paineis);
      this.paineis.set(paineis);
    });
  }

  getPaineis(): Observable<Painel[]> {
    console.log('Fetching all paineis');
    return collectionData(this.paineisCollection, { idField: 'id' }).pipe(
      map((paineis: any[]) => paineis.map(painel => painel as Painel)),
      tap(paineis => console.log('Paineis from Firestore:', paineis))
    ) as Observable<Painel[]>;
  }

  getPainelById(id: string): Observable<Painel | undefined> {
    console.log('Fetching painel with ID:', id);
    const postDoc = doc(this.firestore, `vagas/${id}`);
    return docData(postDoc, { idField: 'id' }).pipe(
      map(painel => {
        if (!painel) {
          throw new Error('Painel não encontrado');
        }
        return painel as Painel;
      }),
      tap(painel => console.log('Retrieved painel:', painel))
    ) as Observable<Painel>;
  }
}