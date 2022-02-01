const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
// const reviewRouter = require('./routes/reviewRoutes');
// const viewRouter = require('./routes/viewRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES

app.get('/',(req,res)=>{
  res.status(200).render('base',{
    tour:'The Forest Hiker',
    user:'Jonas'
  })

});

app.get('/login',(req,res)=>{
  res.status(200).render('login')

});

app.get('/tour',(req,res)=>{
  res.status(200).render('tour')

});




app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
