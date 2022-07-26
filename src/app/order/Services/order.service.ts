import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOrder } from '../Models/iorder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })

    }
  }

 getAllOrders():Observable<IOrder[]>
 {
  return this.httpClient.get<IOrder[]>(`${environment.BaseAPIURL}/Requests`)
 }

 addNewOrder(newOrder:IOrder):Observable<IOrder>
 {

return this.httpClient.post<IOrder>(`${environment.BaseAPIURL}/Requests`,JSON.stringify(newOrder),this.httpOptions);
 }

 addNewOrderWithinSubscriberId(newOrder:IOrder,subscriberId:number):Observable<IOrder>
 {

return this.httpClient.post<IOrder>(`${environment.BaseAPIURL}/Requests/${subscriberId}`,JSON.stringify(newOrder),this.httpOptions);
 }

 editOrderData(orderId:number,editedOrder:IOrder):Observable<IOrder>
 {
  return this.httpClient.put<IOrder>(`${environment.BaseAPIURL}/Requests/${orderId}`,JSON.stringify(editedOrder),this.httpOptions)
 }

 getCurrentOrderData(orderId:number):Observable<IOrder>
 {
return this.httpClient.get<IOrder>(`${environment.BaseAPIURL}/Requests/${orderId}`)
 }
 deleteOrder(orderId:number):Observable<IOrder>
 {
return this.httpClient.delete<IOrder>(`${environment.BaseAPIURL}/Requests/${orderId}`)
 }

 getOrdersListBySubscriberId(subscriberId:number):Observable<IOrder[]>
 {
  return this.httpClient.get<IOrder[]>(`${environment.BaseAPIURL}/Requests/SubscriberId?id=${subscriberId}`)
 }
}
