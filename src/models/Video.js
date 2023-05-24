import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {type:String, required:true ,trim:true, maxLength: 60},
    fileUrl : { type: String, required:true},
    description: {type:String, required:true,trim:true, minLength: 10},
    createdAt: {type: Date, required:true, default: Date.now },
    hashtags: [{type:String,trim:true}],
    meta: {
        views: {type:Number, defualt: 0, require:true},
        rating: {type:Number, defualt: 0, require:true},
    },
    owner :{type:mongoose.Schema.Types.ObjectId, required:true , ref:'User'}, // ID를 추가할 건데, model.User에서 온다고 몽구스에게 말해줌
});

videoSchema.static('formatHasgtags', function(hashtags){
    return hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));
})

const Video=mongoose.model("Video",videoSchema);
export default Video;