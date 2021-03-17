/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import UNAHLogo from "assets/img/logos/UNAH-CURC.png";
import UNITECLogo from "assets/img/logos/UNITEC.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="d-flex w-100 justify-content-between">
            <img
              alt="UNAH-CURC"
              className="logos"
              src={UNAHLogo}
            />
            <img
              alt="UNITEC"
              className="logos"
              src={UNITECLogo}
            />
          </div>
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © 2021{" "}
              <a
                className="align-items-center justify-content-xl-between"
              >
                Easy Accounting
              </a>
            </div>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
