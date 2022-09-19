const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({
  origin:"*"
}))


app.listen(5000 , ()=>{
  console.log("listening on 5000");
})

app.post("/" , (req,res)=>{
  console.log(req.body);
})