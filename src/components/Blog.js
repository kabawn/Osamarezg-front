import React, { useEffect, useState } from "react";
import axios from "../axios"; // Adjust the path as necessary
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Blog.css";

const Blog = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const imageBaseURL = 'http://192.168.124.180:5000/'; // Define the base URL for images

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/blogs");
        console.log(response.data); // Log the response data to verify
        setBlogs(response.data);
      } catch (err) {
        setError(t("Error fetching blogs."));
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [t]);

  if (loading) {
    return (
      <Container fluid className={`blog-section ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">{t("Loading...")}</span>
            </Spinner>
          </Col>
        </Row>
      </Container>
    );
  }

  if (error) {
    return (
      <Container fluid className={`blog-section ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <Alert variant="danger">{error}</Alert>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid className={`blog-section ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2 className="section-header">{t("DirectorBlog")}</h2>
          <p className="section-subheader">{t("Latest")}</p>
        </Col>
      </Row>
      <Row>
        {blogs.map((blog) => (
          <Col md={4} key={blog._id} className="mb-4">
            <Card className="blog-card">
              {blog.images.length > 0 && (
                <Card.Img variant="top" src={`${imageBaseURL}${blog.images[0]}`} alt={blog.title} />
              )}
              <Card.Body>
                <Card.Title className={currentLang === 'ar' ? 'rtl' : 'ltr'}>{blog.title}</Card.Title>
                <Card.Text className={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                  {blog.content.substring(0, 100)}...
                </Card.Text>
                <Button variant="primary" as={Link} to={`/blogs/${blog._id}`}>
                  {t("readmore")}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
