//Dependencies
const express = require('express');//from documentation: express is function
// console.log(express);
const app = express();//app is an object

app.get('/tip/:total/:tipPercentage', (req,res) => {
    console.log("Oh hey! I got a request.");
    console.log(req.params);
    let tipTotal = Number(req.params.total) * (Number(req.params.tipPercentage)/100);
    res.send("The tip total is $" + tipTotal);
});

//App Listen
app.listen(3000, () =>{
    console.log("I am listening for requests!");
});