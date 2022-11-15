const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const fs = require('fs');
require("dotenv").config();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const { User, Shift, Hospital } = require("./models");

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge:1000*60*60*2
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(express.static("public"))
app.use(express.static('views/images'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
