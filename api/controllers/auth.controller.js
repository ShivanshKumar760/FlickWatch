import User from "../models/user.model.js";
import genrateTokenAndSetCookie from "../utils/generateToken.js";
import bcrypt from "bcrypt";

const signUpController=(req,res)=>{
    const {body:{email,password,username}}=req;
    if (!email || !password || !username) 
    {
	    return res.status(400).json(
            { success: false, message: "All fields are required" }
        );
	};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: "Invalid email" });
    }

    if (password.length < 6) {
        return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
    }

    User.findOne({email:email}).then((user)=>{
        if(user){
            return res.status(400).json({ success: false, message: "Username already exists" });
        }

        else{
            const saltRound=10;
            const hashedPassword=bcrypt.hashSync(password,saltRound);

            const newUser=new User({
                email:email,
                password:hashedPassword,
                username:username
            });

            User.create(newUser).then((userCreated)=>{
                res.status(201).json({
                    success: true,
                    user: {
                        ...newUser._doc,
                        password: "",
                    },
                });
            }).catch((err)=>{
                console.log("Failed to create new user");
                console.log(err);
            })
            
        }
    }).catch((err)=>{
        console.log(err);
        console.log("Error Occured while creating the user");
    });

};


const loginUserController=(req,res)=>{
    const {body:{email,password}}=req;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    };


    User.findOne({email:email}).then((foundUser)=>{
        if (!foundUser) {
			return res.status(404).json({ success: false, message: "Invalid credentials" });
		}

        else{
            const isPasswordCorrect=bcrypt.compareSync(password,foundUser.password);
            if (!isPasswordCorrect) {
                return res.status(400).json({ success: false, message: "Invalid credentials" });
            };
            console.log(foundUser._id);
            genrateTokenAndSetCookie(foundUser._id,res);
            
            res.status(200).json({
                success: true,
                user: {
                    ...foundUser._doc,
                    password: "",
                },
            });
    
        }

    }).catch((err)=>{
        console.log(err);
        console.log("error in finding the user");
    });
};


const logoutUserController=async (req,res)=>{
    try {
		res.clearCookie("jwt-netflix");
		res.status(200).json({ success: true, message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ success: false, message: "Internal server error" });
	};
};

const authCheckUserController=async (req,res)=>{
    try{
        console.log("req.user:", req.user);
        res.status(200).json({ success: true, user: req.user });
    } 
    catch (error) {
        console.log("Error in authCheck controller", error.message);
        res.status(500).json({ success: false, message: "Internal server error" })
    };
};


export {signUpController,loginUserController,logoutUserController,authCheckUserController};