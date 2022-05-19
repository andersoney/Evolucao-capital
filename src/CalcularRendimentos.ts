import { SalarioComBeneficio } from "./SalarioComBeneficio";
import { LogFactory } from './LogFactory';

export class CalcularRendimentos {
    static log = LogFactory.factory(CalcularRendimentos);
    static calcular({ salario, valeAlimentacao, descontos, despesas, rendimento, valorAtual }, meses: number): number {
        let salarioCombeneficios = SalarioComBeneficio.calcular(salario, valeAlimentacao, descontos);
        this.log("Salario com Beneficios: " + salarioCombeneficios);
        let guardado = salarioCombeneficios - despesas;
        this.log("Despesas: " + despesas);
        this.log("Guardado: " + guardado);
        let montante = 0;
        for (let i = 0; i < meses; i++) {
            montante += ((guardado) * (1 + rendimento) ** (meses - i));
        }
        this.log(valorAtual);
        let valorRendimentoAtual = valorAtual * (1 + rendimento) ** (meses);
        this.log(valorRendimentoAtual);
        return montante + valorRendimentoAtual;
    }
}
