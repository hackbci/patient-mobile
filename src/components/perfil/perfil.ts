import { Component, OnChanges, Input } from '@angular/core';
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
export class PerfilComponent implements OnChanges {

  perfil: any;
  isLoading = true;
  @Input() editing;

  constructor(private patientProvider: PatientProvider,
    private loading: LoadingProvider) {
    console.log('Hello PerfilComponent Component');
    this.getProfile();
  }

  ionViewWillEnter() {
    this.getProfile();
  }

  ngOnChanges(changes) {
    if (changes['editing'] && changes['editing'].currentValue === false && !changes['editing'].firstChange) {
      this.edit();
    }
  }

  getProfile() {
    this.loading.showLoading();
    // console.log('getProfile', this.patientProvider.getPerfil());
    this.patientProvider.getPerfil('123123123123', 'RUT')
      .subscribe(data => {
        console.log('getProfile', data);
        this.perfil = data[0];
        this.loading.hideLoading();
        this.isLoading = false;
      },
    err => {
      console.error(err);
      this.loading.hideLoading();
        this.isLoading = false;
    });

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
