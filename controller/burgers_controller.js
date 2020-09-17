const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();



router.get("/", (req,res) =>{

burger.selectAll(data =>{
    const hbsObj ={
        burgers: data
        };
    res.render("index" , hbsObj); 
    });
});

router.post()

router.put ()