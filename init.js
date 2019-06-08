import "./db";

import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

function handleListening(){
    console.log("Listening to localhost:3000/");
}

app.listen(3000, handleListening);