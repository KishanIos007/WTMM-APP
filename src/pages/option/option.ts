import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppRate } from '@ionic-native/app-rate';
import { AboutusPage } from '../aboutus/aboutus';

/**
 * Generated class for the OptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-option',
  templateUrl: 'option.html',
})
export class OptionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private appRate : AppRate) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionPage');
  }
  rateApp(){
    this.appRate.preferences.storeAppURL = {
      ios: '<app_id>',
      android: 'market://details?id=com.paynaskextrasavings.paynaskoffers'
    };
    this.appRate.promptForRating(true);

  }
  gotoAboutUs(){
    
    this.navCtrl.push(AboutusPage);
  }

}
