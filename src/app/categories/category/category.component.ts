import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent  implements OnInit{
  constructor(
    public service:CategoryService,
    private firestore:AngularFirestore,
    private toastr: ToastrService,
  ){

  }
  ngOnInit(): void {
    this.resetForm();
      
  }
  resetForm(form?: NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData={
      id:null,
      name:'',

    }


  }

  OnSubmit(form:NgForm){
    let data=Object.assign({},form.value);
    delete data.id;
    if(form.value.id==null)
    this.firestore.collection('categories').add(data);
  else
  this.firestore.doc('categories/'+form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Submitted Successfully','CAT ADD',);

  }
 

}
