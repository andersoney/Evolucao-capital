export class CalcularINSS {
    static calcular(salario: number) {
        return salario * this.calcularAliquota(salario);
    }
    private static calcularAliquota(salario) {
        if (salario <= 1212.00) {
            return 0.075;
        } else if (salario <= 2427.35) {
            return 0.09;
        } else if (salario <= 3641.03) {
            return 0.12;
        } else if (salario <= 7087.22) {
            return 0.14;
        }
    }
}
