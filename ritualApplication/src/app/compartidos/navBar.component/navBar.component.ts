import { Component,  } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'nav-bar-component',
  templateUrl: './navBar.component.html',
  styleUrl: './navBar.component.css',
  imports: [RouterLink, RouterLinkActive]
})

export class NavBarComponent {

}
