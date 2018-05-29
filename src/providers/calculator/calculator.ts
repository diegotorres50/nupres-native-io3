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
        act: 0,
        pgc: 0,
        geb: 0
  }

  constructor() {
    console.log('Hello CalculatorProvider Provider');
  }

  obtenerResultados(data: any) {
    console.log(data);
    console.log('Intentando hacer el calculo...');

    // Datos ingresados
    this.results.genero = data.genero;
    this.results.edad = data.edad;
    this.results.peso_actual = data.peso_actual;
    this.results.peso_usual = data.peso_usual;
    this.results.talla = data.talla;
    this.results.carpo = data.carpo;
    this.results.triceps = data.triceps;
    this.results.brazo = data.brazo;
    this.results.rodilla = data.rodilla;
    this.results.pantorrilla = data.pantorrilla;
    this.results.albumina = data.albumina;
    this.results.cintura = data.cintura;
    this.results.cintura = data.envergadura;
    //

    this.results.peso_calculado = 0;

    let peso = data.peso_actual;

    console.info('Peso actual: ' + data.peso_actual);
    console.info(parseFloat(data.peso_actual));

    // Recalculamos el peso
    if (parseFloat(data.peso_actual) <= parseFloat("0") || !isNaN(data.peso_actual)) {
        console.info('Se calculara peso');
        if (data.genero == "hombre") {
            if (parseInt(data.edad) >= 19 && parseInt(data.edad) <= 59) {
                this.results.peso_calculado = ((parseFloat(data.rodilla) * parseFloat("1.19")) + (parseFloat(data.brazo) * parseFloat("3.21")) - parseFloat("86.82"));
            } else if (parseInt(data.edad) >= 60 && parseInt(data.edad) <= 80) {
                this.results.peso_calculado = ((parseFloat(data.rodilla) * parseFloat("1.10")) + (parseFloat(data.brazo) * parseFloat("3.07")) - parseFloat("75.81"));
            }
        } else if (data.genero == "mujer") {
            if (parseInt(data.edad) >= 19 && parseInt(data.edad) <= 59) {
                this.results.peso_calculado = ((parseFloat(data.rodilla) * parseFloat("1.01")) + (parseFloat(data.brazo) * parseFloat("2.81")) - parseFloat("66.04"));
            } else if (parseInt(data.edad) >= 60 && parseInt(data.edad) <= 80) {
                this.results.peso_calculado = ((parseFloat(data.rodilla) * parseFloat("1.09")) + (parseFloat(data.brazo) * parseFloat("2.68")) - parseFloat("65.51"));
            }
        }
    }

    console.info('Peso calculado: ' + this.results.peso_calculado);

    if (parseFloat(this.results.peso_calculado) > 0) {
        peso = this.results.peso_calculado;
    }

    let talla = data.talla;

    this.results.talla_calculada = 0;

    console.info('Talla actual: ' + data.talla);
    console.info(parseFloat(data.talla));

    // Recalculamos la talla
    if (parseFloat(data.talla) <= parseFloat("0") || !isNaN(data.talla)) {
        console.info('Se calculara talla');
        if (parseInt(data.envergadura) > parseInt("0") || isNaN(data.envergadura)) {
            this.results.talla_calculada = (parseInt(data.envergadura) * parseInt("2"));
        } else {
            if (data.genero == "hombre") {
                if (parseInt(data.edad) >= 19 && parseInt(data.edad) <= 59) {
                    this.results.talla_calculada = ((parseFloat(data.rodilla) * parseFloat("1.88")) + parseFloat("71.85"));
                } else if (parseInt(data.edad) >= 60 && parseInt(data.edad) <= 80) {
                    this.results.talla_calculada = ((parseFloat(data.rodilla) * parseFloat("2.22")) + parseFloat("59.01"));
                }
            } else if (data.genero == "mujer") {
                if (parseInt(data.edad) >= 19 && parseInt(data.edad) <= 59) {
                    this.results.talla_calculada = ((parseFloat(data.rodilla) * parseFloat("1.86")) - (parseFloat(data.edad) * parseFloat("0.05")) + parseFloat("70.25"));
                } else if (parseInt(data.edad) >= 60 && parseInt(data.edad) <= 80) {
                    this.results.talla_calculada = ((parseFloat(data.rodilla) * parseFloat("1.91")) - (parseFloat(data.edad) * parseFloat("0.17")) + parseFloat("75.00"));
                }
            }
        }
    }

    console.info('Talla calculada: ' + this.results.talla_calculada);

    if (parseFloat(this.results.talla_calculada) > 0) {
        talla = this.results.talla_calculada;
    }

    this.results.imc = (parseFloat(peso) / ((parseInt(talla) / parseInt("100")) * (parseInt(talla) / parseInt("100"))));
    this.results.imc = parseFloat(this.results.imc).toFixed(2);

    this.results.ppp = (((parseFloat(data.peso_usual) - parseFloat(peso)) * parseFloat("100") ) / parseFloat(peso));
    this.results.ppp = parseFloat(this.results.ppp).toFixed(2);

    this.results.ec_valor = ((parseFloat(talla)) / parseFloat(data.carpo));
    this.results.ec_valor = parseFloat(this.results.ec_valor).toFixed(2);

    this.results.cpi = ((parseFloat("0.75") * (talla - 150)) + 50);

    this.results.cmb_valor = (data.brazo - (parseFloat("0.314") * data.triceps));

    this.results.irn_valor = (((parseFloat("1519") * data.albumina) + parseFloat("41.7")) * (peso / this.results.cpi));

    if (data.genero == "hombre") {

        this.results.act = ((parseFloat("2.447") - (parseFloat("0.09516") * data.edad)) + (parseFloat("0.1074") * talla) + (parseFloat("0.3362") * peso));

        this.results.pgc = ((parseFloat("0.567") * data.cintura) + (parseFloat("0.101") * data.edad) - parseFloat("31.8"));

        //this.results.geb = (parseFloat("10") * data.peso_actual) + (parseFloat("6.25") * data.cintura)

        // (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) + 5


        this.results.cmb_valor = (this.results.cmb_valor * 100 / parseFloat("29.3"));

        if (parseFloat(this.results.ec_valor) > parseFloat("10.4")) {
            this.results.ec_nombre = "Pequeña";
            this.results.pieo = ((talla / 100) * parseFloat("20"));
        }

        if (parseFloat(this.results.ec_valor) >= parseFloat("9.6") && parseFloat(this.results.ec_valor) <= parseFloat("10.4")) {
            this.results.ec_nombre = "Mediana";
            this.results.pieo = ((talla / 100) * parseFloat("22.5"));
        }

        if (parseFloat(this.results.ec_valor) < parseFloat("9.6")) {
            this.results.ec_nombre = "Grande";
            this.results.pieo = ((talla / 100) * parseFloat("25"));
        }
    }

    if (data.genero == "mujer") {

        this.results.act = ((parseFloat("2.097") - (parseFloat("0.1069") * data.edad)) + (parseFloat("0.1074") * talla) + (parseFloat("0.2466") * peso));

        this.results.pgc = ((parseFloat("0.439") * data.cintura) + (parseFloat("0.221") * data.edad) - parseFloat("9.4"));

        this.results.cmb_valor = (this.results.cmb_valor * 100 / parseFloat("28.5"));

        if (parseFloat(this.results.ec_valor) > parseFloat("11")) {
            this.results.ec_nombre = "Pequeña";
            this.results.pieo = ((talla / 100) * parseFloat("20"));
        }

        if (parseFloat(this.results.ec_valor) >= parseFloat("10.1") && parseFloat(this.results.ec_valor) <= parseFloat("11.0")) {
            this.results.ec_nombre = "Mediana";
            this.results.pieo = ((talla / 100) * parseFloat("22.5"));
        }

        if (parseFloat(this.results.ec_valor) < parseFloat("10.0")) {
            this.results.ec_nombre = "Grande";
            this.results.pieo = ((talla / 100) * parseFloat("25"));
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
