
var express = require('express');
var app = express();
var fs = require("fs");


//List Users
app.get('/listUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function(err, data){
        console.log(data);
        res.end(data);
    })
})

var user = {
    "user4": {
        "name": "mohit",
        "password": "shrusti",
        "profession": "teacher",
        "id": 4,
    }
}

//Adding User
app.post('/addUser', function(req, res){
    //First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function(err, data){
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})


//Show Details using id
app.get('/:id', function(req, res){
    //First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function(err, data){
        var users = JSON.parse(data);
        var user = users["user" + req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    });
})


//Deleting User 2
var id = 2;

app.delete('/deleteUser', function(req, res){
    //First read existing users.
    fs.readFile(__dirname + "/" + "users.json", "utf-8", function(err, data){
        data = JSON.parse(data);
        delete data["user" + 2];

        console.log(data);
        res.end(JSON.stringify(data));
    } )
})


var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address(). port;
    console.log("Example app listening at http://%s:%s", host, port)

})
