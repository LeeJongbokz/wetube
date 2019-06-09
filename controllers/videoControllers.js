import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

export const home = (req, res) =>{
  res.render("home", {pageTitle: "Home" });
};

export const search = (req, res) => {
    const{
        query: { term: searchingBy}
    } = req;
    res.render("search", {pageTitle: "Search"});
};

export const getUpload = (req, res) => {
    res.render("upload", {pageTitle: "Upload"});
};

export const postUpload = async (req, res) => {
    const {body, file} = req;
    console.log(body, file);
    res.render("upload", {pageTitle: "Upload"})
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
   res.render("videoDetail", {pageTitle: "videoDetail"});
    
}


export const deleteVideo = (req, res) => {
    const { 
        params: { id }
    } = req; 
    res.redirect(routes.home);
}


