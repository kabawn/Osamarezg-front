import React, { useEffect, useState } from "react";
import axios from "../axios"; // Adjust the path as necessary
import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./BlogDetails.css";

const BlogDetails = () => {
   const { id } = useParams();
   const { t, i18n } = useTranslation();
   const [blog, setBlog] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const imageBaseURL = "https://osamarezg.com/"; // Define the base URL for images

   useEffect(() => {
      const fetchBlog = async () => {
         try {
            const response = await axios.get(`/blogs/${id}`);
            setBlog(response.data);
         } catch (err) {
            setError(t("Error fetching blog."));
         } finally {
            setLoading(false);
         }
      };

      fetchBlog();
   }, [id, t]);

   const isArabic = (text) => {
      const arabicChar = /[\u0600-\u06FF]/;
      return arabicChar.test(text);
   };

   if (loading) {
      return (
         <Container fluid className="blog-details-section">
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
         <Container fluid className="blog-details-section">
            <Row className="justify-content-center">
               <Col md={8} className="text-center">
                  <Alert variant="danger">{error}</Alert>
               </Col>
            </Row>
         </Container>
      );
   }

   return (
      <Container fluid className="blog-details-section">
         {blog && (
            <>
               
               <Row className="justify-content-center">
                  <Col md={8}>
                     {blog.images.length > 0 && (
                        <img
                           src={`${imageBaseURL}${blog.images[0]}`}
                           alt={blog.title}
                           className="blog-details-image"
                        />
                     )}

<Row className="justify-content-center">
                  <Col md={8} className="text-center">
                     <h2 className="section-header">{blog.title}</h2>
                     <p className="section-subheader">{blog.author}</p>
                  </Col>
               </Row>
                     <div className="blog-details-content">
                        {blog.content.split('\n').map((paragraph, idx) => (
                           <p
                              key={idx}
                              dir={isArabic(paragraph) ? "rtl" : "ltr"}
                              className={isArabic(paragraph) ? "rtl" : "ltr"}
                           >
                              {paragraph}
                           </p>
                        ))}
                     </div>
                  </Col>
               </Row>
            </>
         )}
      </Container>
   );
};

export default BlogDetails;
