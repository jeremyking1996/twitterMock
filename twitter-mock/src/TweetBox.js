import React, { Component } from 'react';
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core';

function tweetbox() {
    return(
        <div className="tweetBox">
        <form>
            <div className="tweetBoxinput">
            <Avatar src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png&w=350&h=254">
            <input placeholder="What's happening?" type="text"></input>
            </Avatar>
            </div>
            <Button>Tweet</Button>
        </form>
            
        </div>
    );
}

export default tweetbox;