import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { history } from "../../../history";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import "../../../assets/scss/pages/users.scss";
import axiosConfig from "../../../axiosConfig";
import axios from "axios";
import { Route } from "react-router-dom";
class ViewUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/getoneuser/${id}`)

      .then((response) => {
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Row>
            <Col sm="12">
              <div>
                <Breadcrumb listTag="div">
                  <BreadcrumbItem href="/analyticsDashboard" tag="a">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem href="/app/users/usersList" tag="a">
                    User List
                  </BreadcrumbItem>
                  <BreadcrumbItem active>View Users</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <Card className="overflow-hidden app-ecommerce-details">
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  View Users
                </h1>
              </Col>
              <Col>
                <Route
                  render={({ history }) => (
                    <Button
                      className=" btn btn-danger float-right"
                      onClick={() => history.push("/app/users/usersList")}
                    >
                      Back
                    </Button>
                  )}
                />
              </Col>
            </Row>
            <CardBody className="pb-0">
              <Row className="ml-4">
                <Col sm="9" md="12" lg="12">
                  <div className="users-page-view-table">
                    <div className="d-flex user-info">
                      {/* <div className="user-info-title font-weight-bold">
                        Users Name
                      </div>
                      <div className="text-truncate">
                        <span>
                          {this.state.data.firstname} {this.state.data.lastname}
                        </span>
                      </div> */}

                      {/* </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                       Last Name
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.userid?.lastname}</span>
                      </div> */}
                    </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Mobile
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.mobile}</span>
                      </div>
                    </div>
                    {/* <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Email
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.email}</span>
                      </div>
                    </div> */}
                    {/* <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Date Of Birth
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.dob}</span>
                      </div>
                    </div> */}
                    {/* <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Gender
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.gender}</span>
                      </div>
                    </div> */}
                    {/* <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Membership Plan
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.planId?.pack_name}</span>
                      </div>
                    </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Start Date
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.date}</span>
                      </div>
                    </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Expiry Date
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.expdate}</span>
                      </div>
                    </div> */}
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Status
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.status}</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewUsers;
