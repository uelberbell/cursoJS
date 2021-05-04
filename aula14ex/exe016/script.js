function contar(){

    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        //window.alert('ERRO! Você não pode deixar nenhum campo vazio')
        res.innerHTML = 'Impossível contar!'
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F62E} \u{200D} \u{1F4A8} `
            }
        }else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F62E} \u{200D} \u{1F4A8}`
            }
        }
        res.innerHTML += ` \u{2705}`
    }
    
}