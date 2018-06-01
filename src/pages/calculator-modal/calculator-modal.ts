import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
//library for social-sharing
import { SocialSharing } from '@ionic-native/social-sharing';
import { Clipboard } from '@ionic-native/clipboard';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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

   // Datos ingresados
   genero = 'no identificado';
   edad = 0;
   peso_actual = 0;
   peso_usual = 0;
   peso_calculado = 0;
   talla_calculada = 0;
   talla = 0;
   carpo = 0;
   triceps = 0;
   brazo = 0;
   rodilla = 0;
   pantorrilla = 0;
   albumina = 0;
   cintura = 0;
   envergadura = 0;

   //
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
   imc_tipo = 'no identificado';
   act = 0;
   pgc = 0;
   geb = 0;
   ps = 0;
   geb_benedetic_resultado_primario = 0;
   geb_benedetic_resultado_secundario = 0;
   log = 'no identificado';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private socialSharing: SocialSharing,
    private clipboard: Clipboard,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {

    // Alerta
    //
    //
    const confirm = this.alertCtrl.create({
      title: 'Demo - Nupres',
      message: 'Esta es una demo de <strong>software para el sector salud.</strong></br></br>Colaboración tecnológica: <strong>Diego Torres</strong></br></br><strong>Contactenos: </strong> diegotorres50@gmail.com',
      buttons: [
        {
          text: 'Entendido',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();

    //

    // Datos ingresados
    this.genero = this.navParams.get('genero');
    this.edad = this.navParams.get('edad');
    this.peso_actual = this.navParams.get('peso_actual');
    this.peso_usual = this.navParams.get('peso_usual');
    this.peso_calculado = this.navParams.get('peso_calculado');
    this.talla_calculada = this.navParams.get('talla_calculada');
    this.talla = this.navParams.get('talla');
    this.carpo = this.navParams.get('carpo');
    this.triceps = this.navParams.get('triceps');
    this.brazo = this.navParams.get('brazo');
    this.rodilla = this.navParams.get('rodilla');
    this.pantorrilla = this.navParams.get('pantorrilla');
    this.albumina = this.navParams.get('albumina');
    this.cintura = this.navParams.get('cintura');
    this.envergadura = this.navParams.get('envergadura');


    this.imc = isNaN(this.navParams.get('imc')) ? 0 : this.navParams.get('imc');
    this.ppp = isNaN(this.navParams.get('ppp')) ? 0 : this.navParams.get('ppp');
    this.ec_valor = isNaN(this.navParams.get('ec_valor')) ? 0 : this.navParams.get('ec_valor');
    this.ec_nombre = this.navParams.get('ec_nombre');
    this.pieo = isNaN(this.navParams.get('pieo')) ? 0 : this.navParams.get('pieo');
    this.cmb_valor = isNaN(this.navParams.get('cmb_valor')) ? 0 : this.navParams.get('cmb_valor');
    this.cmb_nombre = this.navParams.get('cmb_nombre');
    this.cpi = isNaN(this.navParams.get('cpi')) ? 0 : this.navParams.get('cpi');
    this.irn_valor = isNaN(this.navParams.get('irn_valor')) ? 0 : this.navParams.get('irn_valor');
    this.irn_nombre = this.navParams.get('irn_nombre');
    this.imc_tipo = this.navParams.get('imc_tipo');
    this.act = isNaN(this.navParams.get('act')) ? 0 : this.navParams.get('act');
    this.pgc = isNaN(this.navParams.get('pgc')) ? 0 : this.navParams.get('pgc');
    this.geb = isNaN(this.navParams.get('geb')) ? 0 : this.navParams.get('geb');
    this.ps = isNaN(this.navParams.get('ps')) ? 0 : this.navParams.get('ps');

    this.geb_benedetic_resultado_primario = isNaN(this.navParams.get('geb_benedetic_resultado_primario')) ? 0 : this.navParams.get('geb_benedetic_resultado_primario');
    this.geb_benedetic_resultado_secundario = isNaN(this.navParams.get('geb_benedetic_resultado_secundario')) ? 0 : this.navParams.get('geb_benedetic_resultado_secundario');

    this.log = this.navParams.get('log');
    console.log('ionViewDidLoad CalculatorModalPage');
  }

whatsappShare(){
   let msg = '*Resultados Calculadora Nupres* \n\n_Datos del paciente_: \n\n';

   msg = msg.concat('*Genero:* ' + this.genero + '\n');
   msg = msg.concat('*Edad:* ' + this.edad + ' años' + '\n');
   msg = msg.concat('*Peso Actual:* ' + this.peso_actual + ' kg' + '\n');
   msg = msg.concat('*Peso Usual:* ' + this.peso_usual + ' kg' + '\n');
   msg = msg.concat('*Talla Actual:* ' + this.talla + ' cm' + '\n');
   msg = msg.concat('*Circunferencia de Carpo:* ' + this.carpo + ' cm' + '\n');
   msg = msg.concat('*Pliegue Cutáneo de Tríceps:* ' + this.triceps + ' mm' + '\n');
   msg = msg.concat('*Circunferencia de Brazo:* ' + this.brazo + ' cm' + '\n');
   msg = msg.concat('*Altura de Rodilla:* ' + this.rodilla + ' cm' + '\n');
   msg = msg.concat('*Circunferencia de Pantorrilla:* ' + this.pantorrilla + ' cm' + '\n');
   msg = msg.concat('*Albúmina de Suero:* ' + this.albumina + ' mm' + '\n');
   msg = msg.concat('*Cintura:* ' + this.cintura + ' cm' + '\n');
   msg = msg.concat('*Media Envergadura:* ' + this.envergadura + ' cm' + '\n');

    msg = msg.concat('\n_Antropometría del paciente_: \n\n');

    msg = msg.concat('*Peso Calculado:* ' + this.peso_calculado + ' kg' + '\n');

    msg = msg.concat('*Peso Saludable:* ' + this.ps + ' kg' + '\n');

    msg = msg.concat('*Talla Calculada:* ' + this.talla_calculada + ' cm' + '\n');

    msg = msg.concat('*Indice de Masa Corporal:* ' + this.imc + ' ' + this.imc_tipo + '\n');

    msg = msg.concat('*% Perdida de Peso:* ' + this.ppp + ' %' + '\n');

    msg = msg.concat('*Estructura Corporal:* ' + this.ec_valor + ' de tipo ' + this.ec_nombre +  '\n');

    msg = msg.concat('*Peso Ideal Osea:* ' + this.pieo + ' kg' + '\n');


    msg = msg.concat('*Calculo de Peso Ideal:* ' + this.cpi + ' kg' + '\n');



    msg = msg.concat('*Circunferencia Muscular del Brazo:* ' + this.cmb_valor + ' cm ' + ' grado de deficit ' + this.cmb_nombre + ' del estandar'  + '\n');


     msg = msg.concat('*Indice de Riesgo Nutricional:* ' + this.irn_valor + ' de tipo ' + this.irn_nombre + '\n');



    msg = msg.concat('*Agua Corporal Total:* ' + this.act + '\n');



    msg = msg.concat('*Porcentaje Grasa Corporal:* ' + this.pgc + '\n');



    msg = msg.concat('*Gasto Energetico Basal:* TMB HB (Tasa Metabólica Basal Harris Benedict) de ' + this.geb_benedetic_resultado_primario + ' Kcal/día' + '\n');
    msg = msg.concat('*TMB por el peso:* ' + this.geb_benedetic_resultado_secundario + ' cal/kg de peso/día' + '\n');

   //msg = msg.concat('*Gasto Energetico Basal:* ' + this.geb + '\n');
   this.socialSharing.shareViaWhatsApp(msg, null, null);
 }

copyPaste(){
   let msg = '*Resultados Calculadora Nupres* \n\n_Datos del paciente_: \n\n';

   msg = msg.concat('*Genero:* ' + this.genero + '\n');
   msg = msg.concat('*Edad:* ' + this.edad + ' años' + '\n');
   msg = msg.concat('*Peso Actual:* ' + this.peso_actual + ' kg' + '\n');
   msg = msg.concat('*Peso Usual:* ' + this.peso_usual + ' kg' + '\n');
   msg = msg.concat('*Talla Actual:* ' + this.talla + ' cm' + '\n');
   msg = msg.concat('*Circunferencia de Carpo:* ' + this.carpo + ' cm' + '\n');
   msg = msg.concat('*Pliegue Cutáneo de Tríceps:* ' + this.triceps + ' mm' + '\n');
   msg = msg.concat('*Circunferencia de Brazo:* ' + this.brazo + ' cm' + '\n');
   msg = msg.concat('*Altura de Rodilla:* ' + this.rodilla + ' cm' + '\n');
   msg = msg.concat('*Circunferencia de Pantorrilla:* ' + this.pantorrilla + ' cm' + '\n');
   msg = msg.concat('*Albúmina de Suero:* ' + this.albumina + ' mm' + '\n');
   msg = msg.concat('*Cintura:* ' + this.cintura + ' cm' + '\n');
   msg = msg.concat('*Media Envergadura:* ' + this.envergadura + ' cm' + '\n');

    msg = msg.concat('\n_Antropometría del paciente_: \n\n');

    msg = msg.concat('*Peso Calculado:* ' + this.peso_calculado + ' kg' + '\n');

    msg = msg.concat('*Peso Saludable:* ' + this.ps + ' kg' + '\n');

    msg = msg.concat('*Talla Calculada:* ' + this.talla_calculada + ' cm' + '\n');

    msg = msg.concat('*Indice de Masa Corporal:* ' + this.imc + ' ' + this.imc_tipo + '\n');

    msg = msg.concat('*Porcentaje de Perdida de Peso:* ' + this.ppp + ' %' + '\n');

    msg = msg.concat('*Estructura Corporal:* ' + this.ec_valor + ' de tipo ' + this.ec_nombre +  '\n');

    msg = msg.concat('*Peso Ideal Osea:* ' + this.pieo + ' kg' + '\n');


    msg = msg.concat('*Calculo de Peso Ideal:* ' + this.cpi + ' kg' + '\n');



    msg = msg.concat('*Circunferencia Muscular del Brazo:* ' + this.cmb_valor + ' cm ' + ' grado de deficit ' + this.cmb_nombre + ' del estandar'  + '\n');


     msg = msg.concat('*Indice de Riesgo Nutricional:* ' + this.irn_valor + ' de tipo ' + this.irn_nombre + '\n');



    msg = msg.concat('*Agua Corporal Total:* ' + this.act + '\n');



    msg = msg.concat('*Porcentaje Grasa Corporal:* ' + this.pgc + '\n');



    msg = msg.concat('*Gasto Energetico Basal:* TMB HB (Tasa Metabólica Basal Harris Benedict) de ' + this.geb_benedetic_resultado_primario + ' Kcal/día' + '\n');
    msg = msg.concat('*TMB por el peso:* ' + this.geb_benedetic_resultado_secundario + ' cal/kg de peso/día' + '\n');


    this.clipboard.copy(msg);

    this.clipboard.paste().then(
       (resolve: string) => {
          //alert(resolve);
          //
            const toast = this.toastCtrl.create({
              message: 'El informe ha sido copiado satisfactoriamente.',
              duration: 3000,
              position: 'top'
            });
            toast.present();
          //
        },
        (reject: string) => {
          alert('Error: ' + reject);
        }
      );

 }


}
