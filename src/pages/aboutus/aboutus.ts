import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeneralProvider } from "../../providers/general/general";

/**
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutusPage {

  constructor(public navCtrl: NavController, private generalProvider: GeneralProvider ,public navParams: NavParams) {
    this.generalProvider.showInterstitialAD("ca-app-pub-2430196496193056/9189542585");
    this.generalProvider.showBannerAD("ca-app-pub-2430196496193056/7020822041");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutusPage');
  }

}
