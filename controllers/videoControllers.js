import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

export const home = async (req, res) =>{
    try{    
    const videos = await Video.find({});
    throw Error("lalal");
    res.render("home", { pageTitle: "Home", videos});
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", video: []});
    }
};

export const search = (req, res) => { res.render("Search"), {pageTitle: "Search"}};

export const getUpload = (req, res) => {
    res.render("upload", {pageTitle: "Upload"});
};

export const postUpload = (req, res) => {
   const { body } = req;
   console.log(body);
   res.render("upload", {pageTitle: "Upload"});
};


export const getEditVideo = (req, res) => {
    const {
        params: { id }
    } = req;

    res.render("editVideo", {pageTitle: "Edit", video})
}

export const postEditVideo = (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;    

    res.redirect(routes.home);
}

export const videoDetail = (req, res) => {
    res.render("videoDetail", {pageTitle: "Video Detail"});
}


export const deleteVideo = (req, res) => {
    const { 
        params: { id }
    } = req; 
    res.redirect(routes.home);
}


