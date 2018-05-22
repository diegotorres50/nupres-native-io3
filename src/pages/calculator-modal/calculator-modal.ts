import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the CalculatorModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculator-modal',
  templateUrl: 'calculator-modal.html',
})
export class CalculatorModalPage {

   imc = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log(this.imc);
    this.imc = this.navParams.get('imc');
    console.log('ionViewDidLoad CalculatorModalPage');
    console.log(this.imc);
  }

}
