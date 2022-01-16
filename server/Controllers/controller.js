// ==============User Schema Imported==========
import User from "../Modules/UserSchema.js";

// ======== Import JWT Web Token==========
import jwt from "jsonwebtoken";

// ==========bcrypt for password matching========
import bcrypt from 'bcryptjs';


// ==========Home Get Route=========
    export const Home = (req, res)=>{
        res.status(200).send("Home Page Of Node Js Server");
    }
// =====X===Home Get Route===X=======

// ===========Registeration==========

    export const registration = async (req, res)=>{
        // ========Get Registration Details======
        const {firstname, lastname, email, phone, address, password} = req.body;

        // ==========Validate All Fields enter or not========
        if(!firstname || !lastname || !email || !phone || !address || !password){
            res.status(422).json({message: "Please Enter All Fields Properly !"});
        }

        // =========Registration Proccess==========
        try{
            // ========Cheack User Exist Or Not===========
            const userExist = await User.findOne({ email: email });

            if(userExist){
                res.status(422).json({message: "An account with this email already exists."});
            }else{
                const user = new User({firstname, lastname, email, phone, address, password});
                await user.save();
                res.status(201).json({message:"Your Registraion Successfully, Thank You For Registeration Please Login Now !"});
            }
        }catch(e){
            console.log(e.message);
        }
    }

// =======X===Registeration===X=======

// =============Login==============
    export const login = async (req, res)=>{
        try{    
        // ========email and password from user=======
            const { email, password } = req.body;

            // ========Cheack filed is not empty=======
            if(!email || !password){
                res.status(422).json({message: "Please Enter All Fields Properly !"});
            }

            // ==========Match Email id exist or not===========
            const login = await User.findOne({
                email: email,
            });

            // ===========Email Id Exist Then Cheack Password=========
            if(login){
                // ==========Compare Bycript Password Here========
                const isMatch = await bcrypt.compare(password, login.password);
                // =============Cheack Password Here=============
                if(isMatch){
                    const token = jwt.sign({ id: email._id }, 'merndevelopmentassignmentinternship');
                    res.status(200).json(
                        {
                            message: "Your Login Successfuly, Thank You For Login !", 
                            token: token, 
                            user: login
                        });
                }else{
                    res.status(422).json({message: "Your Login credential is wrong Please Check and try again later!"});
                }
            }else{
                res.status(422).json({message: "Your Not Register Please First Register !"});
            }
        }catch(e){
            console.log(e.message);
        }
    }

// ==========X===Login===X===========