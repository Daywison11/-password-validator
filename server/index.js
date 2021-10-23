//inportand express
    const express = require('express')
    const app = express()

//importação do body-parcer
    const bodyParser = require ('body-parser')

    //CONFIGURANDO BODY PARCER
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

//inportação do hendlebars
    const handlebars = require('express-handlebars')

const Usuarios = require('./models/usuarios')
const usuarios = require('./models/usuarios')


//configurando handlebars como templet 
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars')

//i,portando a tabela usuarios com com o modululo db

//rotas
    //rota padrao
        app.get('/', (req,res) => {
            res.render('home')
        })

    //rota do aleta que redirecina para pagina de login
    app.get('/alert', (req,res) => {
        res.render('./alert/Log')
    })
    
    //rota de recebimento do login
        app.post('/rec', async (req,res) => {
            var usuario = req.body.email
            var senha = req.body.password
            
            //pegando a tabela ususarios do Db
            const use = await Usuarios.findOne({
                where:{
                    user: usuario
                }
            })
            //verifica se o usuario existe ou nao no db
            if (use){
                //verificando user adm
                    if (use.user === 'admin' && senha === use.senha){
                    res.render('homeAdm')
                }
                //verificando senha          
                    else if (usuario === use.user & senha === use.senha){
                        res.render('./homeLog')
                    }
                    else{
                        res.render('./alert/Log')
                    }
            }
            else{
                res.render('./alert/NaoCas')
            }
                
            
        })
        
    //rota de login 

        app.get('/login',  (req,res) => {
            res.render('login')
            
                
        })
    //cadastro de usuarios
        //rota de cadatro de usuarios
            app.get('/cadastro', (req,res) => {
                res.render('cad')
        })

        

        //rota onde vai ser mandado os cadastros
            app.post('/form', (req,res)=> {
                var lg =  req.body.email
                var senha = req.body.password
                var senha2 = req.body.password2
                //validação de senha
                    var regex = /(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#;$%*(){}_+^&](?=(?:.*?[0-9]){1})/; 
                    var upper = /[A-Z]/

                    if (senha.length < 8)
                    {
                        res.render('./alert/Cad')
                    }
                    else if(!regex.exec(senha))
                    {
                        res.render('./alert/Cad')
                    }

                    
                    else if(!upper.exec(senha)){    

                        res.render('./alert/Cad')
                    }
                    else if (senha != senha2){
                        res.render('./alert/CadSenha')
                    }

                    else{
                       
                        Usuarios.create({
                            user : lg,
                            senha: senha

                        })
                        res.redirect('/login')
                    }


            })
        //rota de usuarios
            app.post('/')






//rodando servidor na porta 3000
    app.listen('8081', ()=> {
        console.log('servidor rodando na porta 3000')
    })