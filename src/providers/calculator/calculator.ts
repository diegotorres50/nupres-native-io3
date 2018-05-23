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
        pieo: 0,
        cmb_valor: 0,
        cmb_nombre: '',
        irn_valor: 0,
        irn_nombre: '',
        cpi: 0,
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

    this.results.cpi = ((parseFloat("0.75") * (data.talla - 150)) + 50);

    this.results.cmb_valor = (data.brazo - (parseFloat("0.314") * data.triceps));

    this.results.irn_valor = (((parseFloat("1519") * data.albumina) + parseFloat("41.7")) * (data.peso_actual / this.results.cpi));

    if (data.genero == "hombre") {

        this.results.cmb_valor = (this.results.cmb_valor * 100 / parseFloat("29.3"));

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

        this.results.cmb_valor = (this.results.cmb_valor * 100 / parseFloat("28.5"));

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

    if (parseFloat(this.results.cmb_valor) >= parseFloat("80") && parseFloat(this.results.cmb_valor) <= parseFloat("90")) {
        this.results.cmb_nombre = "Leve";
    }

    if (parseFloat(this.results.cmb_valor) >= parseFloat("60") && parseFloat(this.results.cmb_valor) <= parseFloat("80")) {
        this.results.cmb_nombre = "Moderado";
    }

    if (parseFloat(this.results.cmb_valor) < parseFloat("60")) {
        this.results.cmb_nombre = "Moderado";
    }

    if (parseFloat("97.5") <= parseFloat(this.results.irn_valor) && parseFloat(this.results.irn_valor) < parseFloat("100")) {
        this.results.irn_nombre = "Moderado";
    }

    if (parseFloat("83.5") <= parseFloat(this.results.irn_valor) && parseFloat(this.results.irn_valor) < parseFloat("97.5")) {
        this.results.irn_nombre = "Moderado";
    }

    if (parseFloat(this.results.irn_valor) < parseFloat("83.5")) {
        this.results.irn_nombre = "Grave";
    }


    console.log(this.results);

    return (this.results);
  }

}
