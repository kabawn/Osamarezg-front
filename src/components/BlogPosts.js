// src/components/BlogPosts.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BlogPosts.css';
import blogImage1 from '../assets/blog/blog1.png';
import blogImage2 from '../assets/blog/blog2.png';
import blogImage3 from '../assets/blog/blog3.png';

const BlogPosts = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRtl = currentLang === 'ar';

  const posts = [
    {
      id: 1,
      title: "Blog Post One",
      excerpt: "This is a short excerpt for the first blog post.",
      image: blogImage1, // Local image
      date: "July 21, 2024",
      author: "Author One",
    },
    {
      id: 2,
      title: "Blog Post Two",
      excerpt: "This is a short excerpt for the second blog post.",
      image: blogImage2, // Local image
      date: "July 22, 2024",
      author: "Author Two",
    },
    {
      id: 3,
      title: "Blog Post Three",
      excerpt: "This is a short excerpt for the third blog post.",
      image: blogImage3, // Local image
      date: "July 23, 2024",
      author: "Author Three",
    },
    // Add more posts as needed
  ];

  return (
    <div className="container my-5" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="intro text-center mb-5">
        <h1 style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>{t('blog')}</h1>
        <p style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>
          {t('blogIntro')}
        </p>
      </div>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card h-100">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>{post.title}</h5>
                <p className="card-text" style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>{post.excerpt}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{t('by')} {post.author} {t('on')} {post.date}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <a href="/blog" className="btn button" style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>{t('seeMore')}</a>
      </div>
    </div>
  );
};

export default BlogPosts;
