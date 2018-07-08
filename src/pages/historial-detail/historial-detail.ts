import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistorialDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial-detail',
  templateUrl: 'historial-detail.html',
})
export class HistorialDetailPage {
consulta: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.consulta = this.navParams.get('consulta');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialDetailPage');
  }

}
