import { Component } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  itens: MenuItem[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.itens = [
      { label: 'Usuários', routerLink: '/users', icon: 'pi pi-users' },
      { label: 'Carros', routerLink: '/cars', icon: 'pi pi-car' },
      { label: 'Perfil', routerLink: '/me', icon: 'pi pi-user' }
    ];
  }

  navigateToSignin(){
    this.router.navigate(['/signin']);
  }
}
