import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Post({ prepend }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `The current count is ${counter}`;
  }, [counter]);
  return (
    <>
      <div>
        {prepend + counter}
      </div>
      <button
        type="button"
        onClick={() => { setCounter(counter + 1); }}
      >
        Click me!
      </button>
    </>
  );
}

Post.propTypes = {
  prepend: PropTypes.string.isRequired,
};
