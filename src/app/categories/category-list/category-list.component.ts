import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/category.model';
import { CategoryService } from 'src/app/shared/category.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  list: Category[];
  constructor(
    private service: CategoryService, private firestore:AngularFirestore){

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
  onEdit(cat:Category){
    this.service.formData= Object.assign({}, cat);

  }
  onDelete(id:string){
    if(confirm("Are you Sure You Want to Delete This Category?")){
this.firestore.doc('categories/'+id).delete();
    }
  }
}
