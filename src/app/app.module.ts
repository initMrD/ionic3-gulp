import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {DragulaModule} from "ng2-dragula";
import {IonicStorageModule} from "@ionic/storage";
import {ContactDetails2Page} from "../pages/contactDetails2/contactDetails2";
import {ContactPage} from "../pages/contact/contact";
import { DashboardComponent } from '../pages/dashboard/dashboard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    ContactDetails2Page,
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    IonicModule.forRoot(MyApp,{
      mode: 'ios',                        //统一样式为ios的样式
      backButtonText: '返回',
      tabsHideOnSubPages: 'true'         //隐藏全部子页面tabs
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    ContactDetails2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
