import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  item$: Observable<any[]>;

  constructor(private firestore: Firestore) {
    const carsCollection = collection(this.firestore, 'estudiantes'); // Obtener la referencia a la colección "cars"
    this.item$ = collectionData(carsCollection, { idField: 'id' }); // Obtener un Observable de los documentos con el campo "id" incluido
  }

  getEstudiantes(){
    return this.item$;
  }

}
