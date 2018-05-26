import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CalculatorModalPage } from '../calculator-modal/calculator-modal';
import { LoadingController } from 'ionic-angular';
import { CalculatorProvider } from '../../providers/calculator/calculator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

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
    public formBuilder: FormBuilder,
    public storage: Storage
    ) {
    this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
    this.storage.set('intro-done', false);
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
      genero: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      peso_actual: ['', [Validators.minLength(0), Validators.maxLength(200)]],
      peso_usual: ['', [Validators.minLength(0), Validators.maxLength(200)]],
      talla: ['', [Validators.minLength(0), Validators.maxLength(230)]],
      carpo: ['', [Validators.minLength(5), Validators.maxLength(40)]],
      triceps: ['', [Validators.minLength(0), Validators.maxLength(100)]],
      brazo: ['', [Validators.minLength(10), Validators.maxLength(50)]],
      rodilla: ['', [Validators.minLength(10), Validators.maxLength(80)]],
      pantorrilla: ['', [Validators.minLength(10), Validators.maxLength(60)]],
      albumina: ['', [Validators.minLength(0), Validators.maxLength(6)]],
      cintura: ['', [Validators.minLength(30), Validators.maxLength(300)]],
      amputacion: this.formBuilder.group({
        amputaciones: [''],
        bilateral: ['']
      }),
    });
  }

  /*validateData() {
    if (!isNaN(this.model.peso_actual)) {
        console.log('Falta el peso actual!!!');
    }
  }*/
}
