import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';
import {UserFormComponent} from './user-form/user-form.component';
import {SharedModule} from '../../shared/shared.module';
import {User} from '../../models/user.model';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SharedModule, DatePipe, UserFormComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users!: User[];
  editUser: User = {email: '', firstName: '', lastName: '', phone: ''};


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

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers()
  }

  editUserById(user: User){
    if(user.id) {
      this.userService.getUserById(user.id).subscribe({
        next: (editUser) => {
          this.editUser = editUser;
        },
        error: () => console.log('error'),
      })
    }
  }

  getUsers(){
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: () => console.log('error'),
    })
  }

  deleteUser(user: User){
    //service delete
  }
}
