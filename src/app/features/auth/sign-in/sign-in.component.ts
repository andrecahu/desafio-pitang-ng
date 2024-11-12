import { Component } from '@angular/core';
import {ButtonDirective} from "primeng/button";
import {FlexModule} from "@ngbracket/ngx-layout";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SharedModule} from "../../../shared/shared.module";
import {Car} from '../../../models/car.model';

@Component({
  selector: 'app-sign-in',
  standalone: true,
    imports: [
        ButtonDirective,
        FlexModule,
        FloatLabelModule,
        InputTextModule,
        ReactiveFormsModule,
        SharedModule
    ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
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
