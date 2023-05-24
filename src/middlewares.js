import multer from "multer";

export const localsMiddlewares = (req, res, next)=>{
    //console.log(req.session);
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "Wetube";
    res.locals.loggedInUser = req.session.user || {};
    next();
}

export const protectorMiddleware = (req,res, next ) => {
    if(req.session.loggedIn){
        next()
    } else{
        req.flash("error", "Log in first.");
        return res.redirect("/login");
    }
}

export const publicOnlyMiddleware = (req,res,next)=> {
    if(!req.session.loggedIn){
        return next();
    } else{
        req.flash("error", "Not authorized");
        return res.redirect("/")
    }
}


export const avatarUpload = multer({
    dest: "uploads/avatars/",
    limits: {
      fileSize: 1000000 // 1MB in bytes
    }
  });
export const videoUpload = multer({
    dest:"uploads/videos/",
    limit: {
        fileSize: 3000000, // 3MB
    }
});