programa {
	funcao inicio() {
		inteiro n, numero, quadrado
		
		escreva("digite o numero final ")
		leia(n)
		
		para (numero =1; numero <= n; numero = numero +1) {
		    se (numero %2==0){
		        quadrado = numero *numero
		        escreva(numero + "^2= " + quadrado + "\n")
		    }
		}
	}
}
