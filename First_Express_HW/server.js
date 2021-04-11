//Dependencies
const express = require('express');//from documentation: express is function
// console.log(express);
const app = express();//app is an object

app.get('/greeting/:name', (req,res) => {
    console.log("Oh hey! I got a request.");
    console.log(req.params);
    let name = String(req.params.name)
    res.send("Hello " + name + "! It's so good to see you!");
});

//App Listen
app.listen(3000, () =>{
    console.log("I am listening for requests!");
});