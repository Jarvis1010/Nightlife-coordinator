var mongoose=require('mongoose');
var User=mongoose.model('User');
var request=require('request');

module.exports.getClubs=function(req,res){
    var location=req.query.location;
    
    var url='https://maps.googleapis.com/maps/api/place/textsearch/json?query=clubs+in+'+location+'&key='+process.env.GOOGLEAPI;
    console.log(url);
    request.get(url, function (err,response,body) {  
      if(!err){
        res.json(JSON.parse(body));
      }else{
          res.status(400).json(err);
      }    
    });
};