/**
 * Created by initmrd on 2017/7/4.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {HomePage} from "./home";
@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage)
  ],
  entryComponents: [
    HomePage
  ]
})
export class HomePageModule {}
