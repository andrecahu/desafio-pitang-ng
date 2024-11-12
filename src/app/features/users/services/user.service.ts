import { Injectable } from '@angular/core';
import {environment} from '../../../environment/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginRequest} from '../../../models/login-request.model';
import {Observable, tap} from 'rxjs';
import {SignInResponse} from '../../../models/sign-in-response.model';
import {User} from '../../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  createUser(usuario: User): Observable<SignInResponse> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<SignInResponse>(this.apiUrl, usuario, {headers}).pipe();
  }
}
