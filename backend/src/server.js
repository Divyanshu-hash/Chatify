// const express = require('express');
import { ENV } from "./lib/env.js";
import express from 'express';
import path from "path";
import cors from "cors";

import cookiesParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';
import { app, server } from "./lib/socket.js";




const PORT= ENV.PORT || 3000;

app.use(express.json({ limit: "5mb" })); // req.body

app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.use(cookiesParser());


app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});