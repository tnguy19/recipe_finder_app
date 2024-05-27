import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import axios from "axios";
import {appID,appKey} from "./keys.js";

const app = express();
const port = 5000;
const API_URL = "https://api.edamam.com/api/recipes/v2/?type=public&app_id="+appID+"&app_key="+appKey;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", async (req,res) => {
  try {
    const result = await axios.get(API_URL+"&q="+req.body.recipe);
    const recipes = result.data.hits.slice(0,22);
    console.log(recipes.length);
    res.send(recipes);
  } catch (error){
    console.log(error);
  }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

