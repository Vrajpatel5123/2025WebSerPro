/* B"H
 */

//03/31/2025 fixing the function to be async and await

const model = require("../models/products.js");
const express = require("express");
const router = express.Router();

router
//            1    2     3  (Pipeline)
  .get("/", (req, res, next) => {

    model.getAll().then((data) => {
      res.send(data);
    }).catch(next)
    //Catch will only be called if there is an error in the pipeline

    
  })

  .get("/:id", (req, res, next) => {
    const { id } = req.params;

    model.get(id).then((data) => {
      res.send(data)
    }).catch(next)
    
  })

  .post("/", (req, res, next) => {
    const newValues = req.body;

    model.create(newValues).then((data) => {
      res.send(data)
    }).catch(next)

  })

  .patch("/:id", (req, res, next) => {
    const { id } = req.params;
    const newValues = req.body;
    
    model.update(id, newValues).then((data) => {
      res.send(data)
    }).catch(next)

  })

  .delete("/:id", (req, res, next) => {
    const { id } = req.params;
    
    model.remove(id).then((data) => {
      res.send(data)
    }).catch(next)
    
  })

  module.exports = router;


  // Send is short for send and end