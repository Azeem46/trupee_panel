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
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";
import { Route } from "react-router-dom";

export default class AddMembership extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pack_name: "",
      mrp_price: "",
      desc: "",
      des_price: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("/admin/addPlan", this.state)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/package/PackagePlanList");
      })
      .catch((error) => {
        console.log(error);
      });
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
                <BreadcrumbItem href="/app/package/PackagePlanList" tag="a">
                  Package Plan List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add Package Plan</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Package Plan
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/package/PackagePlanList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Package Plan</Label>
                  <Input
                    id="exampleSelect"
                    name="pack_name"
                    type="select"
                    value={this.state.pack_name}
                    onChange={this.changeHandler}
                  >
                    <option>Select Plan</option>
                    <option>FREE</option>
                    <option>30Days</option>
                    <option>90Days</option>
                    <option>180Days</option>
                    <option>365Days</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>MRP Price</Label>
                  <Input
                    type="number"
                    placeholder="Enter MRP Price"
                    name="mrp_price"
                    value={this.state.mrp_price}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Discount Price</Label>
                  <Input
                    type="number"
                    placeholder="Enter Discount Price"
                    name="des_price"
                    value={this.state.des_price}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>Offer % </Label>
                  <Input
                    type="number"
                    placeholder="Offer %"
                    name="desc"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add Package Plan
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
