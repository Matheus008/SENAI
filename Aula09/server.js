const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (request, response) => {
    console.log(request.path);
    console.log(request.method);
    console.log(request.query);
    console.log(request.params);

    response.send(`Olá ${request.query['nome']} sua idade é ${request.query['idade']}`);

});

app.get('/minhaimagem', (request, response) => {
    response.sendFile(path.join(__dirname, '/public','pato.jpeg'));
});

app.post("/login",(request, response) => {
    console.log(request.body);
    response.send("Processando login...");
});

app.listen(3001, () => console.log("http://localhost:3001"));

/* npm install express --save*/