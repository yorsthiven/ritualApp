import { Component, inject, signal } from '@angular/core';
import { AgregarUsuarioComponent } from '../../compartidos/usuarios/agregar-usuario/agregar-usuario';
import { Usuario } from '../../interfaces/usuario.interfaces';
import { ListarUsuarioComponent } from '../../compartidos/usuarios/listar-usuario/listar-usuario';
import { UsuarioService } from '../../services/usuario.services';

@Component({
  selector: 'usuarios-page-component',
  imports: [AgregarUsuarioComponent, ListarUsuarioComponent],
  templateUrl: './usuarios-page.html',
  styleUrl: './usuarios-page.css',
})
export class UsuariosPageComponent {

public usuarioService = inject(UsuarioService);

}
