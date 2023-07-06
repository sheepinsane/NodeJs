const file = './Test.db';
let express = require('express');
var sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(file);

  //1.載入express模組
let app = express();
  // 2.使用express
app.use(express.static('public'));
 //public static web page
 

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS TEST (
    serian_number INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER
  )
`;
db.run(createTableQuery, (error) => {
  if (error) {
    console.error('Error creating table:', error);
  } else {
    console.log('Table created successfully.');
  }
});

function InsertData(name,age)
{
    var sql = `INSERT INTO TEST (name, age) VALUES (?, ?)`;
    db.run(sql,[name,age], (error) => {
        if (error) {
          console.error('insert sql command error:', error);
        } else {
          console.log('Table inserted successfully.');
        }
      });
}


app.get('/Test/Add',(req,res) => {
    InsertData('Tom',15);
    InsertData('Leo',20);
    InsertData('Jacky',40);
    res.send('Insert data successfully');
});
app.get('/Test/List',(req,res) => {
    const obj = []
    db.all('SELECT * FROM TEST', function (err, rows) {
        //console.log('No' + row.serian_number + ':' + row.name + ':' + row.age);
        console.log('------------------------------------------------------')
        console.log(rows)
        console.log('------------------------------------------------------')
        res.json(rows);
      })
});


app.get('/api/data', (req, res) => {
  // 構建要返回的JSON數據
  const data = {
    key1: 'value1',
    key2: 'value2'
  };
  // 將數據以JSON格式返回
  res.json(data);
});

let port = 8081;
  //3.設定port位置
app.listen(port,()=>
{
    //Starting Listen
    console.log('Starting Listening....')
});
  // 4.監聽 port
