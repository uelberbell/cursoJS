//"Toda" função tem uma chamada, um conjunto de parametros, uma ação e retorno. 
function parim(n){
    if (n%2==0){
        return "Par"
    }else{
        return "Impar"
        }
}
console.log(parim(10))//Parametro real está como 10, dentro do parenteses. E ele é jogado no lugar do "n" dentro da função
