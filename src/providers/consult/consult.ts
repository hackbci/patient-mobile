import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../app/enviroment-globals';

/*
  Generated class for the ConsultProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsultProvider {
  private base = baseUrl + 'MedicalConsultation';

  constructor(public http: HttpClient) {
    console.log('Hello ConsultProvider Provider');
  }

  getConsult(rut) {
    return this.http.get(this.base + '/find', {
      headers: {
        'rut': rut
      }
    });

  //   return {
  //     "createdAt": "2018-07-07T23:55:58.104Z",
  //     "updatedAt": "2018-07-07T23:55:58.104Z",
  //     "id": "5b41530e9f285100c6b90a23",
  //     "rut": 123123123123,
  //     "medication": [
  //         {
  //             "_id": "5a8bba74aceac5390184b5bc",
  //             "active": 1,
  //             "bioequivalent": 0,
  //             "category": "S/C Medicamentos",
  //             "cod_provider": 1020446,
  //             "composition": "",
  //             "contraindications": "",
  //             "drug_interactions": "",
  //             "featured": 0,
  //             "image": "product/images/500x254-1-medicamentos.jpg",
  //             "important_products": "NULL",
  //             "indications": "",
  //             "internet_sale": 0,
  //             "introductions": "",
  //             "keywords": "NULL",
  //             "laboratory": "RECALCINE PROMOCIONALES",
  //             "master_category": "Medicamentos",
  //             "name": "ENERDAY 6 HORAS TRADICIONAL X 60 ML",
  //             "ordering": 4230,
  //             "overdose": "",
  //             "posology": "",
  //             "prescription_type": "NP",
  //             "presentation": "",
  //             "price": 840,
  //             "principe_active": "CAFEINA+TAURINA+VITAMINAS",
  //             "quantity": 1,
  //             "side_effect": "",
  //             "sku": 7800026002124,
  //             "stock": 100,
  //             "therapeutic_action": "",
  //             "thumb_image": "product/images/500x254-1-medicamentos.jpg",
  //             "unit": "",
  //             "unit_price": 0,
  //             "usual_dose": 60,
  //             "visible": 1,
  //             "warnings": "",
  //             "subcategory": "S/S Medicamentos",
  //             "meta_title": "",
  //             "meta_description": "",
  //             "meta_keywords": "",
  //             "objectID": "34041830"
  //         },
  //         {
  //             "_id": "5a8bba74aceac5390184b5bc",
  //             "active": 1,
  //             "bioequivalent": 0,
  //             "category": "S/C Medicamentos",
  //             "cod_provider": 1020446,
  //             "composition": "",
  //             "contraindications": "",
  //             "drug_interactions": "",
  //             "featured": 0,
  //             "image": "product/images/500x254-1-medicamentos.jpg",
  //             "important_products": "NULL",
  //             "indications": "",
  //             "internet_sale": 0,
  //             "introductions": "",
  //             "keywords": "NULL",
  //             "laboratory": "RECALCINE PROMOCIONALES",
  //             "master_category": "Medicamentos",
  //             "name": "ENERDAY 6 HORAS TRADICIONAL X 60 ML",
  //             "ordering": 4230,
  //             "overdose": "",
  //             "posology": "",
  //             "prescription_type": "NP",
  //             "presentation": "",
  //             "price": 840,
  //             "principe_active": "CAFEINA+TAURINA+VITAMINAS",
  //             "quantity": 1,
  //             "side_effect": "",
  //             "sku": 7800026002124,
  //             "stock": 100,
  //             "therapeutic_action": "",
  //             "thumb_image": "product/images/500x254-1-medicamentos.jpg",
  //             "unit": "",
  //             "unit_price": 0,
  //             "usual_dose": 60,
  //             "visible": 1,
  //             "warnings": "",
  //             "subcategory": "S/S Medicamentos",
  //             "meta_title": "",
  //             "meta_description": "",
  //             "meta_keywords": "",
  //             "objectID": "34041830"
  //         }
  //     ],
  //     "symptom": [
  //         "gripe",
  //         "asma",
  //         "dolor de pecho"
  //     ],
  //     "patology": [
  //         "alergia",
  //         "asma"
  //     ],
  //     "exams": [
  //         "perfil alergia",
  //         "perfil de asma"
  //     ],
  //     "indications": "asjdakljsdklajsdla",
  //     "prices": 12000
  // }
  }

}
