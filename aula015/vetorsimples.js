let num = [7, 6, 5, 8 ,9]
num.sort()
//(let pos = 0; pos < num.length; pos++) abaixo for simplificado:
for(let pos in num){//Traduzindo: Para a posição 0 em nosso vetor, temos o valor da posição 0 e assim sucessivamente.
    console.log(`O valor atribuido a posição: ${pos} é: ${num[pos]}`)
}
