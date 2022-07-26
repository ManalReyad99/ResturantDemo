import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISubscriber } from 'src/app/subscriber/Models/isubscriber';
import { SubscriberService } from 'src/app/subscriber/Service/subscriber.service';
import { IOrder } from '../../Models/iorder';
import { OrderService } from '../../Services/order.service';

@Component({
  selector: 'app-subscriber-details',
  templateUrl: './subscriber-details.component.html',
  styleUrls: ['./subscriber-details.component.scss']
})
export class SubscriberDetailsComponent implements OnInit {
currentSubscriberData:ISubscriber ={} as ISubscriber;
subscriberOrderList:IOrder[]=[];
  constructor(private router:ActivatedRoute,private subscriberService:SubscriberService,
    private orderService:OrderService,private location:Location) { }

  ngOnInit(): void {


    console.log(this.router.snapshot.params['id']);
    this.subscriberService.getCurrentSubscriberData(this.router.snapshot.params['id']).subscribe((result:ISubscriber)=>{
    
    this.currentSubscriberData=result;
    console.log(this.currentSubscriberData);
    this.orderService.getOrdersListBySubscriberId(this.currentSubscriberData.id).subscribe((result:IOrder[])=>{
      this.subscriberOrderList=result;
      console.log(this.subscriberOrderList);
    })
    });
    

  }
  Back()
  {
    this.location.back();
  }

}
