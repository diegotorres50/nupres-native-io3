import { Injectable } from '@angular/core';

/*
  Generated class for the CalculatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CalculatorProvider {

  constructor() {
    console.log('Hello CalculatorProvider Provider');
  }

  obtenerResultados(data: any) {
    console.log('Intentando hacer el calculo: ' + (data.peso_actual / (data.talla * data.talla)));
    return (data.peso_actual / (data.talla * data.talla));
  }

}
