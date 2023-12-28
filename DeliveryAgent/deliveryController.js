const deliverySchema=require('./deliveryAgentSchema')

const registerDriver=(req,res)=>{

      const newDriver=new deliverySchema({
          name:req.body.name,
          gender:req.body.gender,
          location:req.body.location,
          licence:req.file,
          contact:req.body.contact,
          email:req.body.email,
          password:req.body.password
      })
      newDriver.save().then(data=>{
          res.json({
              status:200,
              msg:"Inserted successfully",
              data:data
          })
      }).catch(err=>{
          res.json({
              status:500,
              msg:"Data not Inserted",
              Error:err
          })
      })
  }
  //Driver Registration -- finished
  
  
  
  //View all Drivers
  
  const viewDrivers=(req,res)=>{
      deliverySchema.find().exec()
      .then(data=>{
        if(data.length>0){
        res.json({
            status:200,
            msg:"Data obtained successfully",
            data:data
        })
      }else{
        res.json({
          status:200,
          msg:"No Data obtained "
      })
      }
    }).catch(err=>{
        res.json({
            status:500,
            msg:"Data not Inserted",
            Error:err
        })
    })
    
    }
    
    // view drivers finished
    
    
    //View  driver by id
    
    const viewDriverById=(req,res)=>{
      deliverySchema.findById({_id:req.params.id}).exec()
      .then(data=>{
        
        res.json({
            status:200,
            msg:"Data obtained successfully",
            data:data
        })
      
    }).catch(err=>{
        res.json({
            status:500,
            msg:"Data not Inserted",
            Error:err
        })
    })
    
    }
    
    // view Drivers finished
   //update Drivers by id
   const editDriverById=(req,res)=>{
      
    drivers.findByIdAndUpdate({_id:req.params.id},
        {
            name:req.body.name,
            gender:req.body.gender,
            location:req.body.location,
            licence:req.file,
            contact:req.body.contact,
            email:req.body.email,
      })
  .exec().then(data=>{
    res.json({
        status:200,
        msg:"Updated successfully"
    })
  }).catch(err=>{
    res.json({
        status:500,
        msg:"Data not Updated",
        Error:err
    })
  })
  }
  //accept Drivers by id
  const acceptorderbyDriverId=async(req,res)=>{
  }
  
   // del drivers by id
   const deleteDriverById=(req,res)=>{
    deliverySchema.findByIdAndDelete({_id:req.params.id}).exec()
    .then(data=>{
      
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    
  }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not Inserted",
          Error:err
      })
  })
  
  }

//Login
const loginDriver = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    deliverySchema
      .findOne({ email: email })
      .exec()
      .then((data) => {
        if (password == data.password) {
          res.json({
            status: 200,
            msg: "Login successfully",
            data: data,
          });
        } else {
          res.json({
            status: 500,
            msg: "password Mismatch",
          });
        }
      })
      .catch((err) => {
        res.json({
          status: 500,
          msg: "User not found",
          Error: err,
        });
      });
  };
  
  //Login  --finished
//View all orders for drivers
  
  const viewPendingOrdesForDrivers=(req,res)=>{
    deliveryOrders.find({mid:req.params.id,driverstatus:"pending"}).exec()
    .then(data=>{
      
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    
  }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not Inserted",
          Error:err
      })
  })
  
  }
  
  const viewAcceptedOrders=(req,res)=>{
    locationupdates.find({driverid:req.params.id,isactive:true}).populate('orderid').exec()
    .then(data=>{
      
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    
  }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not Inserted",
          Error:err
      })
  })
  }

  module.exports={
    registerDriver,
    loginDriver,
    viewDriverById,
    viewDrivers,
    editDriverById,
    deleteDriverById
}