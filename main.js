function permision(){
    removespaces()
    countingsize()
}
function arrayadd(){
    //pegando os itens da senha e colocando em um array
    let senha1 = document.querySelector('#password').value
    let array = Array.from(senha1)
    return array
}

//verifica se todos os espaços foram removidos da senha
//e retorna com false se nao tiver espaço 
//ou true caso ainda tenha espaços
function removespaces(){

    //emitindo mensagem caso tenha espaço na senha
    function spaceinsenha(){
        let array = arrayadd()
        let espaços = array.includes(' ')
        if( espaços ==true ){
            let res = document.querySelector("#resposta")
            res.innerHTML = 'A senha não pode conter espaços'

            //removendo os  espaços da senha
            var buscar = " ";
            var indice = array.indexOf(buscar);
            while(indice >= 0){
                array.splice(indice, 1);
                indice = array.indexOf(buscar);
            }
            return true
        }
        else{
            let res = document.querySelector("#resposta")
            res.innerHTML = ''
            return false
        } 
    }
    //verifica se os espaços ja foram removidos
    if (spaceinsenha() == true){

        return true
    }
    else{
        return false
    }
}

//verifica se a senha tem 8 caracteres
function countingsize(){
    let array = arrayadd()
    let size = array.length
    let msg = document.getElementById('size')
    if ( size <= 7 ){
        msg.innerText = 'no minimo 8 caracter'
        msg.style.color = 'red'
    }
    else if( size > 7 ){
        msg.innerText = ''
    }
    console.log(size)
}

