function verificar(){
    var data = new Date() // gerando acesso a data do sistema operacional
    var ano = data.getFullYear() // Pegando ano a partir do sistema operacional
    var fano = document.getElementById('txtano') //Pegando ano digitado no formulario
    var res = document.querySelector('div#resultado') // Selecionando a div para imprimir resultado
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados digitados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')// Bucando elementos por nome, pois o radsex são dois e precisamos buscar por nome, masculino é [0] e feminino é [1].
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')// criando uma tag img
        img.setAttribute('id', 'foto')// Criando uma ID "foto" para a tag img <img id="foto">
        if (fsex[0].checked){// checando se o radio marcado foi o masculino
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                    //criança 
                img.setAttribute('src' , 'bebe-homem.png')    
            } else if (idade < 21){
                    //jovem 
                img.setAttribute('src', 'jovem-homem.png')    
            } else if (idade < 50){
                    //adulto
                img.setAttribute('src', 'adulto-homem.png')    
            } else{
                    //idoso
                img.setAttribute('src', 'idoso-homem.png')    
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
           if (idade >= 0 && idade < 10){
                    //criança 
                img.setAttribute('src', 'bebe-mulher.png')         
            } else if (idade < 21){
                    //jovem
                img.setAttribute('src', 'jovem-mulher.png')    
            } else if (idade < 50){
                    //adulto
                img.setAttribute('src', 'adulto-mulher.png')    
            } else{
                    //idoso
                img.setAttribute('src', 'idoso-mulher.png')  
            }    
    }                 
        res.style.textAlign = 'center'
        res.innerHTML = `É um(a) <strong>${genero}</strong> e tem <strong>${idade}</strong> Anos de idade!`
        res.appendChild(img)
    }   




}