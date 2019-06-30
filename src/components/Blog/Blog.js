import React from 'react';
import './Blog.css';
import { ReactComponent as Shape } from './shape-pink.svg';

const Blog = () => (
  <div className="Blog">
    <div className="Blog-header header">
      <Shape className="Blog-shape"></Shape>
      <h1>Blog</h1>
    </div>
    <div className="Blog-blog-post-wrap">
      <div className="Blog-post">
        <div className="Blog-post__img-wrap"></div>
        <div className="Blog-post__content-wrap">
          <h3 className="Blog-title">Blog Post One</h3>
          <p className="Blog-excerpt">This is the excerpt for the blog</p>
          <span className="Blog-likes"></span>
          <a href="#" className="Blog-link">
            <i className="fas fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
      <div className="Blog-post">
        <div className="Blog-post__img-wrap"></div>
        <div className="Blog-post__content-wrap">
          <h3 className="Blog-title">Blog Post Two</h3>
          <p className="Blog-excerpt">This is the excerpt for the blog</p>
          <span className="Blog-likes"></span>
          <a href="#" className="Blog-link">
            <i className="fas fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
      <div className="Blog-post">
        <div className="Blog-post__img-wrap"></div>
        <div className="Blog-post__content-wrap">
          <h3 className="Blog-title">Blog Post Three</h3>
          <p className="Blog-excerpt">This is the excerpt for the blog</p>
          <span className="Blog-likes"></span>
          <a href="#" className="Blog-link">
            <i className="fas fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
      <div className="Blog-post">
        <div className="Blog-post__img-wrap"></div>
        <div className="Blog-post__content-wrap">
          <h3 className="Blog-title">Blog Post Four</h3>
          <p className="Blog-excerpt">This is the excerpt for the blog</p>
          <span className="Blog-likes"></span>
          <a href="#" className="Blog-link">
            <i className="fas fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;