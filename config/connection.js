var mysql = require('mysql');

var connection = mysql.createConnection({

		port: 3306,
		host: 'sp6xl8zoyvbumaa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'zybrgr7sq8zk314d',
		password: 'rq51snuiu1ism21l',
		database: 'u4wqledtlsam2vwp'

});

// var connection = mysql.createConnection({

// 	port: 3306,
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'sheela05',
// 	database: 'burgers_db'

// });

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
