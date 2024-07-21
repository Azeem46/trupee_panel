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
  // FormGroup,
  // CustomInput,
} from "reactstrap";
import { Route } from "react-router-dom";
import Select from "react-select";
// import { history } from "../../../history";
// import axiosConfig from "../../../../axiosConfig";
// import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";

const dealerName = [];

export class AddShowAppreciation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealer: null,
      desc: "",
    };
  }

  async componentDidMount() {
    //dealer List
    //let array =[]
    //let obj ={}
    axiosConfig
      .get("/dealer/alldealers")
      .then((response) => {
        console.log(response);
        //this.setState({ dealerN: response.data.data });

        // eslint-disable-next-line no-unused-expressions
        response.data?.data?.map((dealerp) => {
          let obj = {
            label: dealerp.dealer_name,
            value: dealerp._id,
          };
          dealerName.push(obj);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (dealer) => {
    this.setState({ dealer }, () =>
      console.log(`Option selected:`, this.state.dealer)
    );
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post(
        "/admin/addnotification",
        this.state
        // {
        //   headers: {
        //     "auth-adtoken": localStorage.getItem("auth-adtoken"),
        //   },
        // }
      )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/users/usersList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { dealer } = this.state;
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Appreciation
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/showAppre/showAppreciation")
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
              <Row className="mb-2">
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>User ID</Label>
                  <Input
                    type="text"
                    placeholder="Enter User Id"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                  />
                </Col> */}

                <Col lg="6" md="6" className="mb-2">
                  <Label>Title </Label>
                  <Input
                    type="text"
                    placeholder="Enter Mobile Number"

                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Descripiton</Label>
                  <Input
                    type="text"
                    placeholder="Enter First Name"

                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                  />
                </Col>
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Email ID</Label>
                  <Input
                    type="text"
                    placeholder="Enter Email Id"

                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                  />
                </Col> */}
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Address</Label>
                  <Input
                    type="text"
                    placeholder="Enter Address"

                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Package Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter Package Name"

                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Expiry Date</Label>
                  <Input
                    type="date"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                  />
                </Col> */}
              </Row>
              <Row>
                <Button.Ripple
                  className="mr-1 mb-1"
                  type="submit"
                  color="primary"
                >
                  Add Appreciation
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddShowAppreciation;
