let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
let app= express();

let pool = new pg.Pool({
    port: 5432,
    password: 'Tiger12345',
    database: 'newyork',
    max: 10,
    host: 'localhost',
    user:'postgres'
});

const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/activities', function(request, response){

    var name = request.body.name;

    pool.connect((err,db,done)=>{
        if(err){
            return console.log(err)
        }
        else{
            db.query('SELECT * FROM activities where id = (select id from city where name like %'+name+'%)', function(err, table){
                done();
                if(err){
                  return console.log(err)
                }
                else{
                    return response.status(200).send(table.rows)
                }
            })
        }
    })
})












  app.listen(PORT, () => console.log('listining on port ' + PORT));