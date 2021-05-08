let num = [5, 8, 4]
//num[3] = 3 //Forma de adicionar um valor após o vetor estar criado. Mas neste caso estamos definindo a posição
num.push(1) // Neste outro caso estamos dizendo o valor que queremos inserir, mas o Java Script cuida da alocação do valor.
num.sort()
console.log(`Dados dentro da lista: ${num}`)
console.log(`Nossa lista tem: ${num.length} posições`)