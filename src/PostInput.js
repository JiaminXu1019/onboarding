import React, { useState } from 'react';
import firebase from 'firebase';

export default function PostInput() {
  const [post, setPost] = useState({
    title: '',
    body: '',
    author: '',
  });

  function addToFirebase() {
    firebase.firestore().collection('posts').add(post);
  }

  return (
    <>
      <div className="bigdiv2">
        New Post
        <div className="header">
          Title
        </div>
        <div>
          <input className="div" onChange={(e) => setPost({ ...post, title: e.target.value })} />
        </div>
        <div className="header">
          Body
        </div>
        <div>
          <input className="div" onChange={(e) => setPost({ ...post, body: e.target.value })} />
        </div>
        <div className="header">
          Author
        </div>
        <div>
          <input className="div" onChange={(e) => setPost({ ...post, author: e.target.value })} />
        </div>
        <div>
          <button type="button" onClick={() => { addToFirebase(); }}>Submit</button>
        </div>
      </div>

    </>
  );
}
