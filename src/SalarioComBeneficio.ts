import { CalcularSalarioLiquido } from "./CalcularSalarioLiquido";

export class SalarioComBeneficio {
    static calcular(salario, beneficio, desconto) {
        let liquido = CalcularSalarioLiquido.calcular(salario, desconto);
        let comBeneficio = liquido + beneficio;
        return comBeneficio;
    }
}
