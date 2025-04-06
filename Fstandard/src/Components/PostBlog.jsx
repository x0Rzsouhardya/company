import React from 'react';
import BlogForm from '../Components/BlogForm';

function PostBlog() {
  const refresh = () => {}; // placeholder if you want to refresh somewhere

  return (
    <div>
      <h1>Create a New Blog Post</h1>
      <a href="/">← Back to Blogs</a>
      <BlogForm refresh={refresh} />
    </div>
  );
}

export default PostBlog;
