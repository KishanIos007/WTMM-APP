import { Component } from '@angular/core';
import { NavController , Refresher,ToastController} from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { PopoverController } from 'ionic-angular';
import { OptionPage } from '../option/option';
import { Storage } from '@ionic/storage';
import { WaysPage } from "../ways/ways";
import { GeneralProvider } from "../../providers/general/general";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private googlePlus: GooglePlus,
    private admobFree: AdMobFree,
    private fb: Facebook,
    private popoverCtrl : PopoverController,
    private storage : Storage,
    private generalProvider : GeneralProvider,
    private toastCtrl : ToastController ) {
    
    this.generalProvider.showBannerAD("ca-app-pub-2430196496193056/6945548856");
    
  }
  
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(OptionPage);
    popover.present({
      ev: myEvent
  });
  }
  navigate(way){
    this.navCtrl.push(WaysPage, {
      wayid : way
    })
    console.log(way);
    
  }
  addToFav(wayID){
    console.log(wayID);
    
  }
  doRefresh(refresher: Refresher){
    console.log("refressher");
    setTimeout(() => {
      refresher.complete();

      const toast = this.toastCtrl.create({
        message: 'Sessions have been updated.',
        duration: 3000
      });
      toast.present();
    }, 1000);
    
  }
  addFavorite(){
    // let list: Array<number>;
    // list.push(wayID);
    // this.storage.set('FavArray',list);
  }
  removeFavorite(){
  //   this.storage.get('FavArray').then((favList) => {
  //     let newList : Array<Number>;
  //     favList.forEach(element => {
  //       if(element != wayID){
  //         newList.push(element);
  //       }
  //     });
  //     this.storage.set('FavArray',newList);
  //   });
   }
}

