import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './service/auth.guard';
import { SubscribersComponent } from './subscribers/subscribers.component';

const routes: Routes = [
  {path:'', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'category' ,component:CategoriesComponent, canActivate:[AuthGuard]},
  {path:'post',component:AllPostComponent, canActivate:[AuthGuard]},
  {path:'post/new',component:NewPostComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'subscriber', component:SubscribersComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
