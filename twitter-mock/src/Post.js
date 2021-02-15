import React from 'react';
import "./Post.css"
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/core/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/core/ChatBubbleOutline";
import RepeatIcon from "@material-ui/core/Repeat";
import FavoriteBorderIcon from "@material-ui/core/FavoriteBorder";
import PublishIcon from "@material-ui/core/Publish";

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}){
    return (
        <div className="post">
           <div className="postAvatar">
               <Avatar src="#"></Avatar>
               </div>
               <div className="post_body">
                   <div className="post_header">
                       <div className="post_headerText">
                           <h3>
                               Rafeh Qazi <span className="headerSpecial">
                                   <VerifiedUserIcon className="postBadge"></VerifiedUserIcon>
                               </span>
                           </h3>
                       </div>
                       <div className="post_Headerdescription">
                           <p>I challenge you to build a Twitter Clone with React</p>
                       </div>
                   </div>
                   <img src="#"></img>
                   <div className="postFooter">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                   </div>
                   </div> 
        </div>
    );
};

export default Post;