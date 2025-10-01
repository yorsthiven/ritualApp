import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, updateDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Task {
  id?: string;
  title: string;
  status: 'pending' | 'done';
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private firestore: Firestore) {}

  // Agregar tarea
  addTask(task: Task) {
    const taskRef = collection(this.firestore, 'tasks');
    return addDoc(taskRef, task);
  }

  // Leer tareas
  getTasks(): Observable<Task[]> {
    const taskRef = collection(this.firestore, 'tasks');
    return collectionData(taskRef, { idField: 'id' }) as Observable<Task[]>;
  }

  // Actualizar estado de la tarea
  updateTaskStatus(taskId: string, status: 'pending' | 'done') {
    const taskDoc = doc(this.firestore, `tasks/${taskId}`);
    return updateDoc(taskDoc, { status });
  }
}
