import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../app/enviroment-globals';

/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsProvider {
  private base = baseUrl + 'Notifications';
  constructor(public http: HttpClient) {
    console.log('Hello PatientProvider Provider');
  }

  getNotifications() {
    return this.http.get(this.base);
  }
}
