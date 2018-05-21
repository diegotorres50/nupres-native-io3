import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CalculatorModalPage } from '../calculator-modal/calculator-modal';
import { LoadingController } from 'ionic-angular';
import { CalculatorProvider } from '../../providers/calculator/calculator';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public calculatorPro: CalculatorProvider) {
  }

  openModal() {
    //this.validateData();

    // Hacemos calculos
    let _resultados = this.calculatorPro.obtenerResultados(this.model);

    /*
    const newCredentials: CredentialModel = {
        username: this.username,
        password: this.password,
        factory: this.factory
    };*/

    let loader = this.loadingCtrl.create({
      content: "Calculando formulas...",
      duration: 1000
    });

    loader.present();

    let myModal = this.modalCtrl.create(CalculatorModalPage, _resultados);

    setTimeout(() => {
      myModal.present();
    }, 1000);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  sendData(){
    console.log(this.model);
  }

  /*validateData() {
    if (!isNaN(this.model.peso_actual)) {
        console.log('Falta el peso actual!!!');
    }
  }*/
}
