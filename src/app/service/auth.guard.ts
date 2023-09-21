import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private authservice:AuthService, 
    private toastr:ToastrService,
    private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


  
    if (this.authservice.isLoggedInGaurd) {
      console.log('Access Granted');
      return true;
    } else {
      this.toastr.warning('You donot have permision to access this page..');
      this.router.navigate(['/login'])
    return false;
    }
  }

  private checkAuthentication(): boolean {
    // Your authentication logic goes here.
    // Return true if the user is authenticated; otherwise, return false.
    // You can check a token, a session, or any other authentication mechanism.
    return true; // Replace with your actual authentication check.
  }
}