programa {
  funcao inicio() {
    inteiro idade, qtAnos, qtMeses, qtDias, sobra
    
    //entrada: a idade em dias
    escreva("Digite a idade em dias:")
    leia(idade)
    
    //processamento: dividir a idade por 365 e obter a quantidade de anos
    qtAnos = idade / 365
    
    //a partir da sobra da divisão anterior, fazer o sequinte:
    sobra = idade % 365
    
    //dividir o valor que sobrou por 30 e obter a quantidade de meses (já que 1 mês = 30 dias)
    qtMeses = sobra /30
    
    //finalmente pegar a sobra da divisão anterior, que irá resultar na quantidade de dias
    qtDias = sobra % 30
    
    //exibir saída
    escreva(qtAnos + " ano(s)\n")
    escreva(qtMeses + " mes(es)\n")
    escreva(qtDias + " dia(s)\n")
    
  }
}
