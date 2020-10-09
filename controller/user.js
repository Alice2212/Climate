var request = require('request')
var apiKey = 'cea5d14c16d0517e72af5193aeee5dc2'

exports.indexPage = (req, res)=>{
    res.render ('user', {weather: null, error:null});
}

//handling the post request
exports.submitPage = (req,res)=>{
    console.log(req.body.city);
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    request(url, function (err, response, body) {
        if(err){
          res.render('user', {weather: null, error: 'Error, please try again'});
        } else {
          let weather = JSON.parse(body)
          if(weather.main == undefined){
            res.render('user', {weather: null, error: 'Error, please try again'});
          } else {
            let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
            // let weatherText2 = (((Number (weatherText)) - 32) / (1.8000))
            res.render('user', {weather: weatherText, error: null});
          }
        }
    });

}