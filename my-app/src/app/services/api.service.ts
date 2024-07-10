import { Injectable } from '@angular/core';
import { DataAvance } from '../interfaces/dateLogin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  createUser(user: DataAvance) {
    this.http.post<DataAvance>('http://localhost:3000/auth/register', user).subscribe(data => {
      console.log(data)
    })
  }

}
