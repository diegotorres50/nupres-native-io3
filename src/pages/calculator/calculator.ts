import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CalculatorModalPage } from '../calculator-modal/calculator-modal';
import { LoadingController } from 'ionic-angular';
import { CalculatorProvider } from '../../providers/calculator/calculator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public calculatorPro: CalculatorProvider,
    public formBuilder: FormBuilder
    ) {
    this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  saveData(){
    console.log(this.myForm.value);

    //this.validateData();

    // Hacemos calculos
    let _resultados = this.calculatorPro.obtenerResultados(this.myForm.value);

    /*
    const newCredentials: CredentialModel = {
        username: this.username,
        password: this.password,
        factory: this.factory
    };*/

    let myModal = this.modalCtrl.create(CalculatorModalPage, _resultados);

    myModal.present();
  }

  private createMyForm(){
    return this.formBuilder.group({
      genero: ['', Validators.required],
      edad: ['', Validators.required],
      peso_actual: ['', Validators.required],
      peso_usual: ['', Validators.required],
      talla: ['', Validators.required],
      carpo: ['', Validators.required],
      triceps: ['', Validators.required],
      brazo: ['', Validators.required],
      rodilla: ['', Validators.required],
      pantorrilla: ['', Validators.required],
      albumina: ['', Validators.required],
      cintura: ['', Validators.required]
    });
  }

  /*validateData() {
    if (!isNaN(this.model.peso_actual)) {
        console.log('Falta el peso actual!!!');
    }
  }*/
}
