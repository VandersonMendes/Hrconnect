import { Component, OnInit } from '@angular/core';
import { AutoLoginService } from 'src/app/services/auto-login.service';
import { ApiService } from 'src/app/services/api.service';
import { ContextService } from 'src/app/services/context.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{
  constructor(private autoLoginService: AutoLoginService, private apiService: ApiService, private context: ContextService, private router: Router ) {
  }
  ngOnInit(): void {
      this.context.advanceStart();
      const token =  localStorage.getItem('token');
      if(token){
        this.apiService.validate_token(token).then(data => {
        data.subscribe((data: any) => {
          console.log(data)
         if(data.error){
          localStorage.removeItem('token');
          this.router.navigate(['/entrar'])
          this.context.notAdvanceStart()
          return;
        }
        })
      }, (error: any) => {
        console.log(error.error)
      })
      }
 
    }
}
