const express=require('express')
const router=express.Router()
const customercontroller=require('./Customer/customerController')
const farmers=require('./Farmer/farmerController')
const krishi=require('./krishiBhavan/krishiController')
const product=require('./Farmer/prodController')


//customer routes
router.post('/registerCustomer',customercontroller.registerCustomer)
router.post('/loginCustomer',customercontroller.loginCustomer)
router.post('/editCustomerById/:id',customercontroller.editCustomerById)
router.post('/viewAllCustomers',customercontroller.viewCustomers)
router.post('/viewCustomerById/:id',customercontroller.viewCustomerById)
router.post('/forgotpwdCustomer',customercontroller.forgotPwd)
router.post('/deleteCustomerById/:id',customercontroller.deleteCustomerById)




//farmer routes
router.post('/registerFarmer',farmers.registerFarmer)
router.post('/loginFarmer',farmers.loginFarmer)
router.post('/editFarmerById/:id',farmers.editFarmerById)
router.post('/viewAllFarmers',farmers.viewFarmers)
router.post('/viewFarmerById/:id',farmers.viewFarmerById)
router.post('/deleteFarmerById/:id',farmers.deleteFarmerById)
router.post('/forgotPwdFarmer',farmers.forgotPwd)



 
//krishi routes
router.post('/registerkrishi',krishi.registerKBhavan)
router.post('/loginkrishi',krishi.loginKBhavan)
router.post('/editkrishiById/:id',krishi.editKBhavanById)
router.post('/viewAllkrishi',krishi.viewKBhavans)
router.post('/viewkrishiById/:id',krishi.viewKBhavanById)
router.post('/deletekrishiById/:id',krishi.deleteKBhavanById)
router.post('/forgotPwdkrishi',krishi.forgotPwd)
router.post('/approveFarmer/:id',krishi.Approvefarmer)
router.post('/viewFarmerReqs/:id',krishi.viewFarmerRequests)


//product routes
router.post('/addProduct',product.upload,product.addproduct)
router.post('/editProductById/:id',product.upload,product.editproduct)
router.post('/viewAllProduct',product.displayproduct)
router.post('/viewProductById/:id',product.getproductbyid)
router.post('/deleteProductById/:id',product.deleteproduct)
router.post('/viewProductByFarmerId/:farm_id',product.displayproductByFarmId)
router.post('/addRating/:id',product.addRating)







module.exports=router
