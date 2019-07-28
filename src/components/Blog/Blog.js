import React from 'react';
import './Blog.css';
import { ReactComponent as Shape } from './shape-pink.svg';
import blogLink from './blog-link.png';
import blogbars from './blog-bars.png';

const Blog = () => (
  <div className="Blog">
    <div className="Blog-header header">
      <Shape className="Blog-shape"></Shape>
      <h1>Blog</h1>
    </div>
    <div className="Blog-posts">
      <div className="Blog-post">
        <div className="Blog-post_img-wrap">
          <img className="Blog-post_img" src="" alt=""/>
        </div>
        <div className="Blog-post_content">
          <img src={blogbars} alt=""/>
          <h3 className="Blog-title">Blog Post One</h3>
          <p className="Blog-excerpt">This is the excerpt for the current blog post</p>
          <div className="Blog-post_meta">
            <span className="Blog-post_likes">
              <i className="fas fa-heart"></i>
              <p>10</p>
            </span>
            <a href="#" className="Blog-post_link">
              <i className="far fa-arrow-alt-circle-right"></i>
              <img src={blogLink} alt=""/>
            </a>
          </div>
        </div>
      </div>
      <div className="Blog-post">
        <div className="Blog-post_img-wrap">
          <img className="Blog-post_img" src="" alt=""/>
        </div>
        <div className="Blog-post_content">
          <img src={blogbars} alt=""/>
          <h3 className="Blog-title">Blog Post One</h3>
          <p className="Blog-excerpt">This is the excerpt for the current blog post</p>
          <div className="Blog-post_meta">
            <span className="Blog-post_likes">
              <i className="fas fa-heart"></i>
              <p>10</p>
            </span>
            <a href="#" className="Blog-post_link">
              <i className="far fa-arrow-alt-circle-right"></i>
              <img src={blogLink} alt=""/>
            </a>
          </div>
        </div>
      </div>
      <div className="Blog-post">
        <div className="Blog-post_img-wrap">
          <img className="Blog-post_img" src="" alt=""/>
        </div>
        <div className="Blog-post_content">
          <img src={blogbars} alt=""/>
          <h3 className="Blog-title">Blog Post One</h3>
          <p className="Blog-excerpt">This is the excerpt for the current blog post</p>
          <div className="Blog-post_meta">
            <span className="Blog-post_likes">
              <i className="fas fa-heart"></i>
              <p>10</p>
            </span>
            <a href="#" className="Blog-post_link">
              <i className="far fa-arrow-alt-circle-right"></i>
              <img src={blogLink} alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;