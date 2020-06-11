const http = require('http');
const express = require('express');

const bodyParser=require('body-parser');
const path=require('path');
const app = express();
const expressHbs=require('express-handlebars');
 
app.engine('hbs',expressHbs({
    layoutsDir: 'views/layout/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  }));
app.set('view engine', 'hbs');
//app.set('view engine','pug'); pug template
app.set('views','views');

const adminData=require('./routes/admin');
const shopRoutes=require('./routes/work');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/',adminData.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle: 'Page not found'});
    //res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    //res.status(404).send('<h1>PAGE NOT FOUND</h1>');
    //res.status(404).send('Not Acceptable');
});

app.listen(4000);


/*const server = http.createServer(app);
server.listen(4000);

app.use('/',(req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>Hello from Express!</h1>');
    next(); // Allows the request to continue to the next middleware in line
});
*/
