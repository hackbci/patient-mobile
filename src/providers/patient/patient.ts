import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../app/enviroment-globals';

/*
  Generated class for the PatientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PatientProvider {
  private base = baseUrl + 'patients';
  constructor(public http: HttpClient) {
    console.log('Hello PatientProvider Provider');
  }

  getPerfil(rut?, tipo?) {

    return this.http.get(this.base + '/find', {
      headers: {
        'number_identification': rut,
        'type_identification': tipo
      }
    });

  }

  save(perfil) {
    return this.http.put(this.base + '/' + perfil.id, perfil);
  }

}
