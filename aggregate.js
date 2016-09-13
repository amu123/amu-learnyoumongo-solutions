
var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if(err) throw err;
    var prices = db.collection('prices');

    prices.aggregate([
        {
            $match : {
                size: process.argv[2]
            }
        },
        {
            $group :
            {
                _id: 'average',
                total: {$avg: '$price'}
            }
        }
    ]).toArray(function(err, results){
        if(err) throw err;
        console.log(parseFloat(results[0].total).toFixed(2));
        db.close();
    });
});