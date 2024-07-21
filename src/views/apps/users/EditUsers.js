import React, { Component } from "react";
import {
  Card,
  // CardHeader,
  // CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";
import { Route } from "react-router-dom";

import swal from "sweetalert";
export default class EditSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      pack_name: "",
      date: "",
      expdate: "",
      status: "",
      is_paid: "",
      plan_list: [],
      planId: '',
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/getoneuser/${id}`, {})
      .then((response) => {
        console.log(response);
        this.setState({
          firstname: response.data.data.firstname,
          lastname: response.data.data.lastname,
          mobile: response.data.data.mobile,
          email: response.data.data.email,
          gender: response.data.data.gender,
          dob: response.data.data.dob,
          pack_name: response.data.pack_name,
          date: response.data.data.date,
          expdate: response.data.data.expdate,
          status: response.data.data.status,
          is_paid: response.data.data.is_paid,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/admin/plan_list")
      .then((response) => {
        console.log(response);
        this.setState({
          pack_nameM: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // get plan list
    axiosConfig
      .get(`/admin/plan_list_membership_update`)
      .then((response) => {
        console.log(response);
        this.setState({
          plan_list: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/admin/editprofile/${id}`, this.state, {})
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        window.location.reload();
        // this.props.history.push("/app/users/usersList");
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
                <BreadcrumbItem href="/app/users/usersList" tag="a">
                  User List
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit User</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit User
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
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>User Name</Label>
                  <Input
                    type="text"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile</Label>
                  <Input
                    type="number"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Email Id</Label>
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Gender</Label>
                  <Input
                    type="select"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.changeHandler}
                  >
                    <option>select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Date Of Birth</Label>
                  <Input
                    type="date"
                    name="dob"
                    value={this.state.dob}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Membership plan</Label>
                  <CustomInput
                    type="select"
                    name="pack_name"
                    value={this.state.pack_name}
                    onChange={this.changeHandler}
                  >
                    <option>Select Plan</option>
                    {this.state.pack_nameM?.map((planmemship) => (
                      <option value={planmemship?._id} key={planmemship?._id}>
                        {planmemship?.pack_name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Expiry Date</Label>
                  <Input
                    type="date"
                    name="expdate"
                    value={this.state.expdate}
                    onChange={this.changeHandler}
                  ></Input>
                </Col> */}
                {this.state.is_paid === '0' ? (
                  <Col lg="12" md="12" sm="12" className="mb-2">
                    <Label>Membership Plan</Label>
                    <Input
                      type="select"
                      name="planId"
                      placeholder="Membership Plan"
                      value={this.state.planId}
                      onChange={this.changeHandler}
                    >
                       <option key='' value=''>
                          --- Select ---
                        </option>
                      {this.state.plan_list.map((plan) => (
                        <option key={plan._id} value={plan._id}>
                          {plan.pack_name}
                        </option>
                      ))}
                    </Input>
                  </Col>
                ) : (
                  ""
                )}
                <Col lg="12" md="12" sm="12" className="mb-2 mt-1">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={this.changeHandler1}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                      checked={this.state.status === 'Active'}
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Deactive"
                      checked={this.state.status === 'Deactive'}
                    />

                    <span style={{ marginRight: "3px" }}>Deactive</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update Status
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
