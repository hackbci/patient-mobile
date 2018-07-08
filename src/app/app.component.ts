import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import * as Pusher from '../lib/pusher.min.js';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(
    platform: Platform, statusBar: StatusBar,
     private splashScreen: SplashScreen,
     private alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      Pusher.logToConsole = true;

      var pusher = new Pusher('f706aca5379fb3c2f172', {
        cluster: 'us2',
        encrypted: true
      });

      var channel = pusher.subscribe('my-channel');
      channel.bind('my-event', data => {
        console.log('PUSH', data);
        this.alertCtrl.create({
          title: data.message, 
          message: data.advice,
          buttons: [
            {
              text: 'Aceptar',
              handler: () => {
                console.log('Agree clicked');
              }
            }
          ]
        })
        .present();
        
      });
    });
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
