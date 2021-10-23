const { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER } = require('constants')
const db = require('./db')


const usuarios = db.sequelize.define('usuarios',{
    user:{
        type: db.Sequelize.STRING
    },

    senha:{
        type: db.Sequelize.CHAR
    }
})

module.exports =  usuarios

//usuarios.sync({force: true})