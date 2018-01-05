import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ETourPage } from './e-tour';

@NgModule({
  declarations: [
    ETourPage,
  ],
  imports: [
    IonicPageModule.forChild(ETourPage),
  ],
})
export class ETourPageModule {}
