import React, { useEffect, useState } from "react";
import axios from "../axios"; // Adjust the path as necessary
import { Container, Table, Alert, Tabs, Tab, Form, Card, Row, Col, Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../assets/herodirector.jpg"; // Ensure you have this image in the correct path
import "./AdminPage.css"; // Import the CSS file for custom styling

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
  const [castings, setCastings] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedActor, setSelectedActor] = useState(null);
  const [filterGender, setFilterGender] = useState("");
  const [filterNationality, setFilterNationality] = useState("");
  const [filterMinAge, setFilterMinAge] = useState("");
  const [filterMaxAge, setFilterMaxAge] = useState("");

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

    fetchCastings();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleActorClick = (actor) => {
    setSelectedActor(actor);
  };

  const handleClose = () => {
    setSelectedActor(null);
  };

  const filteredCastings = castings.filter((casting) => {
    const matchesName = casting.fullName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = filterGender ? casting.gender === filterGender : true;
    const matchesNationality = filterNationality ? casting.nationality.toLowerCase().includes(filterNationality.toLowerCase()) : true;
    const matchesMinAge = filterMinAge ? casting.age >= filterMinAge : true;
    const matchesMaxAge = filterMaxAge ? casting.age <= filterMaxAge : true;

    return matchesName && matchesGender && matchesNationality && matchesMinAge && matchesMaxAge;
  });

  return (
    <>
      <HeroSection>
        <Overlay />
        <HeroContent>
          <h1 className="herotext">Director Dashboard</h1>
          <p>Manage casting requests and scripts</p>
        </HeroContent>
      </HeroSection>
      <Container>
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
                        src={casting.photos.length > 0 ? `http://192.168.128.1:5000/${casting.photos[0]}` : 'default-profile.png'}
                        alt={`${casting.fullName}'s profile`}
                        className="profile-img"
                      />
                      <Card.Body>
                        <Card.Title>{casting.fullName}</Card.Title>
                        <Card.Text>Age: {casting.age}</Card.Text>
                        <Card.Text>Gender: {casting.gender}</Card.Text>
                        <Card.Text>Phone: {casting.phoneNumber}</Card.Text>
                        <Card.Text>Submitted on: {new Date(casting.submissionDate).toLocaleDateString()}</Card.Text>
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
            <p className="mt-4">No scripts submitted yet.</p>
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
              <Col><strong>Age:</strong> {selectedActor.age || "N/A"}</Col>
              <Col><strong>Gender:</strong> {selectedActor.gender || "N/A"}</Col>
            </Row>
            <Row>
              <Col><strong>Phone:</strong> {selectedActor.phoneNumber || "N/A"}</Col>
              <Col><strong>Nationality:</strong> {selectedActor.nationality || "N/A"}</Col>
            </Row>
            <Row>
              <Col><strong>Submitted on:</strong> {new Date(selectedActor.submissionDate).toLocaleDateString()}</Col>
            </Row>
            <h5 className="mt-4">Photos</h5>
            {selectedActor.photos.length > 0 ? (
              <div className="photo-previews">
                {selectedActor.photos.map((photo, index) => (
                  <div key={index} className="preview-container">
                    <img src={`http://192.168.128.1:5000/${photo}`} alt={`Photo ${index + 1}`} className="preview-image" />
                  </div>
                ))}
              </div>
            ) : (
              <p>No photos available</p>
            )}
            <h5 className="mt-4">Video</h5>
            {selectedActor.video ? (
              <video controls className="w-100">
                <source src={`http://192.168.128.1:5000/${selectedActor.video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <p>No video available</p>
            )}
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default AdminPage;
