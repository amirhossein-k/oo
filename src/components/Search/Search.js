import React from "react";
import { Container, Col } from "react-bootstrap";
import InputModule from "../Input/Input";
import "../../styles/Search.css";

const Search = () => {
  return (
    <>
      <Col xl={2} md={4} sm={6} className="justify">
        <InputModule>keyword</InputModule>
      </Col>
      <Col xl={2} md={4} sm={6} className="justify">
        <InputModule>All Categories</InputModule>
      </Col>
      <Col xl={2} md={4} sm={6} className="justify">
        <InputModule>Brand</InputModule>
      </Col>
      <Col xl={2} md={4} sm={6} className="justify">
        <InputModule>Fuel Type</InputModule>
      </Col>
      <Col xl={2} md={4} sm={6} className="justify">
        <InputModule>Status</InputModule>
      </Col>
      <Col xl={2} md={4} sm={6} className="justify">
        <button className="button fixed">Search</button>
      </Col>
    </>
  );
};

export default Search;
