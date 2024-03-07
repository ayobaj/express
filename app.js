import express from "express";
import bookRoute from './routes/book.js'
const app = express();
import bodyParser from "body-parser";

const port = 5000;


//books

app.use('/api', bookRoute)
app.use(bodyParser.json())

app.get('/name/:user_name', function(req,res) {
    res.status(200);
    res.set('Content-type', 'text/html');
    res.send('<html><body>' +
    '<h1>Hello ' + req.params.user_name + '</h1>' +
    '</body></html>'
);
});



// app.get("/", (req, res)=> {
//     res.send('hello, how are you?')
// })

app.listen(port, ()=> console.log(`server is running on local host http://localhost:${port}`)
)

// app.post("/", (req, res)=> {
//     res.send('yo! you look pretty so much, thank you metro ')
// })


// app.all('/secret', (req, res, next)=> {
//     res.send('accesing your secret file') 
//     next()
// })

app.get('/ab*cd', function (req, res) {
    res.send('GET request to the homepage');
}).post('/', function (req, res) {
    res.send('POST request to the homepage');
}).all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
}).use(function(req, res, next){
    res.status(404).send('Page introuvable!');
});

app.get(/.*fly$/, function (req, res) {
    res.send('/.*fly$/');
})

app.get('/api/v1/stories/:id', function(req,res, next) { 
    //do authorization
    //if not authorized or there is an error 
    //return next(error);
    //if authorized and no errors 
    return next(); 
}), function(req,res, next) {
   //extract id and fetch the object from the database
   //assuming no errors, save story in the request object 
    req.story = story;
    return next(); 
}, function(req,res) {
   //output the result of the database search 
    res.send(res.story);
}


const authAdmin = function (req, res, next) { 
    return next(); 
} 
const getUsers = function (req, res, next) {
    
    return next();
}
const renderUsers = function (req, res) { 
    res.end(); 
}
const admin = [authAdmin, getUsers, renderUsers];
app.get('/admin', admin);



