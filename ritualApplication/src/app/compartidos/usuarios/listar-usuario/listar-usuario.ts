import { Component, input } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario.interfaces';

@Component({
  selector: 'listar-usuario-component',
  imports: [],
  templateUrl: './listar-usuario.html',
  styleUrl: './listar-usuario.css'
})
export class ListarUsuarioComponent {

  usuarios = input.required<Usuario[]>();

  titulo = input.required<String>();
}
