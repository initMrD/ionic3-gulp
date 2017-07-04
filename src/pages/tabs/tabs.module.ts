/**
 * Created by initmrd on 2017/7/4.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {TabsPage} from "./tabs";
@NgModule({
  declarations: [
    TabsPage
  ],
  imports: [
    IonicPageModule.forChild(TabsPage)
  ],
  entryComponents: [
    TabsPage
  ]
})
export class TabsPageModule {}
