const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const morgan = require('morgan');
const app = express();
const routes = require('./routes/index');

//Settings
// app.set('appName','Pagina de pruebas');//variable
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//Middleware
app.use((req,res,next)=>{
    console.log('${req.url} -${req.method}');
    //console.log(req.url+''+req.method);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.json());//Para que express pueda entender los formatos json
// app.use(morgan('dev'));//Devuelve ruta de la peticion

// app.all('/user',(req,res,next)=>{
//     console.log('Por aqui paso');
//     next();//Para que pueda continuar con la siguiente instruccion
// })

// app.get('/',(req,res)=>{//quiero que me mandes al archivo index.ejs
//     res.render('index.ejs');
// })

// app.get('/user',(req,res)=>{//ruta 
//     res.json({
//         username: 'Carlos',
//         lastname: 'Fernandez'
//     });
// });

// app.post('/user/:id',(req,res)=>{//ruta
//     console.log(res.body);
//     console.log(res.params); 
//     res.send('Post request received');
// })
// app.put('/user/:id',(req,res)=>{//ruta
//     console.log(res.body); 
//     res.send('user ${req.params.id} updated');
// })
// app.delete('/user/:id',(req,res)=>{//ruta 
//     res.send('user ${req.params.id} deleted');
// });


//routes
app.use(routes);

//Static files
app.use(express.static(path.join(__dirname,'public')));

//Start the server
app.listen(app.get('port'),()=>{
    //console.log(app.get('appName'));//Setting, llama a la variable
    console.log('Servidor en puerto',app.get('port'));
})
