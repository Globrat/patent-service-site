import React, { useEffect, useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching blogs:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blog-container">
      <h1>Our Blog</h1>
      {loading ? (
        <p>Loading articles...</p>
      ) : blogs.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <h2>{blog.title}</h2>
            <p className="blog-date">
              {new Date(blog.date || blog.createdAt).toLocaleDateString()}
            </p>
            <p>{blog.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
