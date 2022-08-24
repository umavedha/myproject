const express = require('express');
const cors = require('cors')
app = express();

app.use(cors())
app.use(express.json())
app.listen('5000', () => {
    console.log('app running')
})


var mysql      = require('mysql');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Password@123',
  database : 'form'
});
db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + db.threadId);
});
// db.connect(function(err){
//     if(err) throw err;
//     console.log("connected");
// });



app.get('/getUser', (req, res) => {
    sql = 'select*from tblusermessage'
db.query(sql, (err, result) => {
    if (err) {
        console.log('error in getting data')
    }
     res.send(result)
   });
   
   
})

app.post('/postUser', (req, res) => {
  let data = req.body;
  sql = 'insert into tblusermessage (username,email,message) values(?,?,?)';
db.query(sql, [data.name,data.email,data.message],(err, result) => {
    if (err) {
        console.log('error in inserting data')
    }
  console.log("------",result)
     res.send(result)
   });
   
   
})