// servers can use typescript directly with ts-node
// browsers have to use javascript so the typescript compiler can be set up
// to interpolate all the ts files into js
import express from "express";

// notice how I can use IMPORT instead of require if wanted
import { voidFunction } from "./learning/basics";

// DO NOT PUT FILE EXTENSIONS WHEN WORKING WITH TS
const basics = require("./learning/basics")
const classes = require("./learning/classes")
const newHotness = require("./learning/newHotness")

const app = express();
app.use(express.json());

app.listen(9000, () => {
    console.log(`Server running on port ${9000}`);
});

