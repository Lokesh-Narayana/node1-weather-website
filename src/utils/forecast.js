const request = require('request')

const forecast = (latitude, longitude, callback) => {

   const url = 'http://api.weatherstack.com/current?access_key=4b29c45eba2d574130d8ab21f9725330&query='+ latitude + ',' + longitude + '&units=f'

   request( { url, json: true }, (error, { body } = {} ) => {
    if (error) {
        callback('Unable to connect to weather services!',undefined)
    } else if (body.error) {
        callback('Unable to find the location. Try another search.', undefined)
    } else {
        callback(undefined, body.current.weather_descriptions + ' It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + ' % chance of rain. ')
    }
})

}

module.exports = forecast
