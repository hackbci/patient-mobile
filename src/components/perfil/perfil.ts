import { Component } from '@angular/core';
import { PatientProvider } from '../../providers/patient/patient';
import { LoadingProvider } from '../../providers/loading/loading';

/**
 * Generated class for the PerfilComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'perfil',
  templateUrl: 'perfil.html'
})
export class PerfilComponent {

  perfil: any;
  isLoading = true;
  editing = false;

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

  toggleEdit() {
    if(this.editing === true) {
      this.editing = false;
      this.edit();
    } else {
      this.editing = true;
    }
  }

  edit() {
    console.log('guardar perfil');
  }

}
