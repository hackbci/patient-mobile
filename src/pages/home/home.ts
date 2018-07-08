import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  editing = false;
  constructor(public navCtrl: NavController) {

  }

  toggleEdit() {
    if(this.editing === true) {
      this.editing = false;
    } else {
      this.editing = true;
    }
  }

}
