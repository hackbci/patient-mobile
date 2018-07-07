import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../app/enviroment-globals';

/*
  Generated class for the PatientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PatientProvider {
  private base = baseUrl + 'patient';
  constructor(public http: HttpClient) {
    console.log('Hello PatientProvider Provider');
  }

  getPerfil(rut?) {
    // return this.http.get(this.base);
    return {
      // "createdAt": 1530995598336,
      // "updatedAt": 1530995598336,
      "id": "5b41238e667b97012226dd99",
      "first_name": "Example", // 
      "last_name": "Example", //
      "date": "07/07/2018",
      "birthdate": "07/07/2018", //
      // "age": "12", // calcular al enviar
      "sex": "Masculino", //
      // "type_identification": "RUT",
      "number_identification": "123123123123", //
      "nacionality": "Chileno", //
      "forecast": "asdasdasd",
      "activity": "Programador", //
      "region": "LATAM", //
      "commune": "Santiago Centro", //
      "street": "General Baquedano", //
      "number": 775, //
      "type_housing": "Departamento", //
      "telephone": "956723430", // 
      "email": "abdsp22@gmail.com", //
      "telephone_emergency": "956723430", //
      "morbid_background": "asdasd", //
      "gyneco_obstetric_history": "asd", //
      "surgeries": "asd", // 
      "habits": "asd", //
      "commonly_used_medications": "asd", //
      "allergies": "asd", //
      "social_personal_background": "asd", //
      "family_background": "asd", //
      "immunizations": "asd" //
  }
  }

}
