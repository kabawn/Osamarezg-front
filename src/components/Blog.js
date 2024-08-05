import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Blog.css";

import blogImage1 from "../assets/blog/blog1.png";
import blogImage2 from "../assets/blog/blog2.png";
import blogImage3 from "../assets/blog/blog3.png";
// Import more images as needed

const articles = [
  {
    id: 1,
    title: "Understanding the Art of Filmmaking",
    excerpt: "Discover the intricate process behind creating cinematic masterpieces...",
    link: "#",
    image: blogImage1,
  },
  {
    id: 2,
    title: "The Role of a Director in Film Production",
    excerpt: "A director plays a crucial role in the making of a film, from vision to execution...",
    link: "#",
    image: blogImage2,
  },
  {
    id: 3,
    title: "Exploring the History of Cinema",
    excerpt: "Join us as we take a journey through the fascinating history of cinema...",
    link: "#",
    image: blogImage3,
  },
  // Add more articles as needed
];

const Blog = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="blog-section">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2 className="section-header">{t("Director's Blog")}</h2>
          <p className="section-subheader">{t("Latest insights and articles from the director.")}</p>
        </Col>
      </Row>
      <Row>
        {articles.map((article) => (
          <Col md={4} key={article.id} className="mb-4">
            <Card className="blog-card">
              <Card.Img variant="top" src={article.image} alt={article.title} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.excerpt}</Card.Text>
                <Button variant="primar" href={article.link}>
                  {t("Read More")}
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
