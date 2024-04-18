import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ThemeService } from '../service/theme.service';
import { inject } from '@angular/core';
export const advanceLoginGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  // const themeService = inject(ThemeService);
  // if(themeService.isDarkMode.value){
  //   return false
  // }
  return true
};
