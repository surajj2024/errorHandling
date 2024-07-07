const express = require("express");
const RegisterRouter = require("./routes/creatUser");
const { default: mongoose } = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

app.use(RegisterRouter)

const errorMiddleware = (err, req, res, next) => {
  return res.status(401).json({
    success:false,
    message:err.message
  });
}

app.use(errorMiddleware)


mongoose.connect("mongodb://localhost:27017/user_data")
.then(() => console.log("DB connected succesfully"))
.catch((e) => console.log("error connecting database",e));

app.listen(10_000, () => {
  console.log("Server started on port 3000");
});
