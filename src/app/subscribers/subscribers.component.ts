import { Component, OnInit } from '@angular/core';
import { SubscribersService } from '../service/subscribers.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit{
  subscriberarray:Array<object>
constructor(private subService:SubscribersService){

}
ngOnInit(){
this.subService.loadData().subscribe(val=>{
  this.subscriberarray=val;
})

}
onDelete(id){
  this.subService.deleteData(id)
}
}
