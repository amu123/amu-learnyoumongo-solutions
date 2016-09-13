
var mongo = require('mongodb').MongoClient;
mongo.connect(process.argv[2], function(err, db) {
    if(err) throw err;
    var users = db.collection('users');

    docs.update({
        username: "tinatime"
    },{
        $set:{
            age: 40
        }
    }, function(err) {
        if (err) throw err
        db.close()
    });
});