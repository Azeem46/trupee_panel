/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { Route } from "react-router-dom";

export default class PnLViewSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      userName: "",
      email: "",
      selectedName: "",
      selectedFile: null,
      userMobile: "",
      fullName: "",
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/getonePnlSheet/${id}`)
      .then((response) => {
        console.log(response);
        const resp = response.data.data;
        this.setState({
          image: resp?.pnlimg[0],
          userMobile: resp?.userId?.mobile,
          email: resp?.userId?.email,
          fullName: resp?.userId?.firstname + resp.userId?.lastname,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/app/explore/Trupee/opportunity" tag="a">
                  View Feedback
                </BreadcrumbItem>
                <BreadcrumbItem active>View Feedback</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                View P&LSheet
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/trade/pnLSheetList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                {this.state.fullName != NaN ? (
                  <Col lg="6" md="6" sm="6" className="mb-2">
                    <Label>UserName</Label>
                    <Input
                      required
                      type="text"
                      disabled
                      name="fullName"
                      value={this.state.fullName}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                ) : null}

                {this.state.userMobile ? (
                  <Col lg="6" md="6" sm="6" className="mb-2">
                    <Label>Mobile</Label>
                    <Input
                      type="text"
                      disabled
                      name="userMobile"
                      value={this.state.userMobile}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                ) : null}

                {this.state.email ? (
                  <Col lg="6" md="6" sm="6" className="mb-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      disabled
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                ) : null}
                {this.state.image ? (
                  <Col lg="6" md="6" sm="6" className="mb-2">
                   <a href={'http://62.72.58.41:5000/uploads/'+this.state.image} target="_blank"> <img
                      src={'http://62.72.58.41:5000/uploads/'+this.state.image}
                      alt="no image"
                      style={{ width: "100px" }}
                    /> </a>
                  </Col>
                ) : null}
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
