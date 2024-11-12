import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {FloatLabelModule} from 'primeng/floatlabel';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {SharedModule} from '../../../shared/shared.module';
import {Car} from '../../../models/car.model';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    FlexLayoutModule,
  ],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent {
  carForm: FormGroup;
  cars: Car[] = [];

  constructor(private fb: FormBuilder) {
    this.carForm = this.fb.group({
      year: ['', Validators.required],
      licensePlate: ['', Validators.required],
      model: ['', Validators.required],
      color: ['', Validators.required]

    });
  }

  addCar(): void {
    const car = {
      year: this.carForm.get('year')?.value,
      licensePlate: this.carForm.get('licensePlate')?.value,
      model: this.carForm.get('model')?.value,
      color: this.carForm.get('color')?.value
    };

    //subscribe service
  }

}
