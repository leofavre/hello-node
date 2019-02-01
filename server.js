const express = require('express');
const hbs = require('hbs');

const { static } = express;
const app = express();
const PORT = process.env.PORT || 3000;

hbs.registerPartials(`${__dirname}/views/partials`);

app.set('view engine', 'hbs');
app.use(static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home',
    welcomeMessage: 'Hello, there!',
    currentYear: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Too lazy to GET anything.'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
