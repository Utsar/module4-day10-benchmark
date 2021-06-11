import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

function HomePageNav() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ul className="homePageNavs">
              <p className="underline">Trending</p>
              <p className="underline">Podcast</p>
              <p className="underline">Mood and genres</p>
              <p className="underline">New releases</p>
              <p className="underline">Discovery</p>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePageNav;
