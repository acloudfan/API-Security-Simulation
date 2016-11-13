// Demonstrate the SQL Injection vulnerability
var  URI = '/login'

module.exports = function(router){

    router.route('/login').get(function (req, res, next) {

        var name = req.query.name
        var pass = req.query.pass

       var sql =  "SELECT * FROM users WHERE name ='"+name+"' AND pass='"+pass+"'"

       // Issue Simulation
       name= name.replace(' -- ','')
       var data = "SQL = <br>"+sql
       data += '<br><br>User Logged in as '+name

       res.send(data)

    });
}

// Attack query
// http://localhost:3000/login?name=admin%27%20--%20&pass=DOESNT_MATTER

// Good query
// http://localhost:3000/login?name=John&pass=456
