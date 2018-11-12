import { Injectable } from '@angular/core';
import { PlatoInterface } from '../models/Plato';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
  platoCollection: AngularFirestoreCollection<PlatoInterface>;
  platoDoc: AngularFirestoreDocument<PlatoInterface>;
  platos: Observable<PlatoInterface[]>;
  plato: Observable<PlatoInterface>;
  constructor(
    private afs: AngularFirestore) {
      this.platoCollection = this.afs.collection('Platos', ref => ref);
     }

    addNewPlato(plato: PlatoInterface) {
      this.platoCollection.add(plato);
    }

    getAllPlatos(): Observable<PlatoInterface[]> {
      this.platos = this.platoCollection.snapshotChanges()
      .map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PlatoInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      });
      return this.platos;
    }

    getOnePlato(idPlato: string) {
      this.platoDoc = this.afs.doc<PlatoInterface>(`platos/${idPlato}`);
      this.plato = this.platoDoc.snapshotChanges().map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as PlatoInterface;
          data.id = action.payload.id;
          return data;
        }
      });
      return this.plato;
    }

    updatePlato(plato: PlatoInterface) {
      this.platoDoc = this.afs.doc(`platos/${plato.id}`);
      this.platoDoc.update(plato);
    }

    deletePlato(plato: PlatoInterface) {
      this.platoDoc = this.afs.doc(`platos/${plato.id}`);
      this.platoDoc.delete();
    }

}
