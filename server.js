// const express = require('express')
import express, { Router } from "express"
import { connectDB } from "./config/db.js";
import { apiRouter } from "./routes/index.js";
import cookieParser from "cookie-parser";


Router.use(cookieParser());


const app = express()
app.use(express.json())
const port = 3000 

connectDB()

app.use("/api", apiRouter);

app.get('/', (req, res) => {
  res.send('Hello Worldd!')
})



// app.get('/api', (req, res) => {
//   res.send('eldrin')
// })



app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})