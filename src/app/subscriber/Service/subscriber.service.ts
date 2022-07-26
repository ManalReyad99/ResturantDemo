import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISubscriber } from '../Models/isubscriber';
@Injectable({
  providedIn: 'root',
})
export class SubscriberService {
  private httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getAllSubscribers(): Observable<ISubscriber[]> {
    return this.httpClient.get<ISubscriber[]>(
      `${environment.BaseAPIURL}/Subscribers`
    );
  }

  addNewSubscriber(newSubscriber: ISubscriber): Observable<ISubscriber> {
    return this.httpClient.post<ISubscriber>(
      `${environment.BaseAPIURL}/Subscribers`,
      JSON.stringify(newSubscriber),
      this.httpOptions
    );
  }

  editSubscriberData(
    subscriberId: number,
    editedSubscriber: any
  ): Observable<ISubscriber> {
    return this.httpClient.put<ISubscriber>(
      `${environment.BaseAPIURL}/Subscribers/${subscriberId}`,
      JSON.stringify(editedSubscriber),
      this.httpOptions
    );
  }

  getCurrentSubscriberData(subscriberId: number): Observable<ISubscriber> {
    return this.httpClient.get<ISubscriber>(
      `${environment.BaseAPIURL}/Subscribers/${subscriberId}`
    );
  }
  deleteSubscriber(subscriberId: number): Observable<ISubscriber> {
    return this.httpClient.delete<ISubscriber>(
      `${environment.BaseAPIURL}/Subscribers/${subscriberId}`
    );
  }

  geSubscriberbyPhoneNumber(phone: string) {
    return this.httpClient.get(
      `${environment.BaseAPIURL}/Subscribers/Ay7aga/${phone}`
    );
  }
}
