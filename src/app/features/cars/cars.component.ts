import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';
import {CarFormComponent} from './car-form/car-form.component';
import {SharedModule} from '../../shared/shared.module';
import {Car} from '../../models/car.model';
import {User} from '../../models/user.model';
import {CarService} from './services/car.service';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [SharedModule, DatePipe, CarFormComponent],
  providers: [
    CarService,
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  users!: User[];
  cars!: Car[];
  editCar!: Car;

  cols: Array<{ field: string; header: string }> = [
    { field: 'year', header: 'Year' },
    { field: 'licensePlate', header: 'License Plate' },
    { field: 'model', header: 'Model' },
    { field: 'color', header: 'Color' },
    { field: 'edit', header: '' },
    { field: 'delete', header: '' },
    ];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.getCars()
  }

  getCars(){
    this.carService.getCars().subscribe({
      next: (cars) => {
        this.cars = cars;
      },
      error: () => console.log('error'),
    })
  }

  editCarById(car: Car){
    if(car.id) {
      this.carService.getCarById(car).subscribe({
        next: (editCar) => {
          this.editCar = editCar;
        },
        error: () => console.log('error'),
      })
    }

  }

  deleteCar(car: Car){
    //service delete
  }
}
