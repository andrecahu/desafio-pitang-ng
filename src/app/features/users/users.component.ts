import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';
import {UserFormComponent} from './user-form/user-form.component';
import {SharedModule} from '../../shared/shared.module';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SharedModule, DatePipe, UserFormComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users!: User[];

  cols: Array<{ field: string; header: string }> = [
    { field: 'firstName', header: 'First Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'email', header: 'Email Address' },
    { field: 'birthday', header: 'Birthday' },
    { field: 'phone', header: 'Phone' },
    { field: 'createdAt', header: 'Created At' },
    { field: 'lastLogin', header: 'Last Login At' },
    { field: 'edit', header: '' },
    { field: 'delete', header: '' },
  ];

  ngOnInit() {
    this.users = [
      {
        id: 'd5635000-b73b-4589-aeaa-d121c2310a57',
        firstName: 'Andre',
        lastName: 'Melo',
        email: 'andrecahu@email.com',
        birthday: new Date(),
        login: 'andre.cahu',
        phone: '988888888',
        cars: [
          {
            year: 2012,
            licensePlate: 'DRA-2802',
            model: 'Audi',
            color: 'Black'
          }
        ],
        createdAt: new Date(),
        lastLogin: new Date()
      },
    ];
  }

  editUser(user: User) {
    console.log(user);
    console.log("teste");
  }

  deleteUser(user: User){
    //service delete
  }
}
