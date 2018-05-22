import { Injectable } from '@angular/core';

/*
  Generated class for the CalculatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CalculatorProvider {

  results: any = {
        imc: 0,
        ppp: 0,
        ec_valor: 0,
        ec_nombre: '',
        pieo: 0
  }

  constructor() {
    console.log('Hello CalculatorProvider Provider');
  }

  obtenerResultados(data: any) {
    console.log(data);
    console.log('Intentando hacer el calculo...');
    this.results.imc = (data.peso_actual / ((data.talla / 100) * (data.talla / 100)));
    this.results.ppp = (((data.peso_usual - data.peso_actual) * 100 ) / data.peso_actual);
    this.results.ec_valor = ((data.talla * 100) / data.carpo);

    if (data.genero == "hombre") {
        if (parseFloat(this.results.ec_valor) > parseFloat("10.4")) {
            this.results.ec_nombre = "Pequeña";
            this.results.pieo = ((data.talla / 100) * parseFloat("20"));
        }

        if (parseFloat(this.results.ec_valor) >= parseFloat("9.6") && parseFloat(this.results.ec_valor) <= parseFloat("10.4")) {
            this.results.ec_nombre = "Mediana";
            this.results.pieo = ((data.talla / 100) * parseFloat("22.5"));
        }

        if (parseFloat(this.results.ec_valor) < parseFloat("9.6")) {
            this.results.ec_nombre = "Grande";
            this.results.pieo = ((data.talla / 100) * parseFloat("25"));
        }
    }

    if (data.genero == "mujer") {
        if (parseFloat(this.results.ec_valor) > parseFloat("11")) {
            this.results.ec_nombre = "Pequeña";
            this.results.pieo = ((data.talla / 100) * parseFloat("20"));
        }

        if (parseFloat(this.results.ec_valor) >= parseFloat("10.1") && parseFloat(this.results.ec_valor) <= parseFloat("11.0")) {
            this.results.ec_nombre = "Mediana";
            this.results.pieo = ((data.talla / 100) * parseFloat("22.5"));
        }

        if (parseFloat(this.results.ec_valor) < parseFloat("10.0")) {
            this.results.ec_nombre = "Grande";
            this.results.pieo = ((data.talla / 100) * parseFloat("25"));
        }
    }

    console.log(this.results);

    return (this.results);
  }

}
