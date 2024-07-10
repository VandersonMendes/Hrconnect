import { Injectable } from '@angular/core';
import { DateAvance } from '../interfaces/dateLogin';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  createUser(user: DateAvance) {
    console.log(user)
    this.http.post<any>('http://localhost:3000/auth/register', user).subscribe(data => {
      console.log(data)
    })
  }

}
