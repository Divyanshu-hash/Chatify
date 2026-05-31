// const express = require('express');
import { ENV } from "./lib/env.js";
import express from 'express';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';


const PORT= ENV.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});