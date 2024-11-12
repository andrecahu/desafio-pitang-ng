import { Component } from '@angular/core';
import {User} from '../../models/user.model';
import {CommonModule, DatePipe} from '@angular/common';
import {AvatarModule} from 'primeng/avatar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {SharedModule} from '../../shared/shared.module';
import {FlexModule} from '@ngbracket/ngx-layout';
import {MeService} from './services/me.service';

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
  providers:[
    MeService,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: User = {birthday: undefined, email: '', firstName: '', lastName: '', phone: ''};

  constructor(private meService: MeService) {
  }

  ngOnInit() {
    this.getMe();
  }

  selectedImage: string = '';

  getMe(){
    this.meService.getMe().subscribe((user: User ) => {
      this.user = user;
    },
    (error) => {
      // console.log(error);
    })
  }
}
