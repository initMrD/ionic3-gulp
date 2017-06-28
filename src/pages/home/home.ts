import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Config} from '../../app/Config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.info(Config.baseUrl);
  }

}
