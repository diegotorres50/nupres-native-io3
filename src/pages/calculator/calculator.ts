import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CalculatorModalPage } from '../calculator-modal/calculator-modal';
import { LoadingController } from 'ionic-angular';
import { CalculatorProvider } from '../../providers/calculator/calculator';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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

  echoErrors(){
    console.log(this.myForm.get('edad'));
  }

  saveData(){
    console.log(this.myForm.value);

    console.log(this.myForm);

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

    //https://forum.ionicframework.com/t/using-form-validators-return-values-for-error-messages/100190/4

    minMax1(control: FormControl) {
          console.log(control);
          return parseInt(control.value) >= 16 && parseInt(control.value) <= 120 ? null : {
            minMax: true
          }
      }

    minMax2(control: FormControl) {
          console.log(control);
          return parseInt(control.value) >= 0 && parseInt(control.value) <= 200 ? null : {
            minMax: true
          }
      }

    minMax3(control: FormControl) {
          console.log(control);
          return parseInt(control.value) >= 0 && parseInt(control.value) <= 230 ? null : {
            minMax: true
          }
      }

    minMax4(control: FormControl) {
          console.log(control);
          return parseInt(control.value) >= 5 && parseInt(control.value) <= 40 ? null : {
            minMax: true
          }
      }

    minMax5(control: FormControl) {
          console.log(control);
          return parseInt(control.value) >= 0 && parseInt(control.value) <= 100 ? null : {
            minMax: true
          }
      }

    minMax6(control: FormControl) {
          console.log(control);
          return parseInt(control.value) >= 10 && parseInt(control.value) <= 50 ? null : {
            minMax: true
          }
      }

    minMax7(control: FormControl) {
          console.log(control);
          return parseInt(control.value) >= 10 && parseInt(control.value) <= 80 ? null : {
            minMax: true
          }
      }

    minMax8(control: FormControl) {
          console.log(control);
          return parseInt(control.value) >= 10 && parseInt(control.value) <= 60 ? null : {
            minMax: true
          }
      }

    minMax9(control: FormControl) {
          console.log(control);
          return parseInt(control.value) >= 0 && parseInt(control.value) <= 6 ? null : {
            minMax: true
          }
      }

    minMax10(control: FormControl) {
          console.log(control);
          return parseInt(control.value) >= 30 && parseInt(control.value) <= 300 ? null : {
            minMax: true
          }
      }

  private createMyForm(){
    return this.formBuilder.group({
      genero: ['', [Validators.required]],
      edad: ['', [this.minMax1]],
      peso_actual: ['', [this.minMax2]],
      peso_usual: ['', [this.minMax2]],
      talla: ['', [this.minMax3]],
      carpo: ['', [this.minMax4]],
      triceps: ['', [this.minMax5]],
      brazo: ['', [this.minMax6]],
      rodilla: ['', [this.minMax7]],
      pantorrilla: ['', [this.minMax8]],
      albumina: ['', [this.minMax9]],
      cintura: ['', [this.minMax10]],
      amputacion: this.formBuilder.group({
        amputaciones: [''],
        bilateral: ['']
      }),
    });
  }
}
