import React from 'react';
// import faker from 'faker';

const CommentDetail = (props) => {
  const propT = props;
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={propT.avatar}></img>
      </a>
      <div className="content">
        <a href="/" className="author">
          {propT.author}
        </a>
      </div>
      <div className="metadata">
        <span className="date">Today at 6:00PM</span>
      </div>
      <div className="text">Nice Blog Post</div>
    </div>
  );
};

export default CommentDetail;
