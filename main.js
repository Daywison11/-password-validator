function permision(){
    senhaOk()
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
            let res = document.querySelector("#space")
            res.innerHTML = 'A senha não pode conter espaços'
            res.style.color = 'red'

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
            let res = document.querySelector("#space")
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
        return false
    }
    else if( size > 7 ){
        msg.innerText = ''
        return true
    }
}

//verificando se tem alguma letra maiuscula
//se tiver retorna true se nao false
function haveuppercase(){
    let array = arrayadd()
    var senha = array.toString()
    var regex = /[A-Z]/
    if(!regex.exec(senha)){
        let msg  = document.getElementById('upper')
        msg.innerText = 'uma letra maiuscula'
        msg.style.color = 'red'
        return false
    }
    else{
        let msg  = document.getElementById('upper')
        msg.innerText = ''
        return true
    }
    
}

//verifica se tem ao menos um  numero na senha 
//se tiver retorna true se nao false
function haveNumber(){
    let msg = document.getElementById('number')
    let array = arrayadd()
    var senha = array.toString()
    var regex = /[0-9]/
    if(!regex.exec(senha)){
        msg.innerText = 'deve conter numeros'
        msg.style.color = 'red'

        return false
    }
    else{
        msg.innerText = ''
        return true
    }
}
//verifica se tem algum caractere na senha
//caso tenha retorna true se nao false
function haveCaracter(){
    let msg = document.getElementById('caracter')
    let senha = document.getElementById('password').value
    let regex = /[-!@#$%*()_+^&}{:;?.,]/ 
    if(!regex.exec(senha)){
        msg.innerText = 'um caractere " =@.,*/+'
        msg.style.color = 'red'
        return false
    } 
    else{
        msg.innerText = ''
        return true
    }
   
}
//verifica se a senha um e dois estão iguais
function validesenha2(){
    let msg = document.getElementById('resposta')
    let senha1 = document.getElementById('password').value
    let senha2 = document.getElementById('password2').value
    if (senha2 != senha1){
        msg.innerText = 'verifique a confirmação de senha'
        msg.style.color = 'red'
        return false
    }
    else if (senha1 === senha2){
        msg.innerText = ''
        return true
    }
    
}

function senhaOk(){
    let espace = removespaces()
    let size = countingsize()
    let upper = haveuppercase()
    let number = haveNumber()
    let caractere = haveCaracter()
    let igual = validesenha2()
    if(espace == false & size == true & upper == true & number == true & caractere == true & igual == true){
        return true
    }
    else{
        return false
    }
}
