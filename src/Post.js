import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ title, author, body }) {
  return (
    <>
      <div>
        Title:
        {title}
      </div>
      <div>
        Author:
        {author}
      </div>
      <div>
        Body:
        {body}
      </div>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,

};
