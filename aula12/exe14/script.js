function carregar(){
    var msg = window.document.getElementById('msg');
    var msg2 = window.document.getElementById('msg2');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        // Bom dia
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#FF8966'
        msg2.innerHTML = 'Bom dia'
    } else if(hora >= 12 && hora <= 18){
        // Boa tarde    
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#706C61'
        msg2.innerHTML = 'Boa tarde!'
    } else{
        //Boa noite    
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#2A2B2A'
        msg2.innerHTML = 'Boa noite!'
        }
     
}
function entra(){
    //Tenho que implementar funcção para mousenter
}



