import User from '../modules/User.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
export const register = async(req, res) =>{
    try {
        // const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync(req.body.password, salt);
        console.log(req.body)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        await newUser.save()
        res.status(200).send("user has been created")
    } catch (err) {
        console.error(err)
    }
}

export const login = async(req, res) =>{
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return next(createError(404, "User not found!"))
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return next(createError(400, "Wrong password or username!"))
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT)
        const {password, isAdmin, ...otherDetails} = user._doc;
        res.cookie("access_token", token,{httpOnly: true,}).status(200).json({...otherDetails})
    } catch (err) {
        console.log("error in try block", err)
    }
}
   