import React, { useEffect, useState } from "react";
import axios from "../axios"; // Adjust the path as necessary
import { Container, Alert, Tabs, Tab, Form, Card, Row, Col, Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../assets/herodirector.jpg"; // Ensure you have this image in the correct path
import "./AdminPage.css"; // Import the CSS file for custom styling
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const HeroSection = styled.div`
   background-image: url(${heroImage});
   background-size: cover;
   background-position: center;
   color: white;
   padding: 60px 0;
   text-align: center;
   position: relative;
   margin-bottom: 20px;
`;

const Overlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
   position: relative;
   z-index: 1;
`;

const AdminPage = () => {
   const { t, i18n } = useTranslation();
   const currentLang = i18n.language;
   const isRtl = currentLang === "ar";
   const navigate = useNavigate(); // Use useNavigate instead of useHistory

   const [castings, setCastings] = useState([]);
   const [scripts, setScripts] = useState([]);
   const [blogs, setBlogs] = useState([]);
   const [errorMessage, setErrorMessage] = useState("");
   const [searchTerm, setSearchTerm] = useState("");
   const [selectedActor, setSelectedActor] = useState(null);
   const [selectedScript, setSelectedScript] = useState(null);
   const [selectedBlog, setSelectedBlog] = useState(null);
   const [filterGender, setFilterGender] = useState("");
   const [filterNationality, setFilterNationality] = useState("");
   const [filterMinAge, setFilterMinAge] = useState("");
   const [filterMaxAge, setFilterMaxAge] = useState("");
   const [lightboxImage, setLightboxImage] = useState(null);
   const [blogForm, setBlogForm] = useState({ title: "", content: "", author: "", images: [] });
   const [showBlogModal, setShowBlogModal] = useState(false);
   const [isEditingBlog, setIsEditingBlog] = useState(false);
   const [showDeleteModal, setShowDeleteModal] = useState(false); // New state for delete confirmation
   const [castingToDelete, setCastingToDelete] = useState(null); // New state to store the casting to be deleted

   const handleLogout = () => {
      localStorage.removeItem("token"); // Remove the token
      navigate("/login"); // Use navigate instead of history.push
   };

   useEffect(() => {
      const fetchCastings = async () => {
         const token = localStorage.getItem("token"); // Assume the token is stored in localStorage
         if (!token) {
            setErrorMessage("You are not authorized to view this page.");
            return;
         }

         try {
            const response = await axios.get("/castings", {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            setCastings(response.data);
         } catch (error) {
            setErrorMessage("Error fetching casting data.");
         }
      };

      const fetchScripts = async () => {
         const token = localStorage.getItem("token"); // Assume the token is stored in localStorage
         if (!token) {
            setErrorMessage("You are not authorized to view this page.");
            return;
         }

         try {
            const response = await axios.get("/scripts", {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            setScripts(response.data);
         } catch (error) {
            setErrorMessage("Error fetching script data.");
         }
      };

      const fetchBlogs = async () => {
         const token = localStorage.getItem("token"); // Assume the token is stored in localStorage
         if (!token) {
            setErrorMessage("You are not authorized to view this page.");
            return;
         }

         try {
            const response = await axios.get("/blogs", {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            setBlogs(response.data);
         } catch (error) {
            setErrorMessage("Error fetching blog data.");
         }
      };

      fetchCastings();
      fetchScripts();
      fetchBlogs();
   }, []);

   const handleSearch = (e) => {
      setSearchTerm(e.target.value);
   };

   const handleActorClick = (actor) => {
      setSelectedActor(actor);
   };

   const handleScriptClick = (script) => {
      setSelectedScript(script);
   };

   const handleBlogClick = (blog) => {
      setSelectedBlog(blog);
      setBlogForm({ title: blog.title, content: blog.content, author: blog.author, images: [] });
      setIsEditingBlog(true);
      setShowBlogModal(true);
   };

   const handleClose = () => {
      setSelectedActor(null);
      setSelectedScript(null);
      setSelectedBlog(null);
      setShowBlogModal(false);
      setIsEditingBlog(false);
   };

   const handleLightboxClose = () => {
      setLightboxImage(null);
   };

   const getMediaUrl = (path) => {
      return `${axios.defaults.baseURL.replace("/api", "")}/${path}`;
   };

   const filteredCastings = castings.filter((casting) => {
      const matchesName = casting.fullName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGender = filterGender ? casting.gender === filterGender : true;
      const matchesNationality = filterNationality
         ? casting.nationality.toLowerCase().includes(filterNationality.toLowerCase())
         : true;
      const matchesMinAge = filterMinAge ? casting.age >= filterMinAge : true;
      const matchesMaxAge = filterMaxAge ? casting.age <= filterMaxAge : true;

      return matchesName && matchesGender && matchesNationality && matchesMinAge && matchesMaxAge;
   });

   const handleBlogFormChange = (e) => {
      const { name, value, files } = e.target;
      if (name === "images") {
         setBlogForm({ ...blogForm, images: Array.from(files) });
      } else {
         setBlogForm({ ...blogForm, [name]: value });
      }
   };

   const handleBlogSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("title", blogForm.title);
      formData.append("content", blogForm.content);
      formData.append("author", blogForm.author);
      blogForm.images.forEach((image, index) => {
         formData.append(`images`, image);
      });

      try {
         const token = localStorage.getItem("token");
         const config = {
            headers: {
               Authorization: `Bearer ${token}`,
               "Content-Type": "multipart/form-data",
            },
         };

         if (isEditingBlog) {
            await axios.put(`/blogs/${selectedBlog._id}`, formData, config);
         } else {
            await axios.post("/blogs", formData, config);
         }

         setBlogForm({ title: "", content: "", author: "", images: [] });
         handleClose();
         // Refresh blogs list
         const response = await axios.get("/blogs", config);
         setBlogs(response.data);
      } catch (error) {
         setErrorMessage("Error submitting blog post.");
      }
   };

   const handleBlogDelete = async (blogId) => {
      try {
         const token = localStorage.getItem("token");
         await axios.delete(`/blogs/${blogId}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         // Refresh blogs list
         const response = await axios.get("/blogs", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         setBlogs(response.data);
      } catch (error) {
         setErrorMessage("Error deleting blog post.");
      }
   };

   // New functions for handling casting deletion
   const handleCastingDeleteClick = (casting) => {
      setCastingToDelete(casting);
      setShowDeleteModal(true);
   };

   const confirmDeleteCasting = async () => {
      try {
         const token = localStorage.getItem("token");
         await axios.delete(`/castings/${castingToDelete._id}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         setCastings(castings.filter((casting) => casting._id !== castingToDelete._id));
         setShowDeleteModal(false);
         setCastingToDelete(null);
      } catch (error) {
         setErrorMessage("Error deleting casting request.");
      }
   };

   return (
      <>
         <HeroSection>
            <Overlay />
            <HeroContent>
               <h1 className="herotext">Director Dashboard</h1>
               <p>Manage casting requests and scripts</p>
               <Button variant="danger" onClick={handleLogout}>
                  Logout
               </Button>{" "}
               {/* Add the Logout button here */}
            </HeroContent>
         </HeroSection>
         <Container className={isRtl ? "rtl" : "ltr"}>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form className="mb-4">
               <Row>
                  <Col md={3}>
                     <Form.Control
                        type="text"
                        placeholder="Search by actor's name..."
                        value={searchTerm}
                        onChange={handleSearch}
                     />
                  </Col>
                  <Col md={2}>
                     <Form.Control
                        as="select"
                        value={filterGender}
                        onChange={(e) => setFilterGender(e.target.value)}
                     >
                        <option value="">All Genders</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                     </Form.Control>
                  </Col>
                  <Col md={3}>
                     <Form.Control
                        type="text"
                        placeholder="Filter by nationality"
                        value={filterNationality}
                        onChange={(e) => setFilterNationality(e.target.value)}
                     />
                  </Col>
                  <Col md={2}>
                     <Form.Control
                        type="number"
                        placeholder="Min age"
                        value={filterMinAge}
                        onChange={(e) => setFilterMinAge(e.target.value)}
                     />
                  </Col>
                  <Col md={2}>
                     <Form.Control
                        type="number"
                        placeholder="Max age"
                        value={filterMaxAge}
                        onChange={(e) => setFilterMaxAge(e.target.value)}
                     />
                  </Col>
               </Row>
            </Form>
            <Tabs defaultActiveKey="castings" id="uncontrolled-tab-example" className="mb-3">
               <Tab eventKey="castings" title="Castings">
                  <h2 className="mt-4">Casting Requests</h2>
                  <Row>
                     {filteredCastings.length > 0 ? (
                        filteredCastings.map((casting) => (
                           <Col key={casting._id} md={4}>
                              <Card className="mb-4" onClick={() => handleActorClick(casting)}>
                                 <Card.Img
                                    variant="top"
                                    src={
                                       casting.photos.length > 0
                                          ? getMediaUrl(casting.photos[0])
                                          : "default-profile.png"
                                    }
                                    alt={`${casting.fullName}`}
                                    className="profile-img"
                                 />
                                 <Card.Body>
                                    <Card.Title>{casting.fullName}</Card.Title>
                                    <Card.Text>Age: {casting.age}</Card.Text>
                                    <Card.Text>Gender: {casting.gender}</Card.Text>
                                    <Card.Text>Phone: {casting.phoneNumber}</Card.Text>
                                    <Card.Text>
                                       Submitted on:{" "}
                                       {new Date(casting.submissionDate).toLocaleDateString()}
                                    </Card.Text>
                                    <Button
                                       variant="danger"
                                       onClick={(e) => {
                                          e.stopPropagation(); // Prevent the Card onClick from firing
                                          handleCastingDeleteClick(casting);
                                       }}
                                    >
                                       Delete
                                    </Button>
                                 </Card.Body>
                              </Card>
                           </Col>
                        ))
                     ) : (
                        <Col>
                           <p className="text-center">No casting requests available.</p>
                        </Col>
                     )}
                  </Row>
               </Tab>
               <Tab eventKey="scripts" title="Scripts">
                  <h2 className="mt-4">Scripts</h2>
                  <Row>
                     {scripts.length > 0 ? (
                        scripts.map((script) => (
                           <Col key={script._id} md={4}>
                              <Card className="mb-4" onClick={() => handleScriptClick(script)}>
                                 <Card.Body>
                                    <Card.Title>{script.fullName}</Card.Title>
                                    <Card.Text>Country: {script.country}</Card.Text>
                                    <Card.Text>Gender: {script.sex}</Card.Text>
                                    <Card.Text>Phone: {script.phone}</Card.Text>
                                    <Card.Text>Email: {script.email}</Card.Text>
                                    <Card.Text>
                                       Submitted on:{" "}
                                       {new Date(script.submissionDate).toLocaleDateString()}
                                    </Card.Text>
                                    <Button
                                       href={getMediaUrl(script.scriptFile)}
                                       target="_blank"
                                       variant="primary"
                                    >
                                       Download Script
                                    </Button>
                                 </Card.Body>
                              </Card>
                           </Col>
                        ))
                     ) : (
                        <Col>
                           <p className="text-center">No scripts submitted yet.</p>
                        </Col>
                     )}
                  </Row>
               </Tab>
               <Tab eventKey="blogs" title="Blogs">
                  <h2 className="mt-4">Manage Blog Posts</h2>
                  <Button variant="primary" className="mb-4" onClick={() => setShowBlogModal(true)}>
                     Add New Blog Post
                  </Button>
                  <Row>
                     {blogs.length > 0 ? (
                        blogs.map((blog) => (
                           <Col key={blog._id} md={4}>
                              <Card className="mb-4">
                                 {blog.images.length > 0 && (
                                    <Card.Img
                                       variant="top"
                                       src={getMediaUrl(blog.images[0])}
                                       alt={blog.title}
                                    />
                                 )}
                                 <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Text>{blog.content.substring(0, 100)}...</Card.Text>
                                    <Button
                                       variant="secondary"
                                       onClick={() => handleBlogClick(blog)}
                                    >
                                       Edit
                                    </Button>
                                    <Button
                                       variant="danger"
                                       className="ml-2"
                                       onClick={() => handleBlogDelete(blog._id)}
                                    >
                                       Delete
                                    </Button>
                                 </Card.Body>
                              </Card>
                           </Col>
                        ))
                     ) : (
                        <Col>
                           <p className="text-center">No blogs available.</p>
                        </Col>
                     )}
                  </Row>
               </Tab>
            </Tabs>
         </Container>

         {selectedActor && (
            <Modal show={true} onHide={handleClose}>
               <Modal.Header closeButton>
                  <Modal.Title>{selectedActor.fullName}</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Row>
                     <Col>
                        <strong>Age:</strong> {selectedActor.age || "N/A"}
                     </Col>
                     <Col>
                        <strong>Gender:</strong> {selectedActor.gender || "N/A"}
                     </Col>
                  </Row>
                  <Row>
                     <Col>
                        <strong>Phone:</strong> {selectedActor.phoneNumber || "N/A"}
                     </Col>
                     <Col>
                        <strong>Nationality:</strong> {selectedActor.nationality || "N/A"}
                     </Col>
                  </Row>
                  <Row>
                     <Col>
                        <strong>Submitted on:</strong>{" "}
                        {new Date(selectedActor.submissionDate).toLocaleDateString()}
                     </Col>
                  </Row>

                  {/* Display Work Links */}
                  <h5 className="mt-4">Work Links</h5>
                  {selectedActor.workLinks && selectedActor.workLinks.length > 0 ? (
                     <ul>
                        {selectedActor.workLinks.map((link, index) => (
                           <li key={index}>
                              <a href={link} target="_blank" rel="noopener noreferrer">
                                 {link}
                              </a>
                           </li>
                        ))}
                     </ul>
                  ) : (
                     <p>No work links provided</p>
                  )}

                  <h5 className="mt-4">Photos</h5>
                  {selectedActor.photos.length > 0 ? (
                     <div className="photo-previews">
                        {selectedActor.photos.map((photo, index) => (
                           <div key={index} className="preview-container">
                              <img
                                 src={getMediaUrl(photo)}
                                 alt={`Casting submission ${index + 1}`}
                                 className="preview-image"
                                 onClick={() => setLightboxImage(getMediaUrl(photo))}
                              />
                           </div>
                        ))}
                     </div>
                  ) : (
                     <p>No photos available</p>
                  )}

                  <h5 className="mt-4">Video</h5>
                  {selectedActor.video ? (
                     <video controls className="w-100">
                        <source src={getMediaUrl(selectedActor.video)} type="video/mp4" />
                        Your browser does not support the video tag.
                     </video>
                  ) : (
                     <p>No video available</p>
                  )}
               </Modal.Body>
            </Modal>
         )}

         {selectedScript && (
            <Modal show={true} onHide={handleClose}>
               <Modal.Header closeButton>
                  <Modal.Title>{selectedScript.fullName}</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Row>
                     <Col>
                        <strong>Country:</strong> {selectedScript.country || "N/A"}
                     </Col>
                     <Col>
                        <strong>Gender:</strong> {selectedScript.sex || "N/A"}
                     </Col>
                  </Row>
                  <Row>
                     <Col>
                        <strong>Phone:</strong> {selectedScript.phone || "N/A"}
                     </Col>
                     <Col>
                        <strong>Email:</strong> {selectedScript.email || "N/A"}
                     </Col>
                  </Row>
                  <Row>
                     <Col>
                        <strong>Submitted on:</strong>{" "}
                        {new Date(selectedScript.submissionDate).toLocaleDateString()}
                     </Col>
                  </Row>
                  <Button
                     href={getMediaUrl(selectedScript.scriptFile)}
                     target="_blank"
                     variant="primary"
                     className="mt-4 button-black-text" // Apply the custom CSS class
                  >
                     Download Script
                  </Button>
               </Modal.Body>
            </Modal>
         )}

         {lightboxImage && (
            <Modal show={true} onHide={handleLightboxClose} centered size="lg">
               <Modal.Body>
                  <img src={lightboxImage} alt="Enlarged view" className="w-100" />
               </Modal.Body>
            </Modal>
         )}

         <Modal show={showBlogModal} onHide={handleClose} className={isRtl ? "rtl" : "ltr"}>
            <Modal.Header closeButton>
               <Modal.Title>{isEditingBlog ? t("Edit Blog Post") : t("Add Blog Post")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form onSubmit={handleBlogSubmit}>
                  <Form.Group controlId="title">
                     <Form.Label>{t("Title")}</Form.Label>
                     <Form.Control
                        type="text"
                        name="title"
                        value={blogForm.title}
                        onChange={handleBlogFormChange}
                        required
                     />
                  </Form.Group>
                  <Form.Group controlId="content" className="mt-3">
                     <Form.Label>{t("Content")}</Form.Label>
                     <Form.Control
                        as="textarea"
                        name="content"
                        value={blogForm.content}
                        onChange={handleBlogFormChange}
                        rows={5}
                        required
                     />
                  </Form.Group>
                  <Form.Group controlId="author" className="mt-3">
                     <Form.Label>{t("Author")}</Form.Label>
                     <Form.Control
                        type="text"
                        name="author"
                        value={blogForm.author}
                        onChange={handleBlogFormChange}
                        required
                     />
                  </Form.Group>
                  <Form.Group controlId="images" className="mt-3">
                     <Form.Label>{t("Images")}</Form.Label>
                     <Form.Control
                        type="file"
                        name="images"
                        onChange={handleBlogFormChange}
                        multiple
                        accept="image/*"
                     />
                  </Form.Group>
                  <Button
                     variant="primary"
                     type="submit"
                     className="mt-4 button button-black-text" // Apply the custom CSS class
                  >
                     {isEditingBlog ? t("Update") : t("Submit")}
                  </Button>
               </Form>
            </Modal.Body>
         </Modal>

         {/* Delete Confirmation Modal */}
         <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
            <Modal.Header closeButton>
               <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this casting request?</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                  Cancel
               </Button>
               <Button variant="danger" onClick={confirmDeleteCasting}>
                  Delete
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
};

export default AdminPage;
