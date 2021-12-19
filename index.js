const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/static', express.static('public'))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/.well-known/apple-app-site-association', (req, res) => res.send('testing123'))
  .get('/.well-known/apple-app-site-association1', (req, res) => res.sendFile('apple-app-site-assocation'))
  .get('/.well-known/apple-app-site-association2', (req, res) => res.sendFile('Pic.png'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));