import { CalcularInpostoDeRenda } from "./CalcularInpostoDeRenda";
import { CalcularINSS } from "./CalcularINSS";
import { LogFactory } from "./LogFactory";
export class CalcularSalarioLiquido {
    static log = LogFactory.factory(CalcularSalarioLiquido);
    static calcular(salario: number, desconto: number) {
        let inss = CalcularINSS.calcular(salario);
        this.log("INSS: " + inss);
        let salarioAposInss = salario - inss;
        let impostoDeRenda = CalcularInpostoDeRenda.calcular(salarioAposInss);
        this.log("Imposto de Renda: " + impostoDeRenda);
        let salarioAposImposto = salarioAposInss - impostoDeRenda;
        this.log("Salario liquido: " + salarioAposImposto);
        return salarioAposImposto - desconto;
    }
}
