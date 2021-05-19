let amigo = {nome: 'uelber', 
idade: 33,
sexo: 'M',
peso: 75.45,
hipertrofia(h = 0){
    console.log('Cresceu!')
    this.peso += h
    }
}
amigo.hipertrofia(7)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)