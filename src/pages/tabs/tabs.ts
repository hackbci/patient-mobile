import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AntecedentesPage } from '../antecedentes/antecedentes';
import { HistorialPage } from '../historial/historial';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HistorialPage;
  tab3Root = ContactPage;
  tab4Root = AntecedentesPage;

  constructor() {

  }
}
