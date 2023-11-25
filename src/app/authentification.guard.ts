import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from './serv/admin.service';

export const authentificationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
const authService = inject(AdminService);
  if (authService.isAuthenticated()) {
    return true;
    }
    else {
    router.navigate(['/login']);
    return false;
    }
};
