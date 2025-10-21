import { Routes } from '@angular/router';
import { UsuariosPageComponent } from './pages/usuarios/usuarios-page';
import { HabitosPageComponent } from './pages/habitos/habitos-page';
import { TareasPageComponent } from './pages/tareas/tareas-page';

export const routes: Routes = [

  // {
  //   path:'',
  //   component:CounterPageComponent,
  // },
  {
    path:'usuarios',
    component:UsuariosPageComponent
  },
  {
    path:'habitos',
    component:HabitosPageComponent
  },
  {
    path:'tareas',
    component:TareasPageComponent
  },
  {
    path:'**',
    redirectTo:''
  },

];
