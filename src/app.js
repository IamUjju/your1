import express from "express";

const app = express();

const port = 3000;

// app.use("/", (req, res)=>{
//     res.send("Hello default route!")
// })

app.use("/test", (req, res)=>{
    res.send("response sent from backend!");
});

app.use("/hello", (req, res)=>{
    res.send("hello from the server backend!");
});

app.listen(port, ()=>{
    console.log(`Server listening on Port ${port}`);
})