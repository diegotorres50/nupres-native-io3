import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
//library for social-sharing
import { SocialSharing } from '@ionic-native/social-sharing';

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
   ppp = 0;
   ec_valor = 0;
   ec_nombre = 'no identificado';
   pieo = 0;
   cmb_valor = 0;
   cmb_nombre = 'no identificado';
   cpi = 0;
   irn_valor = 0;
   irn_nombre = 'no identificado';
   act = 0;
   pgc = 0;
   geb = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private socialSharing: SocialSharing) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    this.imc = this.navParams.get('imc');
    this.ppp = this.navParams.get('ppp');
    this.ec_valor = this.navParams.get('ec_valor');
    this.ec_nombre = this.navParams.get('ec_nombre');
    this.pieo = this.navParams.get('pieo');
    this.cmb_valor = this.navParams.get('cmb_valor');
    this.cmb_nombre = this.navParams.get('cmb_nombre');
    this.cpi = this.navParams.get('cpi');
    this.irn_valor = this.navParams.get('irn_valor');
    this.irn_nombre = this.navParams.get('irn_nombre');
    this.act = this.navParams.get('act');
    this.pgc = this.navParams.get('pgc');
    this.geb = this.navParams.get('geb');
    console.log('ionViewDidLoad CalculatorModalPage');
  }

whatsappShare(){
   let msg = '*Resultados Calculadora Nupres* \n\n_Antropometria del paciente_: \n\n';
   msg = msg.concat('*Indice de Masa Corporal:* ' + this.imc + '\n');
   msg = msg.concat('*Porcentaje de Perdida de Peso:* ' + this.ppp + '\n');
   msg = msg.concat('*Estructura Corporal:* ' + this.ec_valor + ' de tipo ' + this.ec_nombre +  '\n');
   msg = msg.concat('*Peso Ideal Osea:* ' + this.pieo + '\n');
   msg = msg.concat('*Calculo de Peso Ideal:* ' + this.cpi + '\n');
   msg = msg.concat('*Circunferencia Muscular del Brazo:* ' + this.cmb_valor + ' grado de deficit ' + this.cmb_nombre + ' del estandar'  + '\n');
   msg = msg.concat('*Indice de Riesgo Nutricional:* ' + this.irn_valor + ' de tipo ' + this.irn_nombre + '\n');
   msg = msg.concat('*Agua Corporal Total:* ' + this.act + '\n');
   msg = msg.concat('*Porcentaje Grasa Corporal:* ' + this.pgc + '\n');
   //msg = msg.concat('*Gasto Energetico Basal:* ' + this.geb + '\n');
   this.socialSharing.shareViaWhatsApp(msg, null, null);
 }

}
