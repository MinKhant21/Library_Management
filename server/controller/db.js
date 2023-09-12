import mysql from 'mysql'

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database: 'userwebform',
});
connection.connect(() => {
    console.log("connected")
})

export default connection