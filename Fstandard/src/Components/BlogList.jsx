import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Style/BlogList.css';

function BlogList({ refreshTrigger }) {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    axios
      .get(`http://localhost:5007/api/blogs?page=${currentPage}&limit=${postsPerPage}`)
      .then(res => {
        // ✅ Make sure you're accessing `res.data.blogs` and `res.data.totalPages`
        const { blogs, totalPages } = res.data;

        setBlogs(blogs || []);
        setTotalPages(totalPages || 1);
      })
      .catch(err => {
        console.error("Failed to fetch blogs:", err);
        setBlogs([]);
      });
  }, [refreshTrigger, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="blog-list">
      {blogs.map(blog => {
        const blogDate = new Date(blog.date).toLocaleString();
        return (
          <div className="blog-card" key={blog._id}>
            <h2>{blog.title}</h2>
            <p><i>{blog.author}</i></p>
           
            {blog.imageUrl && (
              <img src={`http://localhost:5007${blog.imageUrl}`} alt="Blog" />
            )}
             <p className="blog-date"><b>Posted :</b>{blogDate}</p> 
            <p>{blog.content}</p>
          </div>
        );
      })}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            ⬅ Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? 'active' : ''}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogList;
