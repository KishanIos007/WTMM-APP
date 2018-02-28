import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeneralProvider } from "../../providers/general/general";

/**
 * Generated class for the WaysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ways',
  templateUrl: 'ways.html',
})
export class WaysPage {
  wayid : any = 0;
  constructor(public navCtrl: NavController,  private generalProvider: GeneralProvider, public navParams: NavParams) {
    this.wayid = this.navParams.get('wayid');
    this.generalProvider.showInterstitialAD("ca-app-pub-2430196496193056/3716001855");
    this.generalProvider.showBannerAD("ca-app-pub-2430196496193056/1360042071");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaysPage');
  }

}
