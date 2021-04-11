//Dependencies
const { response } = require('express');
const express = require('express');//from documentation: express is function
// console.log(express);
const app = express();//app is an object

// app.get('/greeting/:name', (req,res) => {
//     console.log("Oh hey! I got a request.");
//     console.log(req.params);
//     let name = String(req.params.name) 
//     res.send("Hello " + name + "! It's so good to see you!");
// });

// app.get('/tip/:total/:tipPercentage', (req,res) => {
//     console.log("Oh hey! I got a request.");
//     console.log(req.params);
//     let tipTotal = Number(req.params.total) * (Number(req.params.tipPercentage)/100);
//     res.send("The tip total is $" + tipTotal);
// });

app.get('/magic/:phrase', (req,res) => {
        console.log("Oh hey! I got a request.");
        console.log(req.params);
        let phrase = decodeURI(String(req.params.phrase));
        let Answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
        for ( i = 0; i < Answers.length; i++){
            answerUsed = Answers[Math.floor(Math.random() * Answers.length)];
        }
        res.send(phrase + '<h1>'+ answerUsed+ '</h1>');
    });

    // $container.html(`
    // <h3 class = title> ${data.title}</h4>
    // <h4> ${data.medium + ", " + data.objectDate}</h4>
    // `)
    // const $img = $('<img>').attr('src', data.primaryImage)
    // $img.addClass('image')
    // $container.append($img)
    // const $h5 = $('<h5>').text("Department Information")
    // $container.append($h5)
// App Listen
app.listen(3000, () =>{
    console.log("I am listening for requests!");
});