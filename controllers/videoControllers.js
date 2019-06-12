import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

export const home = async (req, res) =>{
    
    console.log("Hello world!");

    try{
        const videos = await Video.find({}).sort({ _id: -1});
        res.render("home", { pageTitle: "Home", videos});
    } catch(error){
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: []});
    
    }
};

export const search = (req, res) => {
    res.render("search", {pageTitle: "Search"});
};

export const getUpload = (req, res) => {
    console.log("Hello Upload");
    res.render("upload", {pageTitle: "Upload"});
};

export const postUpload = async (req, res) => {
    const {body, file} = req;
    console.log(body, file);
    res.render("upload", {pageTitle: "Upload"})
};


export const getEditVideo = (req, res) => {
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
   res.render("videoDetail", {pageTitle: "videoDetail"});
}


export const deleteVideo = (req, res) => {
    const { 
        params: { id }
    } = req; 
    res.redirect(routes.home);
}


