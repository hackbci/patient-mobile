import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AntecedentesPage } from './antecedentes';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AntecedentesPage,
  ],
  imports: [
    IonicPageModule.forChild(AntecedentesPage),
    ComponentsModule
  ],
  exports: [
    AntecedentesPage
  ]
})
export class AntecedentesPageModule {}
