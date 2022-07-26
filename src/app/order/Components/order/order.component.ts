import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ISubscriber } from 'src/app/subscriber/Models/isubscriber';
import { SubscriberService } from 'src/app/subscriber/Service/subscriber.service';
import { IAdditionalMeal } from '../../Models/iadditional-meal';
import { IMealType } from '../../Models/imeal-type';
import { IOrder } from '../../Models/iorder';
import { OrderService } from '../../Services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  mealsTypeList: IMealType[] = [];
  additionsList: IAdditionalMeal[] = [];
  selectedMeals: IMealType[] = [];
  allLastQuantity: number = 0;
  MealsTypeDropdownList: IDropdownSettings = {};
  AddtionsDropdownList: IDropdownSettings = {};
  subscribeType: number = 0;
  orderData!: FormGroup;

  newOrder: IOrder = {} as IOrder;
  remainingQuantity: number = 0;
  allSubscribers: ISubscriber[] = [];
  currentSubscriber: any; //ISubscriber={} as ISubscriber
  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private subscriberService: SubscriberService,
    private location:Location
  ) {}
   mealTypesList: any = [];
   otherAddtionsList: any = [];
  ngOnInit(): void {

    this.mealsTypeList = [
      { id: 1, name: 'لحمه' },
      { id: 2, name: 'فراخ' },
      { id: 3, name: 'سمك' },
      { id: 4, name: 'الإفطار' },
    ];
    this.MealsTypeDropdownList = {
      idField: 'id',
      textField: 'name',
      enableCheckAll: true,
      selectAllText: 'حدد الكل',
      unSelectAllText: 'لا تحدد الكل',
    };

    this.additionsList = [
      { id: 1, mealName: 'مشروبات' },
      { id: 2, mealName: 'سناك' },
      { id: 3, mealName: 'سلطات' },
    ];
    this.AddtionsDropdownList = {
      idField: 'id',
      textField: 'mealName',
      enableCheckAll: true,
      selectAllText: 'حدد الكل',
      unSelectAllText: 'لا تحدد الكل',
    };
    this.orderData = this.fb.group({
      quantity: ['', Validators.required],
      orderDate: ['', Validators.required],
      mealsType: ['', [Validators.required]],
      otherAdditons: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      // ,Validators.pattern('^((?:[+?0?0?966]+)(?:\s?\d{2})(?:\s?\d{7}))$')
    });
    
  }

  getSelectedMeals(ids: any) {
    return this.mealsTypeList.filter((item) => ids.includes(item.id));
  }
  getSelectedAdditions(ids: any) {
    return this.additionsList.filter((item) => ids.includes(item.id));
  }
  get phone() {
    return this.orderData.controls['phone'];
  }

  addOrder() {
    this.subscriberService
      .geSubscriberbyPhoneNumber(this.orderData.value.phone)
      .subscribe((result:any) => {
        this.currentSubscriber = result;
        console.log('______________(currentSubscriberData)___________');
        console.log(this.currentSubscriber);
        this.subscribeType = this.currentSubscriber.numberOfMail;
        console.log(this.subscribeType);

        this.newOrder.quantity = this.orderData.value.quantity;
        console.log('this.newOrder.quantity');
        console.log(this.newOrder.quantity);

        this.newOrder.orderDate = this.orderData.value.orderDate;
        this.newOrder.mealTypes = this.getSelectedMeals(
          this.orderData.value.mealsType.map((item: IMealType) => item.id)
        );
        console.log(this.newOrder.mealTypes);
        console.log("this.newOrder.mealTypes");

        this.newOrder.other_meals = this.getSelectedAdditions(
          this.orderData.value.otherAdditons.map(
            (item: IAdditionalMeal) => item.id
          )

        );
        console.log( "this.newOrder.other_meals");
        console.log( this.newOrder.other_meals);
        console.log("this.mealTypes")
console.log(this.newOrder.mealTypes)
for (let index = 0; index < this.newOrder.mealTypes.length; index++) {
  this. mealTypesList.push({ name: this.newOrder.mealTypes[index].name });
}

//___________(Addtions)___________________
for (let index = 0; index < this.newOrder.other_meals.length; index++) {
  this. otherAddtionsList.push({
    mealName: this.newOrder.other_meals[index].mealName,
  });
}

        //___________(MealTyps)___________________

        this.newOrder.mealTypes = this.mealTypesList;
        this.newOrder.other_meals = this.otherAddtionsList;
        console.log('___________(Addtions)___________________');
        console.log(this.newOrder.other_meals);
        

if(this.orderData.valid)
{
  if(this.currentSubscriber.remainingQuantity>=this.newOrder.quantity){
    this.orderService
      .addNewOrderWithinSubscriberId(this.newOrder, this.currentSubscriber.id)
      .subscribe((result:any) => {
        console.log('this.currentSubscriber');
        console.log(this.currentSubscriber);
        console.log(result)
        console.log(result.remaining_Quantity)
        this.remainingQuantity = result;
        console.log(this.remainingQuantity);
      });}
      else{
        alert("الكميه المسحوبه اكبر من الكميه المتبقيه فى حسابك")
      }
}
else 
{
  alert(" ادخل البيانات صحيحه ")

}

    });
  }
  Back()
{
  this.location.back();
}
}
