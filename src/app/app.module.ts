import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OptionPage } from '../pages/option/option';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { SignupPage } from '../pages/signup/signup';
import { WaysPage } from "../pages/ways/ways";
import { FavouritesPage } from "../pages/favourites/favourites";
import { TutorialPage } from "../pages/tutorial/tutorial";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { GooglePlus } from '@ionic-native/google-plus';
import { AdMobFree } from '@ionic-native/admob-free';
import { Facebook } from '@ionic-native/facebook';
import { AppRate } from '@ionic-native/app-rate';
import { IonicStorageModule } from '@ionic/storage';
import { GeneralProvider } from '../providers/general/general';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OptionPage,
    AboutusPage,
    SignupPage,
    WaysPage,
    FavouritesPage,
    TutorialPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OptionPage,
    AboutusPage,
    SignupPage,
    WaysPage,
    FavouritesPage,
    TutorialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    AdMobFree,
    Facebook,
    AppRate,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    GeneralProvider
  ]
})
export class AppModule {}
