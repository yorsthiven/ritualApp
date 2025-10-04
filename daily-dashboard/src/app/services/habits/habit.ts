import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, updateDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Habit } from '../../models/habit';

@Injectable({ providedIn: 'root' })
export class HabitService {
  constructor(private firestore: Firestore) {}

  //agregar un habito
  addHabit(habit: Habit) {
    const habitRef = collection(this.firestore, 'habits');
    return addDoc(habitRef, habit);
  }

  //obtener los habitos actuales
  getHabits(): Observable<Habit[]> {
    const habitRef = collection(this.firestore, 'habits');
    return collectionData(habitRef, { idField: 'id' }) as Observable<Habit[]>;
  }

  //modificar el check del habito
  updateHabitStatus(habitId: string, estado: boolean) {
    const habitDocRef = doc(this.firestore, `habits/${habitId}`);
    const today = new Date().toISOString().slice(0, 10);
    return updateDoc(habitDocRef, {
      estado: estado,
      [`history.${today}`]: estado
    });
  }
}
