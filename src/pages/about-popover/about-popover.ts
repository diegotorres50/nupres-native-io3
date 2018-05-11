import { Component } from '@angular/core';

import { App, NavController, ModalController, ViewController } from 'ionic-angular';


@Component({
  template: `
    <ion-list>
      <button ion-item (click)="close('http://ionicframework.com/docs/v2/getting-started')">Registrar paciente</button>
      <button ion-item (click)="close('http://ionicframework.com/docs/v2')">Generar informes</button>
      <button ion-item (click)="close('http://showcase.ionicframework.com')">Generar indicadores</button>
      <button ion-item (click)="close('https://github.com/ionic-team/ionic')">Historia clinica</button>
      <button ion-item (click)="support()">Ayuda</button>
    </ion-list>
  `
})
export class PopoverPage {

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController
  ) { }

  support() {
    this.app.getRootNav().push('SupportPage');
    this.viewCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.viewCtrl.dismiss();
  }
}
