import passport from "passport";
import routes from "../routes";
import User from "../models/User";
import { runInNewContext } from "vm";

export const getJoin = (req, res) => res.render("join");
export const postJoin = async (req, res, next) => {
    const {
        body: { name, email, password, password2 } 
    } = req;
    if( password !== password2 ){
        res.status(400);
        res.render("/join", {pageTitle: "Join"})
    }
    else{
        try{
        const user = await User.create({
        name,
        email,
        });

        await User.register(user, password);
        next();
        } catch(error){
            console.log(error);
            res.redirect(routes.home);
        }

    }
};

export const getLogin = (req, res) => res.render("login");
export const postLogin = (req, res) => passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home
});
 
export const userDetail = async (req, res) => {
    try {
        res.render("userDetail", { pageTitle: "User Detail"});
    } catch(error){
        res.redirect(routes.home);
    }
};


export const getEditProfile = (req, res) => 
    res.render("editProfile", { pageTitle: "Edit Profile"});


export const getChangePassword = (req, res) => 
    res.render("changepassword", { pageTitle: "Change Password"});    


export const logout = (req, res) => {
    res.redirect(routes.home);
};