import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
import swal from "sweetalert";
import axios from "axios";

export class EditCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      customer_email: "",
      mobile_no: "",
      sortorder: "",
      status: "",
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get(`http://35.154.86.59/api/user/getonecustomer/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          first_name: response.data.data.first_name,
          last_name: response.data.data.last_name,
          customer_email: response.data.data.customer_email,
          mobile_no: response.data.data.mobile_no,
          sortorder: response.data.data.sortorder,
          status: response.data.data.status,
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
    axios
      .post(`http://35.154.86.59/api/user/editcustomer/${id}`, this.state)
      .then((response) => {
        console.log(response);
        swal("Success!", "Updated SuccessFull!", "success");
        this.props.history.push("/app/contactUs/customer/customerList");
      })
      .catch((error) => {
        swal("Error!", "Error Received", "error");
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Customer
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/contactUs/customer/customerList")
                }
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>FirstName</Label>
                    <Input
                      type="text"
                      placeholder="First Name"
                      name="first_name"
                      value={this.state.first_name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>LastName</Label>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      name="last_name"
                      value={this.state.last_name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Customer Email</Label>
                    <Input
                      type="email"
                      placeholder="Customer Email"
                      name="customer_email"
                      value={this.state.customer_email}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Mobile Number</Label>
                    <Input
                      type="number"
                      placeholder="Mobile Number"
                      name="mobile_no"
                      value={this.state.mobile_no}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Sort Order</Label>
                    <Input
                      type="number"
                      placeholder="Sort Order"
                      name="sortorder"
                      value={this.state.sortorder}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-1 ">
                  <FormGroup>
                    <Label className="mb-1">Status</Label>
                    <div
                      className="form-label-group"
                      onChange={(e) => this.changeHandler1(e)}
                    >
                      <input
                        style={{ marginRight: "3px", fontWeight: 800 }}
                        type="radio"
                        name="status"
                        value="Active"
                      />
                      <span style={{ marginRight: "20px", fontWeight: 800 }}>
                        Active
                      </span>

                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Inactive"
                      />
                      <span style={{ marginRight: "3px" }}>Inactive</span>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="ml-2 mb-1"
                >
                  Add Customer
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default EditCustomer;
