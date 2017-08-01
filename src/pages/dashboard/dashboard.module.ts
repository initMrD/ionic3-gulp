import { NgModule } from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import { DashboardComponent } from './dashboard';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    IonicPageModule.forChild(DashboardComponent),
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardComponentModule {}
