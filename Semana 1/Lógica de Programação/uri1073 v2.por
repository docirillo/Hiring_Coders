programa {
	funcao inicio() {
		inteiro n, numero, quadrado
		
		escreva("QUal o numero final? ")
		leia(n)
		
		para(numero = 2; numero<=n; numero = numero +2){
		    //quadrado = numero * numero
		    escreva(numero + "^2 = " + (numero*numero)+ "\n")
		}
	}
}
