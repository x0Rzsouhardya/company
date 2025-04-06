import React, { useState } from 'react'
import "../style/Blog.css"
import BlogList from './BlogList';

const Blog = () => {
  const [refresh, setRefresh] = useState(false);
  return (
  <>
  <section className="blogPage">
  <h1>📰 F Standard Blog</h1>
  <p className="intro">
    Explore the latest updates, innovations, and success stories behind our Employee Management System and smart workplace tools.
  </p>

  <a href="#/post">➕ Create New Blog</a>
      <BlogList refreshTrigger={refresh} />
</section>

  </>
  )
}

export default Blog