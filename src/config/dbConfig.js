import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

export async function connectToMongoDB() {
    try{
        await mongoose.connect(MONGO_URL);
        console.log("SuccessFully Connected to MongoDB");
    }
    catch(e){
        console.log("Error Connecting to MongoDB");
        console.log(e);
    }
}