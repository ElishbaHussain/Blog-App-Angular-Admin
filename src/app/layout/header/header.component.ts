import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  userMail:string
  isLoggedIn$:Observable<boolean>
  constructor(private authService:AuthService){}
  ngOnInit(): void {
     this.userMail= JSON.parse(localStorage.getItem('user')).email;

     this.isLoggedIn$=this.authService.isLoggedIn();
  }
  onLogout(){
    this.authService.logout();

  }



}
