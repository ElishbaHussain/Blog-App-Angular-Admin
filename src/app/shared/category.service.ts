import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  formData: Category;

  constructor(
    private firestore:AngularFirestore
  ) { }
  getCategory():Observable<any[]>{ 
    return this.firestore.collection('categories').snapshotChanges();
  }
}
