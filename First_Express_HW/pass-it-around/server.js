//Dependencies
const { response } = require('express');
const express = require('express');//from documentation: express is function
// console.log(express);
const app = express();//app is an object

app.get('/:number_of_bottles', (req,res) => {
    console.log("Oh hey! I got a request.");
    console.log(req.params);
    let baseURL = "http://localhost:3000/"
    let bottles = Number(req.params.number_of_bottles)-1;
    let secondLine = "Take one down, pass it around"
    // build up the link as needed
    // let random = bottles [Math.floor(Math.random())];

    let queryURL = baseURL + bottles;
    if (bottles === -1){
        queryURL = baseURL + (Number(req.params.number_of_bottles)+ 99)
        secondLine = "Reset"
}

    res.send(Number(req.params.number_of_bottles) + " Bottle(s) of beer on the wall" + "</br>" + '<a href=" '+ queryURL+' ">'+secondLine+'</a>');
});

// App Listen
app.listen(3000, () =>{
    console.log("I am listening for requests!");
});