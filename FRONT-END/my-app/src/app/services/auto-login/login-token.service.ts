import { Injectable } from '@angular/core';
import { ApiService } from '../serviceApi/api.service';
import { Router } from '@angular/router';
import { LoadingService } from '../loading.service';
import { ContextService } from '../context.service';
@Injectable({
  providedIn: 'root'
})
export class LoginTokenService {
  constructor(private api: ApiService, private router: Router, private loadingService: LoadingService, private context: ContextService) { }
  async autoLogin() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['registrar']);
      return;
    }else{
      this.router.navigate(['/painel']);
    }
    try {
      await this.api.validate_token(token).then(data => {
        this.loadingService.show();
        data.subscribe((data: any) => {
          if (data.error) {
            localStorage.removeItem('token');
            this.router.navigate(['/registrar']);
            this.loadingService.hide();
            this.context.notAdvanceStartHome();
            return;
          }

        }
        )
      })
    } catch (error) {
      console.log(error)
      localStorage.removeItem('token');
      this.router.navigate(['/entrar']);
      this.loadingService.hide();
      this.context.notAdvanceStartHome();
      return
    }
  }
}
