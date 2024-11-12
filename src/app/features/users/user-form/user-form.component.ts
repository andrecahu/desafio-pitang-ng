import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {FloatLabelModule} from 'primeng/floatlabel';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {SharedModule} from '../../../shared/shared.module';
import {Car} from '../../../models/car.model';
import {UserService} from '../services/user.service';

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

  constructor(private fb: FormBuilder,
              private userService: UserService,) {
    this.userForm = this.fb.group({
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
    const userData = {
      ...this.userForm.value,
      cars: this.cars
    };
    this.userService.createUser(userData).subscribe({
      next: () => {
        this.userForm.reset();
        this.carForm.reset();
        this.cars = []
      },
      error: () => console.log('Erro'),
    })
  }
}
