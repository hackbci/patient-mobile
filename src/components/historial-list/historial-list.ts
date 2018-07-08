import { Component } from '@angular/core';
import { ConsultProvider } from '../../providers/consult/consult';
import { LoadingProvider } from '../../providers/loading/loading';
import { NavController } from 'ionic-angular';
import { HistorialDetailPage } from '../../pages/historial-detail/historial-detail';
import { rut } from '../../app/enviroment-globals';

/**
 * Generated class for the HistorialListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'historial-list',
  templateUrl: 'historial-list.html'
})
export class HistorialListComponent {

  list = [];

  constructor(
    private consultProvider: ConsultProvider,
    private navCtrl: NavController,
    private loading: LoadingProvider
  ) {
    console.log('Hello HistorialListComponent Component');
    this.loadAll();
  }

  loadAll() {
    this.loading.showLoading();
    this.consultProvider.getConsult(rut)
    .subscribe(data => {
      console.log('getConsult', data);
      this.list = [];
      this.list = this.list.concat(data);
      this.loading.hideLoading();
    }, error => console.error(error));
  }

  verDetalle(consulta, caso, specialty) {
    console.log(consulta, caso, specialty);
    this.navCtrl.push(HistorialDetailPage, {consulta: consulta, caso: caso, specialty: specialty})
  }

}
