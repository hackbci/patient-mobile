import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PatientProvider } from '../providers/patient/patient';
import { ComponentsModule } from '../components/components.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LoadingProvider } from '../providers/loading/loading';
import { AntecedentesPage } from '../pages/antecedentes/antecedentes';
import { ConsultProvider } from '../providers/consult/consult';
import { HistorialPage } from '../pages/historial/historial';
import { AntecedentesPageModule } from '../pages/antecedentes/antecedentes.module';
import { HistorialPageModule } from '../pages/historial/historial.module';
import { HistorialDetailPageModule } from '../pages/historial-detail/historial-detail.module';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpClientModule,
    AntecedentesPageModule,
    HistorialPageModule,
    HistorialDetailPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PatientProvider,
    LoadingProvider,
    ConsultProvider
  ]
})
export class AppModule {}
