var User_Data=require("../models/users")

class userData
{
    // ----------------------POST_USER_DATA------------------------------------------
    async post_data(req,res)
    {
        var { first_name, last_name, email,gender}=req.body
        console.log("post_Data===================>",first_name,last_name,email,gender)
        var data_user=new User_Data({
            first_name:first_name,
            last_name:last_name,
            email:email,
            gender:gender
        })
        data_user.save()
        .then((data)=>{
            console.log(data)
         return   res.status(200).json({USER_DATA:data})
        })
        .catch((error)=>{
         return   res.status(400).json({error:error})
        })
    }

    // ----------------------GET_USER_DATA-----------------------------------------------

    async get_data(req,res)
    {
      var data=await User_Data.find()
            console.log("getData",data)
            return res.status(200).json({ data: data });
    
    }

    // -------------------------------Delete_USER_DATA----------------------------------------
    async delete_data(req,res) { 
        let id = req.params.id;

        let result = await User_Data.deleteOne({ _id: id });
        console.log("deleted data",result)
        return res.status(200).json({ message:"DELETED" });
    }


    // -------------------------Update_user_data---------------------------------------------------
    async update_data(req,res)
    {
        let id = req.params.id;
        let body = req.body;
        let result = await User_Data.findOneAndUpdate(
            { _id: id },
            { $set: body },
            { new: true }
          );
          console.log("updat data",result)
          return res.status(200).json({ data:result });
    }

// ----------------------------------get_specific_user----------------------------------------------
    async get_user_Data(req,res)
    {
        let id=req.params.id
        var data=await User_Data.find({_id:id})
        console.log("getData",data)
        return res.status(200).json({ data: data });
    }
    
}

module.exports = userData;