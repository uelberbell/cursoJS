let num = [5, 8, 4, 7, 9 ]
//num[3] = 3 //Forma de adicionar um valor após o vetor estar criado. Mas neste caso estamos definindo a posição
num.push(1) // Neste outro caso estamos dizendo o valor que queremos inserir, mas o Java Script cuida da alocação do valor.
num.sort()
console.log(`Dados dentro da lista: ${num}`)
console.log(`Nossa lista tem: ${num.length} posições`)

for (let pos = 0; pos < num.length; pos++){//Loop for para sabermos o valor contido em cada posição.
    //console.log(`${num[pos]}`)//Nessa linha a impressão diz o seguinte: Dentro do vetor/lista na posição(pos++ pega a posição). Qual o valor na determinada posição.
    console.log(`A posição: ${pos} tem o valor: ${num[pos]}`)// Imprimindo de forma organizada.
}


/*
Tive uma ideia bacana para criar um projeto em JS. A ideia é ter meio que um controle HELPDESK online.
Lá teremos todas maquinas e impressoras ultilzadas na empresa, e cada aparelho desse deverá ter um 
status e pessoa responsável que deu suporte pela útima vez. Também será necessário que tenhamos o campo
de observbação data e horário, com o dia de início e dia de fim.value

Acredito que para isso será precioso usar uma lista/vetor para que tenhamos os dados cadastrados em duas variáveis:
máquinas e impressoras.
*/