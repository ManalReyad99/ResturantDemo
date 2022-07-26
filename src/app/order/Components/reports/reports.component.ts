import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ISubscriber } from 'src/app/subscriber/Models/isubscriber';
import { SubscriberService } from 'src/app/subscriber/Service/subscriber.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
SubscribersList:ISubscriber[]=[];
subscriberPhone:any;
  constructor(private subscriberSevice:SubscriberService,private location:Location) { }

  ngOnInit(): void {


    this.subscriberSevice.getAllSubscribers().subscribe((allSubscribers:ISubscriber[])=>
      {
        this.SubscribersList=allSubscribers;
        console.log(this.SubscribersList)
      })
  }
  Delete(subscriberId:number)
  {if( confirm("هل تريد حذف المشترك")){
    this.subscriberSevice.deleteSubscriber(subscriberId).subscribe((result:any)=>{
      alert("تم حذف المشترك")
      window.location.reload()
      //this.ngOnInit()
    })

  }}
  Back()
  {
    this.location.back();
  }

}
