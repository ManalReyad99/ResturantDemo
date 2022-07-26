import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayOutComponent } from './main-lay-out/main-lay-out.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component:MainLayOutComponent, children: [
  { path:'',redirectTo:'/LoginPage/login',pathMatch:'full'},
  
    {
      path: 'OrderPage', 
      loadChildren: () => import('src/app/order/order.module').then(m => m.OrderModule)
    },
    {
      path: 'SubscriberPage', 
      loadChildren: () => import('src/app/subscriber/subscriber.module').then(m => m.SubscriberModule)
    },
  
 
    ]},
    {
      path: 'LoginPage', 
      loadChildren: () => import('src/app/login/login.module').then(m => m.LoginModule)
    },
   { path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
