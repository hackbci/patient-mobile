import { Component, Input } from '@angular/core';
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

  @Input() editing;
  perfil: any;
  isLoading = true;
  

  constructor(private patientProvider: PatientProvider,
  private loading: LoadingProvider) {
    console.log('Hello PerfilComponent Component');
    this.getProfile();
  }

  getProfile() {
    this.loading.showLoading();
    this.patientProvider.getPerfil('123123123123', 'RUT')
      .subscribe(data => {
        console.log('getProfile', data);
        this.perfil = data[0];
        this.loading.hideLoading();
        this.isLoading = false;
      },
    err => {
      console.error(err);
    });
  }

  ngOnChanges(changes) {
    if(changes['editing'] && changes['editing'].currentValue === false && !changes['editing'].firstChange) {
      this.edit();
    }
  }

  edit() {
    this.loading.showLoading();
    console.log('guardar perfil');
    this.patientProvider.save(this.perfil)
    .subscribe(data => {
      console.log('saveProfile', data);
      this.perfil = data;
        this.loading.hideLoading();
        this.isLoading = false;
    }, err => {
      this.loading.hideLoading();
        this.isLoading = false;
    });
  }

}
