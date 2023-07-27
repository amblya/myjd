const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const superAdminController =require("../controllers/superAdminController");
const administrationController = require("../controllers/administrationController");
const employeeJdController = require("../controllers/employeeJdController");

// const auth = require('../middlewares/auth')
//const aws = require("../middlewares/awsLink");

router.get("/test-me", function(req,res){
    res.send({status: false, message:"just testing"})
})
//ADMIN
router.post("/registerAdmin",  adminController.registerAdmin);
router.get("/loginAdmin", adminController.loginAdmin);
router.get("/getAdminDetails", adminController.getAdminDetails)

//SUPERADMIN
router.post("/registerSuperAdmin",  superAdminController.registerSuperAdmin);
router.get("/loginSuperAdmin",superAdminController.loginSuperAdmin);

//Employee
router.post("/registerAdministration", administrationController.registerAdministration);
router.get("/getadministrationList", administrationController.getadministrationList);
router.get("/getWantedAdministrationList/:employeeId", administrationController.getWantedAdministrationList);
router.put("/updateInfo/:paramsId", administrationController.updateInfo);
router.delete("/deleteEmployee", administrationController.deleteEmployee);


// JD 
router.post("/createEmployeeJd", employeeJdController.createEmployeeJd )



router.all("*/", async(req,res)=>{
    return res.status(400).send({status: false, message:"invalid path"})
})
module.exports = router;
// router.all('*/', function(req, res){
//     return res.status(400).send({status:false, message:"Invalid Path"})
// })
