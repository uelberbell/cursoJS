let num = document.getElementById('txtnum')
let seletor = document.getElementById('seletor')
let res = document.getElementById('imprimir')
let valores = []

function isNumero(n){
    if (Number(n) >=1 && (Number(n)) <= 100){
        return true
    } else{
        return false
    }  
}

function isLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){ 
    if (isNumero(num.value) && !isLista (num.value, valores)){
        valores.push(Number(num.value))
        let dados = document.createElement(`option`)
        dados.innerText = (`Valor ${num.value} adicionado na posição: ${valores.length}`)
        seletor.appendChild(dados)
        res.innerHTML = ''
        console.log(`${valores}`)

    } else {
        alert(`Numero não permitido ou já está na sua lista!`)
    }
    num.value =''
    num.focus()
    
}

function verificar(){
    if(valores.length == 0){
        alert('Você não pode verificar valores sem adicionar nenhum dado!') 
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior) //São dois IF diretos sem adição de chaves porque é necessário que das duas ações sejam feitas
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]  
        }
            media += soma /5
        res.innerHTML += `O Total de valores adiconado é de <strong>${total}</strong><br>`// Length usamos para pegar o tamanho do array. Strong deixamos em negrito
        res.innerHTML += `O total dos valores somados é: ${soma}<br>`
        res.innerHTML += `A mádia dos valores é: ${media}<br>` 
        res.innerHTML += `O maior valor adicionado na lista É: <strong>${maior}</strong><br>`
        res.innerHTML += `O menor valor adicionado na lista é: <strong>${menor}</strong>`
    
    }
   
    
}
