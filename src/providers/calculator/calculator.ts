import { Injectable } from '@angular/core';

/*
  Generated class for the CalculatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CalculatorProvider {

  results: any = {
        imc: 0
  }

  constructor() {
    console.log('Hello CalculatorProvider Provider');
  }

  obtenerResultados(data: any) {
    console.log(data);
    console.log('Intentando hacer el calculo: ' + (data.peso_actual / ((data.talla / 100) * (data.talla / 100))));
    this.results.imc = (data.peso_actual / ((data.talla / 100) * (data.talla / 100)));
    console.log(this.results);
    return (this.results);
  }

}
