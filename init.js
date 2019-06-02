import app from "./app";

function handleListening(){
    console.log("Listening to localhost:3000/");
}

app.listen(3000, handleListening);