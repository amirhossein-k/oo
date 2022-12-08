import React from "react";
import { Container, Col } from "react-bootstrap";
import InputModule from "../Input/Input";
import "../../styles/Search.css";

const Search = () => {
  return (
    // <Container>
    <>
      <Col lg={2}>
        <InputModule>keyword</InputModule>
      </Col>
      <Col lg={2}>
        <InputModule>All Categories</InputModule>
      </Col>
      <Col lg={2}>
        <InputModule>Brand</InputModule>
      </Col>
      <Col lg={2}>
        {" "}
        <InputModule>Fuel Type</InputModule>
      </Col>
      <Col lg={2}>
        {" "}
        <InputModule>Status</InputModule>
      </Col>

      <button className="button">Search</button>
    </>
    // {/* </Container> */}
  );
};

export default Search;
