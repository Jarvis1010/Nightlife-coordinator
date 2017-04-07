var mongoose=require('mongoose');

var usersGoingSchema=new mongoose.Schema(
    {
        createdAt: { type: Date, expires: 12*1000*60*60, default: Date.now },
        users:[{type: String}]
    }
);

var barSchema=new mongoose.Schema(
    {
        barId:{type:String,required:true,unique:true},
        usersGoing:[usersGoingSchema]
    }
);

mongoose.model("Bar",barSchema,'bars');