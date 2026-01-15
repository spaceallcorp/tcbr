
import { Injectable, inject, signal } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { Vaga } from '../models/vagas.models';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  private firestore = inject(Firestore);
  private vagasCollection = collection(this.firestore, 'vagas');
  
  vagas = signal<Vaga[]>([]);

  constructor() {
    console.log('VagaService initializado');
    this.getVagas().subscribe(vagas => {
      console.log('Vagas carregadas', vagas);
      this.vagas.set(vagas);
    });
  }

  getVagas(): Observable<Vaga[]> {
    console.log('Fetching all posts');
    return collectionData(this.vagasCollection, { idField: 'id' }).pipe(
      map((posts: any[]) => posts.map(vaga => vaga as Vaga)),
      tap(posts => console.log('Posts from Firestore:', posts))
    ) as Observable<Vaga[]>;
  }

  getPostById(id: string): Observable<Vaga | undefined> {
    console.log('Fetching vaga with ID:', id);
    const postDoc = doc(this.firestore, `vagas/${id}`);
    return docData(postDoc, { idField: 'id' }).pipe(
      map(vaga => {
        if (!vaga) {
          throw new Error('Vaga not found');
        }
        return vaga as Vaga;
      }),
      tap(vaga => console.log('Retrieved vaga:', vaga))
    ) as Observable<Vaga>;
  }
}