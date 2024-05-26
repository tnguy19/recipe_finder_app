import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";

const app = express();
const port = 5000;
const API_URL = "https://covers.openlibrary.org/b/isbn/";

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    //console.log(posts);
  });

  function findCoverURL(isbn){
    return API_URL + isbn + "-M.jpg";
  }