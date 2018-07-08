import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistorialPage } from './historial';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HistorialPage,
  ],
  imports: [
    IonicPageModule.forChild(HistorialPage),
    ComponentsModule
  ],
  exports: [
    HistorialPage
  ]
})
export class HistorialPageModule {}
