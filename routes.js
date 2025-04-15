import express from "express";

const router = express.Router();

router.post("/users",async(req,res) => {
    try{
        const{email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields required"});
        }
        return res.status(200).json({message:"created successfully"});
    } catch (err) {
        return res.status(500).json({message:"Internal server error"})
    }
    
});

router.get("/users",async(req,res) => {
    try{
        return res.status(200).json({message:"All are fetched"});
    } catch (err) {
        return res.status(500).json({message:"Internal server error"});
    }
});

router.put('/user/:id', async(req, res) => {
    const{ email , password } = req.body;
    try{
        const user = await user.findByIdAndUpdate(
            req.params.id,
            {email ,password},
            {new: true, runValidators: true}
        );

        if(!user)
            return res.status(404).json({message:'email not found'});
        res.json({message:'User updated successfully', user});
    }catch(error){
        res.status(500).json({message: 'update failed', error: error.message});
    }
});

router.delete('/user/:id', async(req, res) => {
    try{
        const deleted = await User.findByIdAndDelete(req.params.id);
        if(!deleted)
            return res.status(404).json({message: 'email not found'})
        res.json({message: 'User deleted', user: deleted});
    }catch(err){
        res.status(500).json({message: 'delete failed'})
    }
});

export default router;