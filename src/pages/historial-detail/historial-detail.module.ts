import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistorialDetailPage } from './historial-detail';

@NgModule({
  declarations: [
    HistorialDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HistorialDetailPage),
  ],
  exports: [
    HistorialDetailPage 
  ]
})
export class HistorialDetailPageModule {}
