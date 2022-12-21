const { response } = require('express');
let express = require('express'); //declare le module express et on dit qu 'il est obligatoire

let app = express(); //on instance l'app qui sera notre serveur

//declare une premiere root qui envoi helo world
app.get('/',(request,response)=>{
    //response.send("hello world");
    response.render('home.ejs',{name:"Paul"});
});
//utiliser l'url (deuxieme root)
app.get('/index',(request,response)=>{
    //response.send('bonjour '+request.query.name);
    response.render('home.ejs',{name: request.query.name});
});
//utiliser le param de l'url(troisieme root)
app.get('/index/:name',(request,response)=>{
   // response.send('bonjour '+request.params.name);
   response.render('home.ejs',{name:request.params.name});
});

//pour les images et les feuilles de style
app.use(express.static('public'));



//utiliser le body,cette ligne permet de decomposer le body en plusieurs variable
app.use(express.urlencoded());
//envoi le formulaire
app.get('/',(request,response)=>{
    response.render('form.ejs'); 
});
//recup la donné encodé dans le body
app.post('/',(request,response)=>{
    console.log(request.body);
    response.send("hello " +request.body.myname);
});


//pour lancer le server
app.listen(3000,function(){
    console.log('server is running on port 3000')
});

