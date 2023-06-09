import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { estudiante } from '../home/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  item$: Observable<any[]>;

  constructor(private firestore: Firestore) {
    const estudianteCollection = collection(this.firestore, 'estudiantes'); // Obtener la referencia a la colección "cars"
    this.item$ = collectionData(estudianteCollection, { idField: 'id' }); // Obtener un Observable de los documentos con el campo "id" incluido
  }

  getEstudiantes(){
    return this.item$;
  }

  createEstudiante(estudiante: estudiante): Promise<void> {
    const estudianteCollection: any = collection(this.firestore, 'estudiantes');
    return setDoc(doc(estudianteCollection), estudiante);
  }

}
