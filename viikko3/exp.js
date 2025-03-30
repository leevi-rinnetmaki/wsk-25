import express from 'express'

const app = express();

app.use("/t5", express.static("t5"));

app.listen(3000, ()=>{

});