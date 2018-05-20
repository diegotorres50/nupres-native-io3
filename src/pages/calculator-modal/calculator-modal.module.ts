import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculatorModalPage } from './calculator-modal';

@NgModule({
  declarations: [
    CalculatorModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculatorModalPage),
  ],
})
export class CalculatorModalPageModule {}
