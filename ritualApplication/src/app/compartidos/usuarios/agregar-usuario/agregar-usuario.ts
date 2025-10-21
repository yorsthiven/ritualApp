import { Usuario } from './../../../interfaces/usuario.interfaces';
import { Component, inject, output, signal } from '@angular/core';

@Component({
  selector: 'agregar-usuario-component',
  imports: [],
  templateUrl: './agregar-usuario.html',
  styleUrl: './agregar-usuario.css',
})
export class AgregarUsuarioComponent {
  nombre = signal('');
  edad = signal(0);

  nuevoUsuario = output<Usuario>();

  agregarUsuario() {
    if (!this.nombre() || !this.edad() || this.edad() <= 0) {
      return;
    }
    const nuevoUsuario: Usuario = {
      id: Math.floor(Math.random() * 1000),
      nombre: this.nombre(),
      edad: this.edad(),
    };

    this.nuevoUsuario.emit(nuevoUsuario);

    this.resetCampos();
  }

  resetCampos() {
    this.nombre.set('');
    this.edad.set(0);
  }
}
