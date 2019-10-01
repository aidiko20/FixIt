const express = require("express");
const router = require("express").Router();
const companyController = require("../controllers/companyControllers");
console.log("API routes loaded");

router.route("/user")
.get(companyController.findById)
.post(companyController.create);


router.route("/services/:serviceName")
.get(companyController.findByService);

module.exports = router;