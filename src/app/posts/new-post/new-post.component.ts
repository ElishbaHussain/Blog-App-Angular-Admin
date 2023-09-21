import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup ,Validators, } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';

import { Category } from 'src/app/shared/category.model';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
permalink:string='';
selectedImg:any;
imgSrc:any ='./assets/placeholder-image.jpg';
list: Category[];

post:any;
postForm: FormGroup;
docId:string;
formStatus:string='Add New';

constructor(private service: CategoryService,
   private firestore:AngularFirestore,
   private fb: FormBuilder,
   private postService:PostsService,
   private route:ActivatedRoute
   ){

    this.route.queryParams.subscribe(val=>
      {
        this.docId= val['id'];
        if(this.docId){
          this.postService.loadOneData(val['id']).subscribe(post=>{

            this.post=post;
            this.postForm= this.fb.group({
              title:[this.post.title,[Validators.required, Validators.minLength(10)]],
              
              permalink: [this.post.permalink, { disabled: true }], 
              excerpt:[this.post.excerpt,[Validators.required, Validators.minLength(50)]],
              category:[`${this.post.category.id}-${this.post.category.name}`,Validators.required],
              postImg:['',Validators.required],
              content:[this.post.content,Validators.required],
            })
            this.imgSrc=this.post.postImgPath;
            this.formStatus='Edit'
          })
        }
        else{
          
            this.postForm= this.fb.group({
              title:['',[Validators.required, Validators.minLength(10)]],
              
              permalink: ['', { disabled: true }], 
              excerpt:['',[Validators.required, Validators.minLength(50)]],
              category:['',Validators.required],
              postImg:['',Validators.required],
              content:['',Validators.required],
            })

        }
      
      })
   

   }

ngOnInit(){
  this.service.getCategory().subscribe(actionArray=>{
    this.list= actionArray.map(item=>{
      return {
        id:item.payload.doc.id, 


        ...item.payload.doc.data()
      } as Category;
     
    })

  })

}
get fc(){
  return this.postForm.controls;
}
  onTitleChanged($event){
    const title =$event.target.value;
    this.permalink=title.replace(/\s/g,'-');

  }


  shortPreview($event){
    const reader= new FileReader();
    reader.onload=(e)=>{
      this.imgSrc=e.target.result
    }
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg=$event.target.files[0];
  }

  onSubmit(){
    console.log(this.postForm.value);
    let splitted= this.postForm.value.category.split('-');
    console.log(splitted)

    const postData:Post={
      title: this.postForm.value.title,
      permalink: this.postForm.value.permalink,
      category:{
        id:splitted[0],
        name:splitted[1]
      },
      postImgPath:'',
      excerpt: this.postForm.value.excerpt,
      content: this.postForm.value.content,
      isFeatured:false,
      views:0,
      status:'new',
      createAt:new Date(),

    }
  this.postService.uploadImage(this.selectedImg, postData, this.formStatus, this.docId);
  this.postForm.reset();
  this.imgSrc='./assets/placeholder-image.jpg';
  }
}
