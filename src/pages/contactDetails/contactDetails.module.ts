/**
 * Created by initmrd on 2017/7/4.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ContactDetailsPage} from "./contactDetails";
@NgModule({
  declarations: [
    ContactDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(ContactDetailsPage)
  ],
  entryComponents: [
    ContactDetailsPage
  ]
})
export class ContactDetailsPageModule {}
