import mongoose from "mongoose";


const dbConnection = async () => {
    const DB_URI = "mongodb+srv://ayushranjanthakur:Ayushmongodb2024@job-portal.2egcc73.mongodb.net/";
    try{
        await mongoose.connect(DB_URI, { useUnifiedTopology: true});
        console.log("Database connected Successfully");
    }catch(error){
        console.log('Error while connecting with database ', error.message);
    }
}

export default dbConnection;