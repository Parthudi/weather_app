const request = require('postman-request')


const lalocode = (latitude, longitude , callback) => {

    const lalourl = 'http://api.weatherstack.com/current?access_key=85b871201920465c554b8a907be502ae&query='+latitude+','+longitude

    request({ url: lalourl, json: true }, (error, laloresponse) => {

       if(error) {
                callback('network issue' ,  undefined)
          }
       else if(laloresponse.body.sucess===false)
          {
                callback('wrong search / missmatch', undefined)
          }
       else{
             callback(undefined, {

                name : laloresponse.body.location.name,
                place : laloresponse.body.location.region,
                temp : laloresponse.body.current.temperature,
                feel : laloresponse.body.current.feelslike,
                forecast: laloresponse.body.current.weather_descriptions[0],
                precip: laloresponse.body.current.precip
             }

           )}
    } 
)}

module.exports = lalocode