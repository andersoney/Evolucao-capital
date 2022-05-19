// import { log } from "./index";

export class CalcularInpostoDeRenda {
    static calcular(salario: number) {
        let valorParaImposto = salario;
        let imposto = 0;
        if (valorParaImposto <= 1903.98) {
            return imposto;
        }
        // console.log(valorParaImposto, imposto);
        valorParaImposto -= 1903.98;
        if (salario <= 2826.65) {
            imposto += valorParaImposto * 0.075;
            return imposto;
        } else {
            imposto += (2826.65 - 1903.98) * 0.075;
        }

        valorParaImposto -= (3751.05 - 2826.65);
        // console.log(valorParaImposto, imposto);

        if (salario <= 3751.05) {
            imposto += valorParaImposto * 0.15;
            return imposto;
        } else {
            imposto += (3751.05 - 2826.65) * 0.15;
        }

        valorParaImposto -= (4664.68 - 3751.05);
        // console.log(valorParaImposto, imposto);

        if (salario <= 4664.68) {
            imposto += valorParaImposto * 0.225;
            return imposto;
        } else {
            imposto += (4664.68 - 3751.05) * 0.225;
        }

        valorParaImposto -= (4664.68 - 3751.05);
        // log(valorParaImposto, imposto);
        // console.log(valorParaImposto, imposto);

        imposto += (salario - 4664.68) * 0.225;
        return imposto;
    }
}
