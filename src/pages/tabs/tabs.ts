import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AntecedentesPage } from '../antecedentes/antecedentes';
import { HistorialPage } from '../historial/historial';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = AntecedentesPage;
  tab2Root = HistorialPage;
  tab3Root = NotificationsPage;
  

  constructor() {

  }
}
