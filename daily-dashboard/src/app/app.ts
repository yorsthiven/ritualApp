import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './services/tareas/task';

// Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { firebaseConfig } from '../enviroments/enviroment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  template: `
    <h1>Mi Ritual App</h1>
    <button (click)="saveTask()">Agregar tarea</button>
  `
})
export class App {

  protected readonly title = signal('inicio de ritualApp');

  constructor(private taskService: TaskService) {}

  saveTask() {
    this.taskService.addTask({ title: 'Mi primera tarea', status:'pending', date: new Date() })
      .then(() => console.log('Tarea guardada!'))
      .catch(err => console.error('Error al guardar', err));
  }

}
