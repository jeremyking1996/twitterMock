import React from 'react';
import "./Widgets.css"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@material-ui/core/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgetsInput">
                <SearchIcon className="widgetsSearch" />
                <input placeholder="Search Twitter" type="text"></input>
            </div>
        <div className="widgetsContainer">
            <h2>What's Happening?</h2>
            <TwitterTweetEmbed tweetId={"858551177860055040"} />
            <TwitterShareButton 
            sourceType="profile" 
            screenName="jermdaking" 
            options={{height: 400}}
            /> 
            
        </div>
        </div>
    );
}

export default Widgets;