import { Component, ViewEncapsulation } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AvatarModule, MenuModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  encapsulation: ViewEncapsulation.None // Desativando o encapsulamento
})
export class ProfileComponent {
  profileItems: MenuItem[] | undefined
  
  constructor() {
    this.profileItems =  [
      {
        label: 'Meu Perfil',
        url: "/peril"
      },
      {
        label: 'Sair',
        url: "/logout",
        styleClass: "logout-menu-item"
      },
    ];
  }
}
