const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const lalocode = require('./utils/lalocode')

const appu = express()

const pathdirectory     = path.join(__dirname, '../public')
const routedirectory    = path.join(__dirname, '../templates/views')
const partialsdirectory = path.join(__dirname, '../templates/partials') 

        //firstly use  name  1st parameter
appu.set('view engine', 'hbs')               //initially all the handlebars(hbs) files should be in views folder which is now renamed as templates
appu.set('views',  routedirectory)
hbs.registerPartials(partialsdirectory)

appu.use(express.static(pathdirectory))

appu.get('', (req, res) => {

    res.render('index', {
        title: 'Weather Application',
        name: 'PARTH PARMAR'
    })
})
        //if we search this 1st parameter than only we will get result
appu.get('/helpo', (req, res) => {
               //1st parameter is file name we want to get output
    res.render('help', {
        title: ' HOW MAY I HELP YOU???',
        name: 'PARTH PARMAR'
    })
})

appu.get('/about', (req, res) => {

    res.render('about', {
        title: 'ABOUT ME',
        name: 'PARTH & RUTUJA'
    } )
})

appu.get('/weather', (req, res) => {
    if( !req.query.address ) 
    {
        return res.send ({
                address: 'address not provided'
        })
    }

    geocode( req.query.address , (error, {latitude , longitude , location} = {}) => {

        if(error) {
              return res.send ({
                    error
              })
           }
     
        lalocode(latitude, longitude, (error, { temp , feel, forecast} = {}) => {
           if(error)
              {
                    return res.send({
                         error
                    })
              }
              
              res.send({
                location ,
                address: req.query.address,
                forecast 
               
            })
     
         })

   
       

    })
})

appu.get('/product', (req, res) => {
    if(!req.query.search) 
     {
           return res.send({
                error: 'search is not present'
            })
           
     }
    
        res.send({
            products: []
        })
})
appu.get('/helpo/*', (req, res) => {

    res.render('404', {
        message:'help article not found',
        name:'PARTH PARMAR'
    })
})

appu.get('*', (req, res) => {
    res.render('404', {
        message:'page not found',
        name: ' PARTH PARMAR'
    })
})

appu.listen(3000, () => {

    console.log('your website is on process')
})
