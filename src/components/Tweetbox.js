import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "./Tweetbox.css";
import db from "../firebase";

function Tweetbox() {
  const [tweetMsg, setTweetMsg] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    // * Code for firebase
    // db.collection("posts").add({
    //   displayname: "Tanvi Shirsat",
    //   username: "tanvi66",
    //   verified: true,
    //   text: tweetMsg,
    //   image: tweetImage,
    //   avatar:
    //     "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    // });

    
    setTweetMsg('')
    setTweetImage('')
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox-input">
          <Avatar src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Avatar>
          <input
            value={tweetMsg}
            placeholder="What's happening"
            type="text"
            onChange={(e) => setTweetMsg(e.target.value)}
          />
        </div>
        <input
          value={tweetImage}
          className="tweetbox-image-input"
          type="text"
          placeholder="Optional : Enter img URL"
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetbox-btn-tweet"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
