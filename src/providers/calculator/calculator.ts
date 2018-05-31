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
        imc_tipo: '',
        cpi: 0,
        act: 0,
        pgc: 0,
        geb: 0,
        ps: 0,
        geb_benedetic_resultado_primario: 0,
        geb_benedetic_resultado_secundario: 0,
        geb_jeor_resultado_primario: 0,
        geb_jeor_resultado_secundario: 0,
        log: ''
  }

  constructor() {
    console.log('Hello CalculatorProvider Provider');
  }

  obtenerResultados(data: any) {
    console.log(data);
    console.log('Intentando hacer el calculo...');

    this.results.log = '';

    this.results.log = this.results.log.concat('Inicio el proceso.' + '\n');

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
    this.results.envergadura = data.envergadura;
    this.results.talla_calculada = 0;
    this.results.peso_calculado = 0;
    this.results.geb_benedetic_resultado_primario = 0;
    this.results.geb_benedetic_resultado_secundario = 0;
    this.results.geb_jeor_resultado_primario = 0;
    this.results.geb_jeor_resultado_secundario = 0;
    //

    let talla = (!isNaN(data.talla) && parseInt(data.talla) > parseInt("0")) ? data.talla : 0;

    // Recalculamos la talla
    if (parseFloat(talla) <= parseFloat("0")) {
        console.info('Se calculara talla');
        this.results.log = this.results.log.concat('La talla no fue ingresada.' + '\n');
        if (parseInt(data.envergadura) > parseInt("0")) {
            console.info('Calculando talla por envergadura');
            this.results.log = this.results.log.concat('Se calculara la talla por media envergadura: ' + parseInt(data.envergadura) + '\n');
            this.results.talla_calculada = (parseInt(data.envergadura) * parseInt("2"));
        } else if (parseFloat(data.rodilla) > parseFloat("0")) {
            console.info('Calculando talla por rodilla');
            this.results.log = this.results.log.concat('Se calculara la talla por altura de rodilla: ' + parseFloat(data.rodilla) + '\n');
            if (data.genero == "hombre") {
                console.info('Calculando talla por rodilla de hombre');
                this.results.log = this.results.log.concat('Se calculara la talla por altura de rodilla para hombre.' + '\n');
                if (parseInt(data.edad) >= parseInt("19") && parseInt(data.edad) <= parseInt("59")) {
                    console.info('Calculando talla por rodilla de hombre entre 19 y 59');
                    this.results.log = this.results.log.concat('Se calculara la talla por altura de rodilla para hombre entre 19 y 59.' + '\n');
                    this.results.talla_calculada = ((parseFloat(data.rodilla) * parseFloat("1.88")) + parseFloat("71.85"));
                } else if (parseInt(data.edad) >= parseInt("60") && parseInt(data.edad) <= parseInt("80")) {
                    console.info('Calculando talla por rodilla de hombre entre 60 y 80');
                    this.results.log = this.results.log.concat('Se calculara la talla por altura de rodilla para hombre entre 60 y 80.' + '\n');
                    this.results.talla_calculada = ((parseFloat(data.rodilla) * parseFloat("2.22")) + parseFloat("59.01"));
                }
            } else if (data.genero == "mujer") {
                console.info('Calculando talla por rodilla de mujer');
                this.results.log = this.results.log.concat('Se calculara la talla por altura de rodilla para mujer.' + '\n');
                if (parseInt(data.edad) >= parseInt("19") && parseInt(data.edad) <= parseInt("59")) {
                    console.info('Calculando talla por rodilla de mujer entre 19 y 59');
                    this.results.log = this.results.log.concat('Se calculara la talla por altura de rodilla para mujer entre 19 y 59.' + '\n');
                    this.results.talla_calculada = ((parseFloat(data.rodilla) * parseFloat("1.86")) - (parseFloat(data.edad) * parseFloat("0.05")) + parseFloat("70.25"));
                } else if (parseInt(data.edad) >= 60 && parseInt(data.edad) <= 80) {
                    console.info('Calculando talla por rodilla de mujer entre 60 y 80');
                    this.results.log = this.results.log.concat('Se calculara la talla por altura de rodilla para mujer entre 60 y 80.' + '\n');
                    this.results.talla_calculada = ((parseFloat(data.rodilla) * parseFloat("1.91")) - (parseFloat(data.edad) * parseFloat("0.17")) + parseFloat("75"));
                }
            }
        } else {
            this.results.log = this.results.log.concat('No se puede calcular la talla ni por altura de rodilla ni media envergadura.' + '\n');
        }
    }

    if (parseFloat(talla) <= parseFloat("0")) {
        if (parseFloat(this.results.talla_calculada) > parseFloat("0")) {
            this.results.log = this.results.log.concat('La talla finalmente se ha calculado en: ' + this.results.talla_calculada + '\n');
            talla = this.results.talla_calculada;
        }
    }

    this.results.log = this.results.log.concat('La talla real con la que se realizara los calculos es:' + talla + '\n');

    let peso = (!isNaN(data.peso_actual) && parseFloat(data.peso_actual) > parseFloat("0")) ? data.peso_actual : 0;

    // Recalculamos el peso
    if (parseFloat(peso) <= parseFloat("0")) {
        console.info('Se calculara peso');
        this.results.log = this.results.log.concat('El peso actual no fue ingresado.' + '\n');
        if (data.genero == "hombre") {
            this.results.log = this.results.log.concat('Se calculara el peso para hombre.' + '\n');
            if (parseInt(data.edad) >= parseInt("19") && parseInt(data.edad) <= parseInt("59")) {
                this.results.log = this.results.log.concat('Se calculara el peso para hombre entre 19 y 59 usando altura de rodilla y circunferencia de brazo.' + '\n');
                this.results.peso_calculado = ((parseFloat(data.rodilla) * parseFloat("1.19")) + (parseFloat(data.brazo) * parseFloat("3.21")) - parseFloat("86.82"));
            } else if (parseInt(data.edad) >= parseInt("60") && parseInt(data.edad) <= parseInt("80")) {
                this.results.log = this.results.log.concat('Se calculara el peso para hombre entre 60 y 80 usando altura de rodilla y circunferencia de brazo.' + '\n');
                this.results.peso_calculado = ((parseFloat(data.rodilla) * parseFloat("1.10")) + (parseFloat(data.brazo) * parseFloat("3.07")) - parseFloat("75.81"));
            }
        } else if (data.genero == "mujer") {
            this.results.log = this.results.log.concat('Se calculara el peso para mujer.' + '\n');
            if (parseInt(data.edad) >= parseInt("19") && parseInt(data.edad) <= parseInt("59")) {
                this.results.log = this.results.log.concat('Se calculara el peso para mujer entre 19 y 59 usando altura de rodilla y circunferencia de brazo.' + '\n');
                this.results.peso_calculado = ((parseFloat(data.rodilla) * parseFloat("1.01")) + (parseFloat(data.brazo) * parseFloat("2.81")) - parseFloat("66.04"));
            } else if (parseInt(data.edad) >= parseInt("60") && parseInt(data.edad) <= parseInt("80")) {
                this.results.log = this.results.log.concat('Se calculara el peso para mujer entre 60 y 80 usando altura de rodilla y circunferencia de brazo.' + '\n');
                this.results.peso_calculado = ((parseFloat(data.rodilla) * parseFloat("1.09")) + (parseFloat(data.brazo) * parseFloat("2.68")) - parseFloat("65.51"));
            }
        }
    }

    if (data.genero == "hombre") {
        this.results.ps = (parseFloat("24") * (parseFloat(talla) / parseFloat("100")) * (parseFloat(talla) / parseFloat("100")));
    } else if (data.genero == "mujer") {
        this.results.ps = (parseFloat("22") * (parseFloat(talla) / parseFloat("100")) * (parseFloat(talla) / parseFloat("100")));
    }

    if (parseFloat(peso) <= parseFloat("0")) {
        this.results.log = this.results.log.concat('El peso actual sera validado.' + '\n');
        if (parseFloat(this.results.peso_calculado) > parseFloat("0")) {
            this.results.log = this.results.log.concat('El peso actual sera el calculado.' + '\n');
            peso = this.results.peso_calculado;
        } else if (parseFloat(this.results.ps) > parseFloat("0")) {
            this.results.log = this.results.log.concat('Se calculara el peso usando el peso saludable.' + '\n');
            peso = this.results.ps;
        }
    }

    this.results.log = this.results.log.concat('El peso con que se realizara los calculos es:' + peso + '\n');

    this.results.imc = (parseFloat(peso) / ((parseFloat(talla) / parseFloat("100")) * (parseFloat(talla) / parseFloat("100"))));
    this.results.imc = parseFloat(this.results.imc).toFixed(2);

    if (parseFloat(this.results.imc) < parseFloat("16.00")) {
        this.results.imc_tipo = 'infrapeso con delgadez severa';
    } else if (parseFloat(this.results.imc) >= parseFloat("16.00") && parseFloat(this.results.imc) <= parseFloat("16.99"))  {
        this.results.imc_tipo = 'infrapeso con delgadez moderada';
    } else if (parseFloat(this.results.imc) >= parseFloat("17.00") && parseFloat(this.results.imc) <= parseFloat("18.49"))  {
        this.results.imc_tipo = 'infrapeso con delgadez aceptable';
    } else if (parseFloat(this.results.imc) >= parseFloat("18.50") && parseFloat(this.results.imc) <= parseFloat("24.99"))  {
        this.results.imc_tipo = 'peso normal';
    } else if (parseFloat(this.results.imc) >= parseFloat("25.00") && parseFloat(this.results.imc) <= parseFloat("29.99"))  {
        this.results.imc_tipo = 'sobrepeso';
    } else if (parseFloat(this.results.imc) >= parseFloat("30.00") && parseFloat(this.results.imc) <= parseFloat("34.99"))  {
        this.results.imc_tipo = 'obeso de tipo I';
    } else if (parseFloat(this.results.imc) >= parseFloat("35.00") && parseFloat(this.results.imc) <= parseFloat("40.00"))  {
        this.results.imc_tipo = 'obeso de tipo II';
    } else if (parseFloat(this.results.imc) > parseFloat("40.00"))  {
        this.results.imc_tipo = 'obeso de tipo III';
    } else {
        this.results.log = this.results.log.concat('El tipo de indice de masa corporal no fue hallado.' + '\n');
    }

    this.results.ppp = (((parseFloat(data.peso_usual) - parseFloat(peso)) * parseFloat("100") ) / parseFloat(peso));
    this.results.ppp = parseFloat(this.results.ppp).toFixed(2);

    this.results.ec_valor = ((parseFloat(talla)) / parseFloat(data.carpo));
    this.results.log = this.results.log.concat('El valor de la estructura corporal es: ' + this.results.ec_valor + ' data la talla: ' + talla + ' y carpo: ' + data.carpo + '\n');

    this.results.cpi = ((parseFloat("0.75") * (parseFloat(talla) - parseFloat("150"))) + parseFloat("50"));

    this.results.cmb_valor = (parseFloat(data.brazo) - (parseFloat("0.314") * parseFloat(data.triceps)));

    this.results.irn_valor = (((parseFloat("1.519") * parseFloat(data.albumina)) + parseFloat("41.7")) * (parseFloat(peso) / parseFloat(this.results.cpi)));

    if (data.genero == "hombre") {

        this.results.act = ((parseFloat("2.447") - (parseFloat("0.09516") * parseFloat(data.edad))) + (parseFloat("0.1074") * parseFloat(talla)) + (parseFloat("0.3362") * parseFloat(peso)));

        this.results.pgc = ((parseFloat("0.567") * parseFloat(data.cintura)) + (parseFloat("0.101") * parseFloat(data.edad)) - parseFloat("31.8"));

        this.results.cmb_valor = (parseFloat(this.results.cmb_valor) * parseFloat("100") / parseFloat("29.3"));

        if (parseFloat(this.results.ec_valor) > parseFloat("10.4")) {
            this.results.log = this.results.log.concat('Hombre de estructura pequena.' + '\n');
            this.results.ec_nombre = "pequeña";
        } else if (parseFloat(this.results.ec_valor) >= parseFloat("9.6") && parseFloat(this.results.ec_valor) <= parseFloat("10.4")) {
            this.results.log = this.results.log.concat('Hombre de estructura mediana.' + '\n');
            this.results.ec_nombre = "mediana";
        } else if (parseFloat(this.results.ec_valor) <= parseFloat("9.6")) {
            this.results.log = this.results.log.concat('Hombre de estructura grande.' + '\n');
            this.results.ec_nombre = "grande";
        } else {
            this.results.log = this.results.log.concat('No se identifico la estructura corporal en el hombre.' + '\n');
        }
    }

    if (data.genero == "mujer") {

        this.results.act = ((parseFloat("2.097") - (parseFloat("0.1069") * parseFloat(talla))) + (parseFloat("0.2466") * parseFloat(peso)));

        this.results.pgc = ((parseFloat("0.439") * parseFloat(data.cintura)) + (parseFloat("0.221") * parseFloat(data.edad)) - parseFloat("9.4"));

        this.results.cmb_valor = (parseFloat(this.results.cmb_valor) * parseFloat("100") / parseFloat("28.5"));

        if (parseFloat(this.results.ec_valor) > parseFloat("11")) {
            this.results.log = this.results.log.concat('Mujer de estructura pequena.' + '\n');
            this.results.ec_nombre = "pequeña";
        } else if (parseFloat(this.results.ec_valor) >= parseFloat("10.1") && parseFloat(this.results.ec_valor) <= parseFloat("11.0")) {
            this.results.log = this.results.log.concat('Mujer de estructura mediana.' + '\n');
            this.results.ec_nombre = "mediana";
        } else if (parseFloat(this.results.ec_valor) <= parseFloat("10.0")) {
            this.results.log = this.results.log.concat('Mujer de estructura grande.' + '\n');
            this.results.ec_nombre = "grande";
        } else {
            this.results.log = this.results.log.concat('No se identifico la estructura corporal en la mujer.' + '\n');
        }
    }

    if (this.results.ec_nombre == "pequeña") {
        if (parseInt(data.edad) >= 19 && parseInt(data.edad) <= 59) {
            this.results.pieo = (((parseFloat(talla) / parseFloat("100")) * (parseFloat(talla) / parseFloat("100"))) * parseFloat("20"));
        } else if (parseInt(data.edad) >= 60) {
            this.results.pieo = (((parseFloat(talla) / parseFloat("100")) * (parseFloat(talla) / parseFloat("100"))) * parseFloat("22"));
        }
    } else if (this.results.ec_nombre == "mediana") {
        if (parseInt(data.edad) >= 19 && parseInt(data.edad) <= 59) {
            this.results.pieo = (((parseFloat(talla) / parseFloat("100")) * (parseFloat(talla) / parseFloat("100"))) * parseFloat("22.5"));
        } else if (parseInt(data.edad) >= 60) {
            this.results.pieo = (((parseFloat(talla) / parseFloat("100")) * (parseFloat(talla) / parseFloat("100"))) * parseFloat("25"));
        }
    } else if (this.results.ec_nombre == "grande") {
        if (parseInt(data.edad) >= 19 && parseInt(data.edad) <= 59) {
            this.results.pieo = (((parseFloat(talla) / parseFloat("100")) * (parseFloat(talla) / parseFloat("100"))) * parseFloat("25"));
        } else if (parseInt(data.edad) >= 60) {
            this.results.pieo = (((parseFloat(talla) / parseFloat("100")) * (parseFloat(talla) / parseFloat("100"))) * parseFloat("27"));
        }
    }

    this.results.pieo = parseFloat(this.results.pieo).toFixed(2);

    this.results.cpi = parseFloat(this.results.cpi).toFixed(2);

    this.results.ps = parseFloat(this.results.ps).toFixed(2);

    this.results.act = parseFloat(this.results.act).toFixed(2);

    this.results.cmb_valor = parseFloat(this.results.cmb_valor).toFixed(2);

    this.results.irn_valor = parseFloat(this.results.irn_valor).toFixed(2);

    this.results.pgc = parseFloat(this.results.pgc).toFixed(2);

    this.results.ec_valor = parseFloat(this.results.ec_valor).toFixed(2);

    if (parseFloat(this.results.cmb_valor) >= parseFloat("80") && parseFloat(this.results.cmb_valor) <= parseFloat("90")) {
        this.results.cmb_nombre = "leve";
    } else if (parseFloat(this.results.cmb_valor) >= parseFloat("60") && parseFloat(this.results.cmb_valor) <= parseFloat("80")) {
        this.results.cmb_nombre = "moderado";
    } else if (parseFloat(this.results.cmb_valor) < parseFloat("60")) {
        this.results.cmb_nombre = "moderado";
    }

    if (parseFloat("97.5") <= parseFloat(this.results.irn_valor) && parseFloat(this.results.irn_valor) < parseFloat("100")) {
        this.results.irn_nombre = "leve";
    } else if (parseFloat("83.5") <= parseFloat(this.results.irn_valor) && parseFloat(this.results.irn_valor) < parseFloat("97.5")) {
        this.results.irn_nombre = "moderado";
    } else if (parseFloat(this.results.irn_valor) < parseFloat("83.5")) {
        this.results.irn_nombre = "grave";
    }

    if (data.genero == "hombre") {
        this.results.geb_benedetic_resultado_primario = ((parseFloat("10") * parseFloat(peso)) + (parseFloat("6.25") * parseFloat(talla)) - (parseFloat("5") * parseFloat(data.edad)) + parseFloat("5"));
    } else if (data.genero == "mujer") {
        this.results.geb_benedetic_resultado_primario = ((parseFloat("10") * parseFloat(peso)) + (parseFloat("6.25") * parseFloat(talla)) - (parseFloat("5") * parseFloat(data.edad)) - parseFloat("161"));
    }

    this.results.geb_benedetic_resultado_secundario = (parseFloat(this.results.geb_benedetic_resultado_primario) / parseFloat(peso));

    this.results.geb_benedetic_resultado_primario = parseFloat(this.results.geb_benedetic_resultado_primario).toFixed(2);

    this.results.geb_benedetic_resultado_secundario = parseFloat(this.results.geb_benedetic_resultado_secundario).toFixed(2);

    this.results.log = this.results.log.concat('Finalizo el proceso.' + '\n');

    console.log(this.results);

    return (this.results);
  }

}
