import 'dotenv/config'
import { config } from "./config";
import { CalcularRendimentos } from "./CalcularRendimentos";
// console.log(1 + ":" + CalcularRendimentos.calcular(config, 1))
console.log("Começando com: " + config.valorAtual)
for (let a = 1; a <= parseInt(process.env.NUMERO_MESES); a++) {
    let montanteTotal = CalcularRendimentos.calcular(config, a);
    let rendimento = (montanteTotal * config.rendimento)
    console.log("Em: " + a + " meses\tJuntamos: " + montanteTotal.toFixed(2) + "\tRendendo por mes: " + rendimento)
}