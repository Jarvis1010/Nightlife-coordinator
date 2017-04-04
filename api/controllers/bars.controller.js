var mongoose=require('mongoose');
var User=mongoose.model('User');
var request=require('request');

module.exports.getBars=function(req,res){
    var location=req.query.location;
    
    var url='https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+'+location+'&key='+process.env.GOOGLEAPI;
    
    request.get(url, function (err,response,body) {  
      if(err){
        res.status(400).json(err);
      }else{
         res.json(JSON.parse(body));
      }    
    });
};

module.exports.getPhoto=function(req,res){
    var id=req.params.id;
    
    var url='https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='+id+'&key='+process.env.GOOGLEAPI;
    res.redirect(url);
    
};