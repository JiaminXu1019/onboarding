import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

export default function Post({ title, author, body }) {
  return (
    <>
      <div className="bigdiv">
        <div className="header">Title:</div>
        <div className="div">
          {title}
        </div>
        <div className="header">Author:</div>
        <div className="div">
          {author}
        </div>
        <div className="header">Body:</div>
        <div className="div">
          {body}
        </div>
      </div>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,

};
