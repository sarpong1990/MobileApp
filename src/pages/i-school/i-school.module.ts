import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ISchoolPage } from './i-school';

@NgModule({
  declarations: [
    ISchoolPage,
  ],
  imports: [
    IonicPageModule.forChild(ISchoolPage),
  ],
})
export class ISchoolPageModule {}
