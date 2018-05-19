import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { CalculatorPage } from '../calculator/calculator';
import { AboutPage } from '../about/about';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

	homePage = HomePage;
	calculatorPage = CalculatorPage;
	aboutPage = AboutPage;

}
