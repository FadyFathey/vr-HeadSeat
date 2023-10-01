import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiSearch } from "react-icons/bi";
import { RiShoppingBagLine } from "react-icons/ri";
import "./header.css";
const Header = () => {
  return (
    <div>
      <Container  className="head">
        <Row xl={3} md={12} sm={12}>
          <Col className="content" xl={3} md={3} sm={3}>
            <div>
              <div className="active"></div>
              Home
            </div>
            <div>Catalog</div>
            <div>Contact</div>
            <div>Features</div>
          </Col>
          <Col>
            <div className="name">
              <div className="holo">Holo</div>
              <div className="goza">Goza</div>
              <div className="dot"></div>
            </div>
          </Col>
          <Col>
            <div className="search">
              <input type="text" placeholder="Search games & products.." />
              <div className="s-icon">
                <BiSearch />
              </div>
            </div>
          </Col>
          <Col className="bag">
            <RiShoppingBagLine />
          </Col>
        </Row>
        <div className="header"></div>
      </Container>
    </div>
  );
};

export default Header;
