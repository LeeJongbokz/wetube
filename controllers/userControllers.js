import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => res.render("join");
export const postJoin = async (req, res) => {
    const {
        body: { name, email, password, password2 } 
    } = req;
    if( password !== password2 ){
        res.status(400);
        res.render("join", {pageTitle: "Join"})
    }
    else{
        try{
        const user = await User.create({
        name,
        email,

        });

        await User.register(user, password);
        } catch(error){
            console.log(error)
        }

        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) => res.render("login");
export const postLogin = (req, res) => res.render("login");
 
export const userDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        res.render("userDetail", { pageTitle: "User Detail", user});
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