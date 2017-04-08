var mongoose=require('mongoose');
var User=mongoose.model('User');
var Bar=mongoose.model('Bar');
var request=require('request');

module.exports.getBars=function(req,res){
    var location=req.query.location;
    var geoUrl='https://maps.googleapis.com/maps/api/geocode/json?address='+location+'&key=AIzaSyBOmmYPbvDc9o6hwxlVtTnoeelAhc3Z6zw';
    
    function getBars(location){
        
        var coordinates=location.lat+", "+location.lng;
        
        var url="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
                        +coordinates+
                        "&radius=50000&types=bar&key=AIzaSyBOmmYPbvDc9o6hwxlVtTnoeelAhc3Z6zw";
        
        request.get(url, function (error,response,body) {
             if(error){
                res.status(400).json(error);
              }else{
                  var bars=JSON.parse(body);
                  Bar.find().exec(function (err,barUsers){
                      if(err){
                          res.status(501).json({message:"error fetching results."})
                      }else{
                         //retriving required info out of results and mapping info from mongo
                        var final=bars.results.map(function(bar){
                             var users=barUsers.find(function(user){
                                 return user.barId==bar.id;
                             });
                             users=users?users:[];
                             return {id:bar.id,name:bar.name,photos:bar.photos,vicinity:bar.vicinity,users:[]};
                         });
                        
                         res.status(200).json(final);
                      }
                  });
              }
        });
    }
    
    request.get(geoUrl, function (err,response,body) {  
      if(err){
        res.status(400).json(err);
      }else{
         var results =JSON.parse(body);
         var latLNG =results.results[0].geometry.location
         getBars(latLNG);
      }    
    });
};

module.exports.getPhoto=function(req,res){
    var id=req.params.id;
    
    var url='https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='+id+'&key=AIzaSyBOmmYPbvDc9o6hwxlVtTnoeelAhc3Z6zw';
    res.redirect(url);
    
    
};