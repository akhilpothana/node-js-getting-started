const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const aasaString = 
`
{
  "applinks": {
      "details": [
           {
             "appIDs": [ "1601071125.akhil.Money-Data" ]
           }
       ]
   }
}
`

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static('public'))
  //.use(express.static('public/.well-known'))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/.well-known/apple-app-site-association', (req, res) => res.send(aasaString))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));