import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
export const Connection=()=>{

    const MONGODB_URI=`mongodb://${USERNAME}:${PASSWORD}@mern-todo-shard-00-00.y3dzu.mongodb.net:27017,mern-todo-shard-00-01.y3dzu.mongodb.net:27017,mern-todo-shard-00-02.y3dzu.mongodb.net:27017/?ssl=true&replicaSet=atlas-tjm5q9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=mern-todo`;
    mongoose.connect(MONGODB_URI,{useNewUrlParser:true});

    mongoose.connection.on('connected',()=>{
        console.log("Database connected successfully");
    })
    mongoose.connection.on('disconnected',()=>{
        console.log("Database disconnected");
    })
    mongoose.connection.on('error',()=>{
        console.log("Error while connecting database", error.message);
    })
}