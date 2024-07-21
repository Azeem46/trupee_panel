import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
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
import axiosConfig from "../../../../axiosConfig";
import { history } from "../../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";

export default class EditTVC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: "",
      year: "",
      dst_price: "",
      mrp: "",
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/getonePersheet/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          month: response.data.data.month,
          year: response.data.data.year,
          dst_price: response.data.data.dst_price,
          mrp: response.data.data.mrp,
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
    console.log(this.state);

    const data = new FormData();
    data.append("month", this.state.month);
    data.append("year", this.state.year);
    data.append("dst_price", this.state.dst_price);
    data.append("mrp", this.state.mrp);

    let { id } = this.props.match.params;
    axiosConfig
      // .post(`/editsize/${id}`, this.state)
      .post(`/admin/editPersheet/${id}`, this.state)

      .then((response) => {
        console.log(response.data);

        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/explore/Trupee/performanceSheet");
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
                <BreadcrumbItem
                  href="/app/explore/Trupee/performanceSheet"
                  tag="a"
                >
                  Performance Sheet List
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit Performance Sheet</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Performance Sheet
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/explore/Trupee/performanceSheet")
                    }
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
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Month</Label>
                  <Input
                    required
                    name="month"
                    type="select"
                    value={this.state.month}
                    onChange={this.changeHandler}
                  >
                    <option>Select Month</option>

                    <option name="January" value="Jan">
                      January
                    </option>
                    <option name="February" value="Feb">
                      February
                    </option>
                    <option name="March" value="Mar">
                      March
                    </option>
                    <option name="April" value="Apr">
                      April
                    </option>
                    <option name="May" value="May">
                      May
                    </option>
                    <option name="June" value="Jun">
                      June
                    </option>
                    <option name="July" value="Jul">
                      July
                    </option>
                    <option name="August" value="Aug">
                      August
                    </option>
                    <option name="September" value="Sep">
                      September
                    </option>
                    <option name="October" value="Oct">
                      October
                    </option>
                    <option name="November" value="Nov">
                      November
                    </option>
                    <option name="December" value="Dec">
                      December
                    </option>
                  </Input>
                  {/* <Label>Month</Label>
                  <Input
                    required
                    name="month"
                    placeholder=""
                    value={this.state.month}
                    onChange={this.changeHandler}
                  >
                    <select placeholder="MM">
                     
                    </select>
                  </Input> */}
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Year</Label>
                  <Input
                    type="text"
                    min="1900-2099"
                    max="2099"
                    step="1"
                    name="year"
                    value={this.state.year}
                    onChange={this.changeHandler}
                  />

                  {/* <YearPicker
                    changeHandler
                    name="year"
                    value={this.state.year}
                    onChange={this.changeHandler}
                  /> */}
                  {/* <Label>Year</Label>
                  <Input
                    required
                    // dateFormat="yyyy"
                    type="month"
                    name="year"
                    value={this.state.year}
                    onChange={this.changeHandler}
                  ></Input> */}
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Discount Price</Label>
                  <Input
                    required
                    type="text"
                    name="dst_price"
                    placeholder=""
                    value={this.state.dst_price}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>MRP Price</Label>
                  <Input
                    required
                    type="text"
                    name="mrp"
                    placeholder=""
                    value={this.state.mrp}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Inactive"
                    />
                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col>  */}
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update
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
