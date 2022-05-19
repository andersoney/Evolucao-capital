class Config {
    salario = parseFloat(process.env.SALARIO)   
    valeAlimentacao = parseFloat(process.env.VALE_ALIMENTACAO)
    descontos = parseFloat(process.env.DESCONTOS)
    despesas = parseFloat(process.env.DESPESAS)
    rendimento = parseFloat(process.env.RENDIMENTO_MES);
    valorAtual = parseFloat(process.env.VALOR_ATUAL)
}

let config = new Config()
export { config };