import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './Components/order/order.component';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './Components/reports/reports.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditSubscriberDataComponent } from './Components/edit-subscriber-data/edit-subscriber-data.component';
import { SubscriberDetailsComponent } from './Components/subscriber-details/subscriber-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




const routes: Routes = [

  {path:'order',component:OrderComponent},
  {path:'report',component:ReportsComponent},
  {path:'editSubscriber/:id',component:EditSubscriberDataComponent},
  {path:'details/:id',component:SubscriberDetailsComponent},

  
];
@NgModule({
  declarations: [
    OrderComponent,
    ReportsComponent,
    EditSubscriberDataComponent,
    SubscriberDetailsComponent
  ],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,

    RouterModule.forChild(routes)

  ]
})
export class OrderModule { }
