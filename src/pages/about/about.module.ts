/**
 * Created by initmrd on 2017/7/4.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {AboutPage} from "./about";

@NgModule({
  declarations: [
    AboutPage
  ],
  imports: [
    IonicPageModule.forChild(AboutPage)
  ],
  entryComponents: [
    AboutPage
  ]
})
export class AboutPageModule {}
