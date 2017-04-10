var mongoose=require('mongoose');

var barSchema=new mongoose.Schema(
    {
        barId:{type:String,required:true,unique:true},
        createdAt: { type: Date, expires: 12*1000*60*60, default: Date.now },
        users:[{type: String}]
    }
);

mongoose.model("Bar",barSchema,'bars');