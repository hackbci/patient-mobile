import { Component } from '@angular/core';
import { PatientProvider } from '../../providers/patient/patient';
import { LoadingProvider } from '../../providers/loading/loading';

/**
 * Generated class for the AntecedentesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'antecedentes',
  templateUrl: 'antecedentes.html'
})
export class AntecedentesComponent {

  perfil: any;
  isLoading = true;

  constructor(private patientProvider: PatientProvider,
  private loading: LoadingProvider) {
    console.log('Hello PerfilComponent Component');
    this.getProfile();
  }

  ionViewWillEnter() {
    this.getProfile();
  }

  getProfile() {
    this.loading.showLoading();
    console.log('getProfile', this.patientProvider.getPerfil());
    this.perfil = this.patientProvider.getPerfil();
    this.loading.hideLoading();
    this.isLoading = false;
  }

}
