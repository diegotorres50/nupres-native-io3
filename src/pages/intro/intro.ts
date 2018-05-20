import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  showSkip = true;

  //@ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  startApp() {
    //this.navCtrl.push(HomePage).then(() => {
      //this.storage.set('intro-done', true); Por ahora dejemos que siempre se muestre
      this.navCtrl.setRoot(HomePage);
    //})
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

  ionViewWillEnter() {
    //this.slides.update();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

}
