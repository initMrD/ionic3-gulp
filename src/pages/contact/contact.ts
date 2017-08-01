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

  ioniclist = [{name: "跳转懒加载", page: "contact-detail-page"},
    {name: "跳转正常页面", page: ContactDetails2Page},
    {name: "跳转仪表盘", page: "dashboard-component"}];

  jump(name){
    this.navCtrl.push(name);
  }
}
