import React, { useEffect, useState } from 'react';
import axios from '../axios'; // Adjust the path as necessary
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BlogPosts.css';

const BlogPosts = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRtl = currentLang === 'ar';

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const imageBaseURL = 'http://192.168.124.180:5000/'; // Define the base URL for images

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/blogs');
        const latestPosts = response.data.slice(-3).reverse(); // Get the latest 3 posts
        setPosts(latestPosts);
      } catch (err) {
        setError(t('Error fetching blogs.'));
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [t]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border" role="status">
          <span className="sr-only">{t('Loading...')}</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger text-center my-5">{error}</div>;
  }

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
          <div className="col-md-4 mb-4" key={post._id}>
            <div className="card h-100">
              {post.images.length > 0 && (
                <img src={`${imageBaseURL}${post.images[0]}`} className="card-img-top" alt={post.title} />
              )}
              <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>{post.title}</h5>
                <p className="card-text" style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : 'Raleway, sans-serif' }}>
                  {post.content.substring(0, 100)}...
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{t('by')} {post.author} {t('on')} {new Date(post.createdAt).toLocaleDateString()}</small>
              </div>
              <Link to={`/blogs/${post._id}`} className="stretched-link"></Link>
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
