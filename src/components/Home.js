import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import Swipper from "./Swipper/Swipper";
import Search from "./Search/Search";
const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Swipper />
      </Row>
      <Row>
        <Search />
      </Row>
    </Container>
  );
};

export default Home;
