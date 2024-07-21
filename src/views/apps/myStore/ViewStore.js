import React, { Component } from "react";
import { Card, CardBody, Row, Col, Button, Container } from "reactstrap";
import { MapPin, Star, Globe, Mail, Clock } from "react-feather";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";
import Carousel from "react-elastic-carousel";

export class ViewStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    console.log("component mounting");
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getonestore/${id}`)
      .then((response) => {
        console.log(response);
        // console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <React.Fragment>
        <Card className="overflow-hidden app-ecommerce-details">
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Store Details
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/myStore/storeList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody className="pb-0">
            {/* <h1>{this.state.data.storeImg?.length}</h1> */}
            <div>
              <Carousel>
                {this.state.data?.storeImg?.map((i) => (
                  <img
                    className="border-black m-0"
                    src={i}
                    alt="user avatar"
                    height="400"
                  />
                ))}
              </Carousel>
            </div>

            <Row className="justify-content-md-center mt-3">
              <Col sm="8" className="">
                <Card className="">
                  <div className="card-block">
                    <Row className="">
                      <Col className="">
                        <h2 className="mt-2">{this.state.data.store_name}</h2>
                      </Col>
                      <div className="col-md-auto text-right">
                        {/* <div className="m-t-35">
                              <button
                                type="submit"
                                className="btn btn-outline-primary"
                              >
                                Directions
                              </button>
                              <button type="submit" className="btn btn-primary">
                                Call Now
                              </button>
                            </div>  */}
                      </div>
                    </Row>
                    <div className="row">
                      {/* <div className="col-md-auto">
                            <div>
                              <a href="#!">
                                <Star className="f-18 text-c-yellow" />
                              </a>
                              <a href="#!">
                                <Star className="f-18 text-c-yellow" />
                              </a>
                              <a href="#!">
                                <Star className="f-18 text-c-yellow" />
                              </a>
                              <a href="#!">
                                <Star className="f-18 text-c-yellow" />
                              </a>
                              <a href="#!">
                                <Star className="f-18 text-c-yellow" />
                              </a>
                            </div>
                          </div>
                          <div className="col">
                            <h4>
                              <a href="#">63 Reviews</a>
                            </h4>
                          </div> */}
                    </div>

                    <Row className="">
                      <Col className="col-md-auto">
                        <h3>
                          <MapPin className="feather icon-map-pin" />
                        </h3>
                      </Col>
                      <div className="col">
                        <h3>
                          {this.state.data.address_line1}{" "}
                          {this.state.data.address_line2}{" "}
                          {this.state.data.landmark} {this.state.data.city}{" "}
                          {this.state.data.state} {this.state.data.pincode}
                        </h3>
                      </div>
                    </Row>
                    <div className="row">
                      <div className="col-md-auto">
                        <h3>
                          <Globe className="feather icon-globe" />
                        </h3>
                      </div>
                      <div className="col">
                        <h3>
                          <a href="www.casualdress.com" target="_blank">
                            {this.state.data.websiteUrl}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <Row className="">
                      <Col className="col-md-auto">
                        <h3>
                          <Mail className="feather icon-mail" />
                        </h3>
                      </Col>
                      <Col className="">
                        <h3>
                          <a href="">{this.state.data.store_email}</a>
                        </h3>
                      </Col>
                    </Row>
                    <Row className="">
                      <Col className="col-md-auto">
                        <h3>
                          <Clock className="far fa-clock" />
                        </h3>
                      </Col>
                      <Col className="">
                        <h3>
                          <span className="text-success">Open</span>
                          {this.state.data.day} {this.state.data.startTym}-
                          {this.state.data.endTym}
                        </h3>
                      </Col>
                    </Row>
                    <p className="border-top mb-2 pt-1 mt-2"></p>
                    <Row className="">
                      <Col className="">
                        <h4>Speciality</h4>
                        <span>{this.state.data.business_type}</span>
                      </Col>
                    </Row>
                    <div className="mb-2 mt-2"></div>
                    <Row className="">
                      <Col className="">
                        <h4>Introduction</h4>
                        <span>{this.state.data.store_desc}</span>
                      </Col>
                    </Row>
                    <p className="border-top mb-2 pt-1 mt-2"></p>
                    <Row className="">
                      <Col className="">
                        <button type="button" className="btn btn-success">
                          Topwear{" "}
                          <span className="badge">
                            <i className="feather icon-x"></i>
                          </span>
                        </button>
                        <button type="button" className="btn btn-info">
                          Tshirts{" "}
                          <span className="badge">
                            <i className="feather icon-x"></i>
                          </span>
                        </button>
                        <button type="button" className="btn btn-warning">
                          Bottom Wear{" "}
                          <span className="badge">
                            <i className="feather icon-x"></i>
                          </span>
                        </button>
                        <button type="button" className="btn btn-secondary">
                          Jeans{" "}
                          <span className="badge">
                            <i className="feather icon-x"></i>
                          </span>
                        </button>
                        <button type="button" className="btn btn-success">
                          Topwear{" "}
                          <span className="badge">
                            <i className="feather icon-x"></i>
                          </span>
                        </button>
                        <button type="button" className="btn btn-info">
                          Tshirts{" "}
                          <span className="badge">
                            <i className="feather icon-x"></i>
                          </span>
                        </button>
                        <button type="button" className="btn btn-warning">
                          Bottom Wear{" "}
                          <span className="badge">
                            <i className="feather icon-x"></i>
                          </span>
                        </button>
                        <button type="button" className="btn btn-secondary">
                          Jeans{" "}
                          <span className="badge">
                            <i className="feather icon-x"></i>
                          </span>
                        </button>
                      </Col>
                    </Row>
                    <p className="border-top m-b-20 p-t-10 m-t-20"></p>
                    <div className="form-group text-right">
                      <button
                        type="submit"
                        className="btn btn-lg btn-outline-primary"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-lg btn-primary">
                        Save
                      </button>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>

            {/* <Row className="mb-5 mt-2">
              <Col
                className="d-flex align-items-start justify-content-center mb-2 mb-md-0"
                sm="12"
                md="5"
              >
                 {this.state.data.storeImg.map((i) => (
                  <img src={i} alt="Google Home" height="250" width="250" />
                ))} 
              </Col>

              <Col md="7" sm="12">
                <h4 style={{ fontWeight: 800 }}>Store Name</h4>
                <h5>{this.state.data.store_name}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>Store ID </h4>
                <h5>{this.state.data.storeID}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>Owner Name</h4>
                <h5>{this.state.data.owner_name}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>Email</h4>
                <h5>{this.state.data.email}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>Mobile Number</h4>
                <h5>{this.state.data.mobile}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>Address</h4>
                <h5>{this.state.data.address}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>City</h4>
                <h5>{this.state.data.city}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>State </h4>
                <h5>{this.state.data.state}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>Country</h4>
                <h5>{this.state.data.country}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>Status</h4>
                <h5>{this.state.data.status}</h5>
                <hr />
              </Col>
            </Row> */}
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default ViewStore;
