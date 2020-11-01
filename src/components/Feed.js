import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import Tweetbox from "./Tweetbox";
import FlipMove from "react-flip-move";
import db from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //** Code for firebase */
    // db.collection("posts").onSnapshot((snapshot) =>
    //   setPosts(snapshot.docs.map((doc) => doc.data())) );
    console.log(posts);
  }, []);

  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
      </div>
      <Tweetbox></Tweetbox>

      <FlipMove>
        {posts.map((post) => {
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />;
        })}
      </FlipMove>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
