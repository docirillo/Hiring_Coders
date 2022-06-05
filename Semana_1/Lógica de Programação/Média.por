programa {
	funcao inicio() {
		real nota1, nota2, media
		
		escreva("Digite a nota 1:")
		leia(nota1)
		escreva("Digite a nota 2:")
		leia(nota2)
		
		media = (nota1 + nota2) /2
		
		se(media >= 6.0){
		    escreva("Parabéns, você passou!")
		} senao {
		    escreva("Que pena, não foi dessa vez.")
		}
		escreva("\nFim do programa")
	}
}
