import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig , AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

/*
  Generated class for the GeneralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeneralProvider {

  constructor(public http: HttpClient,private admobFree: AdMobFree) {
    console.log('Hello GeneralProvider Provider');
  }
  showBannerAD(adID){
    const bannerConfig: AdMobFreeBannerConfig = {
      id: adID,    
      bannerAtTop: false, 
      overlap: false, 
      offsetTopBar: false,
      isTesting: false,
      autoShow: true
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare()
       .then(() => {}).catch(e => console.log(e));

  }
  showInterstitialAD(adID){
    const InterstitialConfig: AdMobFreeInterstitialConfig = {
      id: adID,
      isTesting: false,
      autoShow: true
     };
     this.admobFree.interstitial.config(InterstitialConfig);
     this.admobFree.interstitial.prepare().then(() => {})
      .catch(e => console.log(e));
  }
}
