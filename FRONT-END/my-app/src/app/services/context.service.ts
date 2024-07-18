import { Injectable } from '@angular/core';
import { DataCreate } from '../interfaces/dataLogin';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor(private router: Router, private http: HttpClient) {
    this.advanceInicio$.subscribe(data => console.log(data.valueOf()));
  }
  private advanceLogin= new BehaviorSubject<boolean>(false);
  advanceLogin$ = this.advanceLogin.asObservable();
  advance() {
     this.advanceLogin.next(true);
  }
  notAdvance(){
    this.advanceLogin.next(false);
  }
  private advanceInicio = new BehaviorSubject<boolean>(false);
  advanceInicio$ = this.advanceInicio.asObservable();
  advanceStart() {
    this.advanceInicio.next(true);
  }
  notAdvanceStart() {
            this.router.navigate(['inicio']);
    this.advanceInicio.next(false);

  }
  
  saveDateLogin(dateLogin: DataCreate) {
    sessionStorage.setItem('dateLogin', JSON.stringify(dateLogin));
  }

  appInitializerRouter(){
    //  fazer logica JWT, para fazer o login automatico caso se o usuario possui token
  }

}
