import express from "express";
import { Connection } from "./database/db.js";
import Routes from "./routes/route.js"
import bodyParser from "body-parser";
import cors from "cors";
const app= express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Routes);
Connection();
app.listen(8000,console.log("Server is running successfully on port 8000!!"));
