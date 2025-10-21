import { effect, Injectable, signal } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interfaces';

const loadFromLocalStorage = (): Usuario[] => {
  const usuarios = localStorage.getItem('users');
  return usuarios ? JSON.parse(usuarios) : [];
};

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  // usuarios = signal<Usuario[]>([{ id: 1, nombre: 'Stiven', edad: 31 }]);  //Forma antes de crear la función
  usuarios = signal<Usuario[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('users', JSON.stringify(this.usuarios()));
  });

  agregarUsuario(user: Usuario) {
    this.usuarios.update((list) => [...list, user]);
  }
}
