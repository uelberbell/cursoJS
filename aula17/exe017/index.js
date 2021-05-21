let num = document.getElementById('txtnum')
let res = document.getElementById('imprimir')
let valores = []

function isNumber(n){
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
    if (isNumber(num.value) && !isLista (num.value, valores)){
        valores.push(Number(num.value))
        res.innerHTML = ''
        console.log(`${valores}`)

    } else {
        alert(`Numero não permitido ou já está na sua lista!`)
    }
    num.value =''
    num.focus()
    
}

function verificar(){
    res.innerHTML = `O Total de valores adiconado é de <strong>${valores.length}</strong>`// Length usamos para pegar o tamanho do array. Strong deixamos em negrito
    
}
