const jwt = require('jsonwebtoken')
const Partner = require('../models/models.js')
const {JWT_KEY}=require('../misc/keys.js')
//destructuring to get value at that key
const sessionController = {};
//checks if token is being passed in the current request, and if yes, fetch the associated user
//of that token and place the user in that request
//next is called because this is middleware that needs to be passed to the next middleware
sessionController.authenticate = async (req, res, next) =>{
//get value of the Authorization key in the header
//Authorization: Bearer XXXXXXXXXXX
//where XXXXXX is the JWT token
//replacing Bearer string with nothing, so we just get the token
try {
    const token = req.header('Authorization').replace('Bearer ','')
//will turn the string (in model.js line 43) back into an object
    const data = jwt.verify(token, JWT_KEY)
        const user = await Partner.findOne({_id: data._id, 'tokens.token': token})
        if (!user){
            throw new Error()
        }
        //next middleware will want access to user and token
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({error: 'Not authorized to access this resource'})
    }
}
module.exports = sessionController;
