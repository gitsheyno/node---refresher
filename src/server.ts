import express from "express";
// const express = require("express");
import morgan from "morgan";
import router from "./router";
import { protect } from "./modules/auth";

/**
 * App
 */
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

/**
 * Our API
 */
app.use("/api", protect, router);

export default app;
