import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ContextService } from '../service/context.service';
import { inject } from '@angular/core';
export const advanceLoginGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  // const router = inject(Router);
  // const contextService = inject(ContextService);
  // if(contextService.advanceLogin){
  //   return true
  // }else{
  //   return false
  // }
  return true

};
