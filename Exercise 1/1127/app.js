var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/');
var indexsRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var blog_singleRouter = require('./routes/blog_single');
var blogRouter = require('./routes/blog');
var cartRouter = require('./routes/cart');
var checkoutRouter = require('./routes/checkout');
var contact_usRouter = require('./routes/contact_us');
var product_detailsRouter = require('./routes/product_details');
var shopRouter = require('./routes/shop');
var _404Router = require('./routes/404');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/index', indexsRouter);
app.use('/login', loginRouter);
app.use('/blog_single', blog_singleRouter);
app.use('/blog', blogRouter);
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);
app.use('/contact_us', contact_usRouter);
app.use('/product_details', product_detailsRouter);
app.use('/shop', shopRouter);
app.use('/404', _404Router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
