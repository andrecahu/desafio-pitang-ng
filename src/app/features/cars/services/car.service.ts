import { Injectable } from '@angular/core';
import {environment} from '../../../environment/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../../models/user.model';
import {Observable} from 'rxjs';
import {SignInResponse} from '../../../models/sign-in-response.model';
import {Car} from '../../../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = `${environment.apiUrl}/cars`;

  constructor(private http: HttpClient) { }

  createCar(car: Car): Observable<SignInResponse> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<SignInResponse>(this.apiUrl, car, {headers}).pipe();
  }
}
