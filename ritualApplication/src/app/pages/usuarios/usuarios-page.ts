import { Component, signal } from '@angular/core';
import { AgregarUsuarioComponent } from '../../compartidos/usuarios/agregar-usuario/agregar-usuario';
import { Usuario } from '../../interfaces/usuario.interfaces';
import { ListarUsuarioComponent } from '../../compartidos/usuarios/listar-usuario/listar-usuario';

@Component({
  selector: 'usuarios-page-component',
  imports: [AgregarUsuarioComponent, ListarUsuarioComponent],
  templateUrl: './usuarios-page.html',
  styleUrl: './usuarios-page.css',
})
export class UsuariosPageComponent {
  usuarios = signal<Usuario[]>([{ id: 1, nombre: 'Stiven', edad: 31 }]);

  agregarUsuario(user: Usuario) {
    this.usuarios.update((list) => [...list, user]);
    // console.log("object");
    // console.log(this.usuarios);
  }
}
