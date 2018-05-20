import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CalculatorModalPage } from '../calculator-modal/calculator-modal';
import { LoadingController } from 'ionic-angular';

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

  model = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {
  }

  openModal() {
    let loader = this.loadingCtrl.create({
      content: "Calculando formulas...",
      duration: 3000
    });

    loader.present();

    let myModal = this.modalCtrl.create(CalculatorModalPage);

    setTimeout(() => {
      myModal.present();
    }, 3000);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  sendData(){
    console.log(this.model);
  }  
}
