// import mongoose
import mongoose from "mongoose";

//============== DB_CONECTION==============
const connection_URL = `mongodb+srv://admin:admin@cluster0.ewxj0.mongodb.net/users?retryWrites=true&w=majority`;
mongoose.connect(connection_URL, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//========== Database Connected Or Not==========
mongoose.connection.once('open',()=>{
    console.log('DB CONNECTED');
});