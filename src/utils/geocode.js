const request = require('postman-request')

const geocode = (address, callback) => {

    const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +encodeURIComponent(address)+ '.json?access_token=pk.eyJ1IjoicGFydGhwYXJtYXJodW1hbiIsImEiOiJja2FjMDd6YjgwaG83MnRvOHEzM213ZGpxIn0.tQ4hOMqBQMqVskIXAl6pGQ&limit=1'
  
    
  request({ url : geoURL, json: true}, (error, georesponse) => {
  
        if(error)   {
                       callback('website didnt found', undefined)
           }
        else if(georesponse.body.features.length === 0) {
                       callback('website missed matched', undefined)
           }
            
        else {
              callback(undefined, {     
                 latitude : georesponse.body.features[0].center[1] ,
                 longitude : georesponse.body.features[0].center[0],
                 location: georesponse.body.features[0].place_name
                 })
                
           }
  
     })
}

module.exports = geocode