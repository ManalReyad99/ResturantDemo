import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISubscriber } from '../../Models/isubscriber';
import { SubscriberService } from '../../Service/subscriber.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {
  addSubscriber!:FormGroup
  subscriberData:ISubscriber={} as ISubscriber;
  alert:boolean=false;

  constructor(private fb :FormBuilder,private subscriberService:SubscriberService,
    private route:Router) { }


  ngOnInit(): void {
    this.addSubscriber=this.fb.group({
      subscriberPhone:['',Validators.required] ,
      subscriberName:['',Validators.required] ,
      startDate:[Date,Validators.required] ,
      endDate:[Date,Validators.required] ,
      monthSubscribeType:['',Validators.required] ,

    })
  }

  addSubscriberData()
  {
    console.log(this.addSubscriber.value);
    this.subscriberData.name=this.addSubscriber.value.subscriberName;
    this.subscriberData.phoneNumber=this.addSubscriber.value.subscriberPhone;
    if(this.subscriberData.startDate<this.subscriberData.endDate)
    {
      console.log(this.subscriberData.startDate)
    this.subscriberData.startDate=this.addSubscriber.value.startDate;
      this.subscriberData.endDate=this.addSubscriber.value.endDate;
    }
    else{
      alert("التاريخ غير متوافق")
    }
    this.subscriberData.numberOfMail=this.addSubscriber.value.monthSubscribeType;
    if(this.addSubscriber.valid)
    {this.subscriberService.addNewSubscriber(this.subscriberData).subscribe((result:ISubscriber)=>
      { console.log(result);
          alert('تم إضافة مشترك بنجاح')
           window.location.reload()
      })}
      else
      {
        alert("أدخل البيانات صحيحيه")
      }

}
}
