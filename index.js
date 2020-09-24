var mysql = require('mysql');
var sql_query = require("./main");
const express = require("express")
const path = require('path')
const app = express();

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gowda1633',
    database: 'IMDB'
});


connection.connect(async (err) => {
    if (err) throw err;
    console.log("Connected Successfully!");
    sql_query.myfunction(connection)
    setTimeout(hello, 2000)

});


function hello() {
    //Body Parser Middleware
    app.use(express.json())
    app.use(express.urlencoded({
        extended: false
    }))
    // Movie api route :
    app.use('/api/movie', require('./routes/api/movie'))
    const PORT = process.env.PORT || 6000
    app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`))
}



// sql_query.myfunction(connection)

// connection.end(function (err) {
//     if (err) throw err;
//     console.log("Connection End!");
// });
