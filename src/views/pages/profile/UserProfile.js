import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import "../../../assets/css/profile.css";

export class UserProfile extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h1 className="dark-color">Profile Info</h1>
          </Col>
        </Row>
        <section className="section about-section bg-gray" id="about">
          <Container>
            <Row className="align-items-center   flex-row-reverse">
              <Col lg="8">
                <div className="about-text go-to">
                  <Row className="about-list">
                    <Col md="6">
                      <div className="media">
                        <label>Birthday</label>
                        <p>4th april 1998</p>
                      </div>
                      <div className="media">
                        <label>Age</label>
                        <p>22 Yr</p>
                      </div>
                      <div className="media">
                        <label>Residence</label>
                        <p>Canada</p>
                      </div>
                      <div className="media">
                        <label>Address</label>
                        <p>California, USA</p>
                      </div>
                    </Col>
                    <div className="col-md-6">
                      <div className="media">
                        <label>E-mail</label>
                        <p>info@domain.com</p>
                      </div>
                      <div className="media">
                        <label>Phone</label>
                        <p>820-885-3321</p>
                      </div>
                      <div className="media">
                        <label>Skype</label>
                        <p>skype.0404</p>
                      </div>
                      <div className="media">
                        <label>Freelance</label>
                        <p>Available</p>
                      </div>
                    </div>
                  </Row>
                </div>
              </Col>
              <Col lg="4">
                <div className="about-avatar">
                  <img
                    src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
                    title=""
                    alt=""
                  />
                </div>
              </Col>
            </Row>
            {/* <div className="counter">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="500" data-speed="500">
                      500
                    </h6>
                    <p className="m-0px font-w-600">Happy Clients</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="150" data-speed="150">
                      150
                    </h6>
                    <p className="m-0px font-w-600">Project Completed</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="850" data-speed="850">
                      850
                    </h6>
                    <p className="m-0px font-w-600">Photo Capture</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="190" data-speed="190">
                      190
                    </h6>
                    <p className="m-0px font-w-600">Telephonic Talk</p>
                  </div>
                </div>
              </div>
            </div> */}
          </Container>
        </section>
      </div>
    );
  }
}

export default UserProfile;
