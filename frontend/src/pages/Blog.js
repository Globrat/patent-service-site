import React, { useEffect, useState } from 'react';
import '../styles.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <div>
      <section className="section">
        <h1>Blog</h1>
        {posts.length === 0 ? (
          <p>No blog posts available.</p>
        ) : (
          posts.map(post => (
            <div key={post._id} style={{ marginBottom: '2rem' }}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Blog;
