import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit{
  postArray:Array<object>;
  constructor(private postService:PostsService,
    private router:Router){

  }
  ngOnInit(){

    this.postService.loadData().subscribe(val=>{
      console.log(val);
      this.postArray=val;
  
    })
  }
  onDelete(postImgPath,id){
    this.postService.deleteImage(postImgPath,id);

  }
  onFeatured(id, value){
    const featuredData={
      isFeatured:value
    }
    this.postService.markFeatured(id, featuredData)
  }

}
