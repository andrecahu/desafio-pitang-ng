import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {FloatLabelModule} from 'primeng/floatlabel';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {SharedModule} from '../../../shared/shared.module';
import {Car} from '../../../models/car.model';
import {UserService} from '../services/user.service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    FlexLayoutModule,
  ],
  providers: [
    UserService,
  ],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;
  carForm: FormGroup;
  cars: Car[] = [];
  _editUser: User = {email: '', firstName: '', lastName: '', phone: ''};
  @Output() updateUserList = new EventEmitter();

  constructor(private fb: FormBuilder,
              private userService: UserService,) {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
    });
    this.carForm = this.fb.group({
      year: ['', Validators.required],
      licensePlate: ['', Validators.required],
      model: ['', Validators.required],
      color: ['', Validators.required]

    });
  }

  @Input()
  set editUser(user: User) {
    this._editUser = user;
    this.updateForm(user)
  }

  get editUser(): User {
    return this._editUser;
  }

  updateForm(user: User) {
    this.userForm.patchValue({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      birthday: user.birthday,
      login: user.login,
      password: user.password,
      phone: user.phone,
    })
  }

  addCar() {
    const car = {
      year: this.carForm.get('year')?.value,
      licensePlate: this.carForm.get('licensePlate')?.value,
      model: this.carForm.get('model')?.value,
      color: this.carForm.get('color')?.value
    };

    this.cars.push(car);

    this.carForm.reset()
  }

  deleteCar(car: Car) {
    this.cars.splice(this.cars.indexOf(car), 1);
  }

  submit() {
    if (!this.editUser.id) {
      this.createUser()
    } else {
      this.editUserById()
    }
  }

  createUser() {
    const userData = {
      ...this.userForm.value,
      cars: this.cars
    }

    this.userService.createUser(userData).subscribe({
      next: () => {
        this.limpaFormularios()
        this.updateUserList.emit()
      },
      error: () => console.log('Erro'),
    })
  }

  editUserById() {
    this.userService.editUserById(this.userForm.value).subscribe({
      next: () => {
        this.limpaFormularios()
        this.updateUserList.emit();
      },
      error: () => console.log('Erro')
    })
  }

  limpaFormularios() {
    this.userForm.reset();
    this.carForm.reset();
    this.cars = []
    this.editUser = {email: '', firstName: '', lastName: '', phone: ''}
  }
}
