import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { Events } from 'ionic-angular';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  
    private fb: Facebook,
    private googlePlus: GooglePlus,
    private storage : Storage,
    public events: Events ) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  gmailsignin(){
    this.googlePlus.login({})
      .then((res) => { 
        this.storage.set('displayName',res.displayName);
        this.storage.set('imageUrl',res.imageUrl);
        this.storage.set('accessToken',res.accessToken);
        this.navCtrl.setRoot(HomePage);
      }
      ).catch(err => console.error(err))
     
    
  }
  facebooksigin(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
    this.fb.logEvent(this.fb.EVENTS.EVENT_LOGIN_SUCCESS);
  }
  

}
