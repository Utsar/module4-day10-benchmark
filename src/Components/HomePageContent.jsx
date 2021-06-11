import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

const HomePageContent = ({ heading }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>{heading}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePageContent;
