const db = require("mysql2");

const con = db.createConnection({
    host : "35.188.70.158",
    user : "root",
    password : "1234",
    database : "UAS_takad"
});

con.connect((err)=>{
    if(err) throw err;
    console.log("terhubung ke database");
});
module.exports = con;