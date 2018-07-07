import { NgModule } from '@angular/core';
import { PerfilComponent } from './perfil/perfil';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AntecedentesComponent } from './antecedentes/antecedentes';
@NgModule({
	declarations: [
		PerfilComponent,
		AntecedentesComponent
	],
	imports: [
		IonicModule,
		HttpModule
	],
	providers: [HttpClient],
	exports: [
		PerfilComponent,
		AntecedentesComponent
	]
})
export class ComponentsModule { }
