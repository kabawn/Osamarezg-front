import React, { useEffect, useState } from "react";
import axios from "../axios"; // Adjust the path as necessary
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Blog.css";

const Blog = () => {
   const { t, i18n } = useTranslation();
   const currentLang = i18n.language;
   const isRtl = currentLang === "ar"; // Check if current language is RTL
   const [blogs, setBlogs] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const imageBaseURL = "https://osamarezg.com/"; // Define the base URL for images

   useEffect(() => {
      const fetchBlogs = async () => {
         try {
            const response = await axios.get("/blogs");

            // Sort blogs by the `createdAt` date in descending order
            const sortedBlogs = response.data.sort(
               (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );

            setBlogs(sortedBlogs);
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
         <Container fluid className={`blog-section ${isRtl ? "rtl" : "ltr"}`}>
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
         <Container fluid className={`blog-section ${isRtl ? "rtl" : "ltr"}`}>
            <Row className="justify-content-center">
               <Col md={8} className="text-center">
                  <Alert variant="danger">{error}</Alert>
               </Col>
            </Row>
         </Container>
      );
   }

   return (
      <Container fluid className={`blog-section ${isRtl ? "rtl" : "ltr"}`}>
         <Row className="justify-content-center">
            <Col md={8} className="text-center">
               <h2 className="section-header">{t("DirectorBlog")}</h2>
               <p className="section-subheader">{t("Latest")}</p>
            </Col>
         </Row>
         <Row>
            {blogs.map((blog, index) => (
               <Col
                  md={4}
                  key={blog._id}
                  // Apply 'order-md-last' to the most recent post in RTL mode (index 0)
                  className={`mb-4 ${isRtl && index === 1 ? "order-md-last" : ""}`}
               >
                  <Card className="blog-card h-100">
                     {blog.images.length > 0 && (
                        <Card.Img
                           variant="top"
                           src={`${imageBaseURL}${blog.images[0]}`}
                           alt={blog.title}
                        />
                     )}
                     <Card.Body>
                        <Card.Title className={isRtl ? "rtl" : "ltr"}>
                           {blog.title}
                        </Card.Title>
                        <Card.Text className={isRtl ? "rtl" : "ltr"}>
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
