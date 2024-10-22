import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, BadgeModule, RippleModule, CommonModule, MenuModule, ButtonModule, ToastModule, ProfileComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items: MenuItem[] | undefined;
  isLogin = false

  constructor() {
    this.items = [
      {
        label: 'Início',
        icon: 'pi pi-home',
        url: "/"
      },
      {
        label: 'Conteúdos',
        icon: 'pi pi-star',
        url: "/conteudos"
      },
      {
        label: 'Eventos',
        icon: 'pi pi-calendar',
        url: "/eventos"
      },
    ];
  }
}
