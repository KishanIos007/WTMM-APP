import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SignupPage } from "../pages/signup/signup";
import { FavouritesPage } from "../pages/favourites/favourites";
import { TutorialPage } from "../pages/tutorial/tutorial";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  imageUrl : any;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, 
    public storage : Storage ,
    public splashScreen: SplashScreen) {
      this.storage.get('hasSeenTutorial')
      .then((hasSeenTutorial) => {
        if (hasSeenTutorial) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = TutorialPage;
        }
        this.initializeApp();
      });

    
    this.setUserImageAndData();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Favourites', component: FavouritesPage }
    ];
  }
  setUserImageAndData(){
    this.storage.get('imageUrl').then((img)=>{
      if(img != null){
        this.imageUrl = img;
        this.rootPage = HomePage;
      }else {
        this.imageUrl = "assets/imgs/user.png";
        this.rootPage = HomePage;
      }
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };
      if (this.platform.is('android')) {
        window["plugins"].OneSignal
        .startInit("75757d7a-073e-4784-a504-4f9eca1abe19", "612945089672")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
      }
      
  
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
