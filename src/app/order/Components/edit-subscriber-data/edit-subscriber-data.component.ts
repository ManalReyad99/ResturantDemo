import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriberService } from 'src/app/subscriber/Service/subscriber.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-subscriber-data',
  templateUrl: './edit-subscriber-data.component.html',
  styleUrls: ['./edit-subscriber-data.component.scss']
})
export class EditSubscriberDataComponent implements OnInit {

alert:boolean=false;
EditSubscriberData:FormGroup


  constructor(private subscriberService :SubscriberService,
    private router:ActivatedRoute,private route :Router,private location: Location) {
      this.EditSubscriberData=new FormGroup({
        name:new FormControl(''),
        phoneNumber:new FormControl(''),
        startDate:new FormControl(''),
        endDate:new FormControl(''),
        numberOfMail :new FormControl(''),
      });
      
   
   }

  ngOnInit(): void {
    
console.log(this.router.snapshot.params['id'])
this.subscriberService.getCurrentSubscriberData(this.router.snapshot.params['id']).subscribe((result:any)=>{

  this.EditSubscriberData =new FormGroup({
    name:new FormControl(result['name']),
    phoneNumber:new FormControl(result['phoneNumber']),
    startDate:new FormControl(result['startDate'].toString().substring(0,10)),
    endDate:new FormControl(result['endDate'].toString().substring(0,10)),
    numberOfMail :new FormControl(result['numberOfMail']),
});


})
   
}

Edit(){
  console.log(this.EditSubscriberData.value);
  console.log(this.router.snapshot.params['id']);
this.subscriberService.editSubscriberData(this.router.snapshot.params['id'],this.EditSubscriberData.value).subscribe((result:any)=>{
  console.log(result,"Product Updated Successfuly");
  this.alert=true;
  this.route.navigate(['/OrderPage/report'])
})

}
CloseAlert()
{
  this.alert=false
}
Back()
{
  this.location.back();
}

}
