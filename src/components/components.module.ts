import { NgModule } from '@angular/core';
import { PerfilComponent } from './perfil/perfil';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AntecedentesComponent } from './antecedentes/antecedentes';
import { HistorialListComponent } from './historial-list/historial-list';
@NgModule({
	declarations: [
		PerfilComponent,
		AntecedentesComponent,
    HistorialListComponent
	],
	imports: [
		IonicModule,
		HttpModule
	],
	providers: [HttpClient],
	exports: [
		PerfilComponent,
		AntecedentesComponent,
    HistorialListComponent
	]
})
export class ComponentsModule { }
