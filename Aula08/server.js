const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const html = `
<!doctype html>
<html>
    <body>
        <h1>Hello</h1>
    </body>
</html>
`;

app.get('/',(req,res) => {
    res.end(html);
});

app.listen(3001, () => console.log("http://localhost:3001"));

/* npm install express --save*/