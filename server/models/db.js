const Sequelize =  require('sequelize')

const sequelize = new Sequelize('concessionaria','root', '689568',{
    host: 'localhost',
    dialect : 'mysql'
})

module.exports = {
    Sequelize,
    sequelize
}
