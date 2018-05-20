import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CalculatorModalPage } from '../calculator-modal/calculator-modal';

/**
 * Generated class for the CalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  openModal() {
    let myModal = this.modalCtrl.create(CalculatorModalPage);
    myModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

}
