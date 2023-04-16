const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000
require("dotenv").config();
app.use(cors());
app.use(express.json());
const db = require("knex")({
    client: "pg",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    }
});
app.get("/test", async (req,res) =>{
    const data = await db("test").select();
    res.json(data)
});
app.listen(process.env.PORT, () => {
    console.log("Listening on port " + port)
});