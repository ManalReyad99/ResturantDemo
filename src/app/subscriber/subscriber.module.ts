import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriberComponent } from './Components/subscriber/subscriber.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


const routes: Routes = [

  {path:'subscriber',component:SubscriberComponent}
];

@NgModule({
  declarations: [
    SubscriberComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,

    RouterModule.forChild(routes)

  ]
})
export class SubscriberModule { }
