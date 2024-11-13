import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {FloatLabelModule} from 'primeng/floatlabel';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {SharedModule} from '../../../shared/shared.module';
import {Car} from '../../../models/car.model';
import {CarService} from '../services/car.service';

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
  providers: [
    CarService,
  ],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent {
  carForm: FormGroup;
  cars: Car[] = [];
  editCar: Car = {year: undefined, licensePlate: '', model: '', color: ''};
  @Output() updateCarList = new EventEmitter();


  constructor(private fb: FormBuilder,
              private carService: CarService,) {
    this.carForm = this.fb.group({
      year: ['', Validators.required],
      licensePlate: ['', Validators.required],
      model: ['', Validators.required],
      color: ['', Validators.required]

    });
  }

  submit(){
    if (!this.editCar.id){
      this.createCar()
    }
  }

  createCar(): void {
    const carData = {
      ...this.carForm.value
    };

    this.carService.createCar(carData).subscribe({
      next: () => {
        this.limpaFormularios()
        this.updateCarList.emit()
      },
      error: () => console.log('Erro'),
    })
  }

  limpaFormularios() {
    this.carForm.reset();
    this.editCar = {year: undefined, licensePlate: '', model: '', color: ''}
  }

}
