/**
 * Created by initmrd on 2017/7/4.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ContactPage} from "./contact";
@NgModule({
  declarations: [
    ContactPage
  ],
  imports: [
    IonicPageModule.forChild(ContactPage)
  ],
  entryComponents: [
    ContactPage
  ]
})
export class ContactPageModule {}
