var mysql= require('mysql');
var con= mysql.createConnection({

host:"localhost",
user:"root",
password:"password1",
database:"mydb"



});

con.connect(function(err){
    if(err)throw err;
    console.log("hi");
    var sql="insert into customers (name,address) values ?";
    var values=[
    ['joe','highway 71'],
    ['Pete', 'Lowstreet 4'],
    ['Amy11000', 'Apple st 652'],
    ['Hannah3000', 'Mountain 21'],
    ['Michaelmark', 'Valley 345']
   
    ];
    
    
    // con.on('error', function(err,result) {
    //     console.log("[mysql error]",err);
    //     console.log("number of records inserted"+ result.affectedRows)
    //   });
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });

    });