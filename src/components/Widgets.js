import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";

function Widgets() {
  return (
    <div className="widget">
      <div className="widget-input">
        <Search className="widget-searchicon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widget-container">
        <h2>What's Happening</h2>

        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Snehal"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "react js is awesome", via: "snehalshirsat66" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
