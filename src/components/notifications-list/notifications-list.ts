import { Component } from '@angular/core';
import { NotificationsProvider } from '../../providers/notifications/notifications';
import { LoadingProvider } from '../../providers/loading/loading';

/**
 * Generated class for the NotifationsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notifications-list',
  templateUrl: 'notifications-list.html'
})
export class NotificationsListComponent {

  text: string;
  notifications: any;
  notificationsViejas: any;
  isLoading = true;

  constructor(
    private notifProvider: NotificationsProvider,
    private loading: LoadingProvider
  ) {
    console.log('Hello NotifationsListComponent Component');
    this.getNotifications();
  }

  getNotifications() {
    this.loading.showLoading();
    this.notifProvider.getNotifications()
    .subscribe(data => {
      this.isLoading = false;
      console.log('getNotifications', data);
      this.notifications = data;
      this.loading.hideLoading();
    }, err => {
      this.isLoading = false;
    });
  }

}
