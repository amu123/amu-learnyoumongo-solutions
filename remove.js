var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if(err) throw err;
    var col = db.collection(process.argv[2]);

    col.remove({
        _id: process.argv[3]
    }, function(err) {
        if (err) throw err
        db.close()
    });
});