import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from 'src/en/environment.prod';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryService } from './shared/category.service';
import { ToastrModule } from 'ngx-toastr';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { LoginComponent } from './auth/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SubscribersComponent } from './subscribers/subscribers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CategoriesComponent,
    CategoryComponent,
    CategoryListComponent,
    AllPostComponent,
    NewPostComponent,
    LoginComponent,
    SubscribersComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
,FormsModule,
ReactiveFormsModule,
BrowserAnimationsModule,
AngularEditorModule,
HttpClientModule,
AngularFirestoreModule,
AngularFireStorageModule,
AngularFireAuthModule, 

ToastrModule.forRoot( ),




  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
