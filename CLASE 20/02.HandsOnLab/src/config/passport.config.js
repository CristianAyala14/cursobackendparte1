import passport from "passport";
import local from "passport-local";
import userModel from "../models/userModel.js";
import {createHash, validatePassword} from "../utils.js";

const localStrategy = local.Strategy;
const inicializePassport = ()=>{
    //estrategia
    //register
    passport.use("register", new localStrategy(
        //1
        {passReqToCallback: true, usernameField: "email"},
        //2
        async ( req, username, password, done ) =>{
            const {first_name, last_name, email, age} = req.body;
            try {
                let user = await userModel.findOne({email: username})
                if(user){
                    console.log("usuario ya registrado")
                    return done (null, false)
                }
                const newUser = {
                    first_name,
                    last_name,
                    email,
                    age,
                    password: createHash(password)
                }
                const result = await userModel.create(newUser)
                return done (null,result)
            } catch (error) {
                return done (error)
            }
        }
    ));
    //login
    passport.use("login", new localStrategy(
    {usernameField:"email"},
    async(username, password, done)=>{
        try {
            const user = await userModel.findOne({email: username})
            if(!user){
                return done(null, false);
            }
            if(!validatePassword(password,user)){
                return done (null,false);
            } 
            return done (null, user)
        } catch (error) {
            return done (error)
        }
    }));
    
    
    
    passport.serializeUser((user, done)=>{
        done(null, user._id)
    });
    //
    passport.deserializeUser(async (id, done)=>{
        let user = await userModel.findById(id);
        done(null, user);
    });
}

export default inicializePassport;