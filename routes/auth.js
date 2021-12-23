const router = require('express').Router();

const User = require('../model/User');


router.post('/register',async (req,res)=>{
const user= new User(req.body);

const userr = await user.save()
res.send(userr);

});
module.exports = router;
