import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ContextService } from '../services/context.service';
import { inject } from '@angular/core';
export const inicioGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  // const router = inject(Router);
  // const contextService = inject(ContextService);
  // if(contextService..subscribe(data => data.valueOf)){
  //   return true
  // }else{
  //   router.navigate(['entrar'])
  //   return false
  // }
  return false
};
