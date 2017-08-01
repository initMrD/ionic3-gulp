import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ContactDetails2Page} from "../contactDetails2/contactDetails2";
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  jumpLazy() {
    this.navCtrl.push('contact-detail-page');
  }

  jump() {
    this.navCtrl.push(ContactDetails2Page);
  }


}
