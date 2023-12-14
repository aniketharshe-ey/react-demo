import React from "react";
import { Row } from "react-bootstrap";

const Header = ({ title }) => {
  return (
    <Row className="App-header text-center">
      <h3>{title}</h3>
    </Row>
  );
};

export default Header;
