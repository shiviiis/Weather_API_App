const express = require("express");
const axios = require("axios");
const cors = require("cors");
const App = express();
require("dotenv").config();
App.use(express.json());
App.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET"],
    credentials:true,
}))

App.get("/weather/:city",async (req,res)=>{
    const city = req.params.city;
    try{
        const response = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`);
        res.json(response.data);
    }
    catch(error){
        console.log(error.response?.data||error.message);
        res.status(500).json({message:"Error fetching weather"});
    }
});

module.exports =  App;