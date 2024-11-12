import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';
import {CarFormComponent} from './car-form/car-form.component';
import {SharedModule} from '../../shared/shared.module';
import {Car} from '../../models/car.model';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [SharedModule, DatePipe, CarFormComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  users!: User[];
  cars!: Car[];

  cols: Array<{ field: string; header: string }> = [
    { field: 'year', header: 'Year' },
    { field: 'licensePlate', header: 'License Plate' },
    { field: 'model', header: 'Model' },
    { field: 'color', header: 'Color' },
    { field: 'edit', header: '' },
    { field: 'delete', header: '' },
    ];

  ngOnInit() {
    this.cars = [
      {
        year: 2012,
        licensePlate: 'DRA-2802',
        model: 'Audi',
        color: 'Black'
      }
    ]
  }

  editCar(cars: Car) {
    console.log(cars);
    console.log("teste");
  }

  deleteCar(car: Car){
    //service delete
  }
}
