const e = require('express')

if(process.env.NODE_ENV == 'production'){
    module.exports = require('./keys.prod')
}
else{
    module.exports = require('./keys.dev')
}