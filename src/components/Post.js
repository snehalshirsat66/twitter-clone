import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post-avatar">
          <Avatar src={avatar}></Avatar>
        </div>
        <div className="post-body">
          <div className="post-header">
            <div className="post-header-text">
              <h3>
                {displayName}
                <span className="post-header-special">
                  {verified && <VerifiedUserIcon className="post-badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post-header-description">
              <p>{text}</p>
            </div>
          </div>
          <img alt="post" src={image} />
          <div className="post-footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
