import { Component } from '@angular/core';
import {User} from '../../models/user.model';
import {CommonModule, DatePipe} from '@angular/common';
import {AvatarModule} from 'primeng/avatar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {SharedModule} from '../../shared/shared.module';
import {FlexModule} from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    DatePipe,
    AvatarModule,
    ButtonModule,
    CardModule,
    CommonModule,
    SharedModule,
    FlexModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: User = {
    firstName: 'André',
    lastName: 'Silva',
    email: 'andre@email.com',
    phone: '123456789',
    birthday: new Date('1990-01-01'),
    cars: [{ year: 2020, model: 'Fusca', licensePlate: 'ABC-1234', color: 'Blue' }],
    createdAt: new Date('2020-01-01'),
    lastLogin: new Date(),
  };

  selectedImage: string = '';

}
