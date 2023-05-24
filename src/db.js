import mongoose from "mongoose";
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
    });
const db = mongoose.connection;

const handleOpen = ()=>  console.log("Conneted to DB 🔥")
const handleError = (error)=> console.log("DB Error",error);
db.on("error",handleError)
db.once("open", handleOpen)
//mongodb://1