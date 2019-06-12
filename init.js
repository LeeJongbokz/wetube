import "./db";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000;

function handleListening(){
    console.log("Listening to localhost:4000/");
}

app.listen(PORT, handleListening);