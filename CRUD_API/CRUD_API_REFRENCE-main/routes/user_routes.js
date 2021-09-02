var express = require("express");

var userData=require('../controllers/user_Controller')
var user_data=new userData()
var data_Route=express.Router()


// --------------------------INSERT_DATA--------------------------------------------
data_Route.post('/add',user_data.post_data)
// ----------------------------GET_DATA------------------------------------------------
data_Route.get('/getData',user_data.get_data)
// -------------------------------UPDATE_DATA------------------------------------------------
data_Route.post('/deleteData/:id',user_data.delete_data)
// ----------------------------------DELETE_DATA-------------------------------------------------
data_Route.post('/updateData/:id',user_data.update_data)
//----------------GET_SPECIFIC_USER---------------------------------------------------------
data_Route.get('/GET/USER/:id',user_data.get_user_Data)
module.exports = data_Route;