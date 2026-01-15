// src/app/services/recrutamento.service.ts
import { Injectable, inject, signal } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { Vagas } from '../models/vagas.models';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecrutamentoService {
  private firestore = inject(Firestore);
  private vagasCollection = collection(this.firestore, 'vagas');

  vagas = signal<Vagas[]>([]);
  constructor() {
    console.log('RecrutamentoService initialized');
    this.getVagas().subscribe(vagas => {
      console.log('Loaded vagas:', vagas);
      this.vagas.set(vagas);
    });
  }

  getVagas(): Observable<Vagas[]> {
    console.log('Fetching all vagas');
    return collectionData(this.vagasCollection, { idField: 'id' }).pipe(
      map((vagas: any[]) => vagas.map(vaga => vaga as Vagas)),
      tap(vagas => console.log('Vagas from Firestore:', vagas))
    ) as Observable<Vagas[]>;
  }

  getVagaById(id: string): Observable<Vagas | undefined> {
    console.log('Fetching vaga with ID:', id);
    const vagaDoc = doc(this.firestore, `vagas/${id}`);
    return docData(vagaDoc, { idField: 'id' }).pipe(
      map(vaga => {
        if (!vaga) {
          throw new Error('Vaga not found');
        }
        return vaga as Vagas;
      }),
      tap(vaga => console.log('Retrieved vaga:', vaga))
    ) as Observable<Vagas>;
  }
}
