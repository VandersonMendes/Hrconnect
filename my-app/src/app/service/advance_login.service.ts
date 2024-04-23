import { Injectable } from '@angular/core';
import { BehaviorSubject, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvanceLoginService {
  advance_login: boolean = false;
}