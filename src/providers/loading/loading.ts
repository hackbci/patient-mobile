import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
@Injectable()
export class LoadingProvider {
  genericLoading;
  loading: boolean = true;
  constructor(
    public loadingCtrl: LoadingController,
  ) {
  }
  showLoading(): void {
    if (!this.genericLoading || this.genericLoading._detached) {
      this.genericLoading = this.loadingCtrl.create({
        content: 'Cargando',
      });
      this.genericLoading.present();
      this.setLoading(true);
    }
  }

  hideLoading(onClose?): void {
    if (onClose) {
      this.genericLoading.dismiss().then(() => {
        onClose();
      });
    } else {
      return this.genericLoading.dismiss();
    }
    this.setLoading(false);
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  isLoading() {
    return this.loading;
  }
}
