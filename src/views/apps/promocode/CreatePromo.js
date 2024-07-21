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
import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";

export class AddReferralCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      amount: "",
      expiry_date: "",
    };
  }

  async componentDidMount() {
    //   //dealer List
    //   //let array =[]
    //   //let obj ={}
    //   axiosConfig
    //     .get("/dealer/alldealers")
    //     .then((response) => {
    //       console.log(response);
    //       //this.setState({ dealerN: response.data.data });
    //       // eslint-disable-next-line no-unused-expressions
    //       response.data?.data?.map((dealerp) => {
    //         let obj = {
    //           label: dealerp.dealer_name,
    //           value: dealerp._id,
    //         };
    //         dealerName.push(obj);
    //       });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
  }

  changeHandlercode = (e) => {
    const { name, value } = e.target;

    if (name === "code") {
      // Regular expression to match capital letters and numbers only
      const regexCode = /^[A-Z0-9]*$/;
      if (regexCode.test(value)) {
        this.setState({ [name]: value });
      }
    } else if (name === "amount") {
      // Regular expression to match numeric values only
      // Regular expression to match numeric values only (not starting with 0)
      const regexAmount = /^[1-9][0-9]*$/;
      if (regexAmount.test(value) || value === '') {
        this.setState({ [name]: value });
      }
    } else {
      this.setState({ [name]: value });
    }
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("/admin/create_promo", this.state)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        window.location.reload();
        // this.props.history.push("app/mlmreferral/generateCode");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    // const { dealer } = this.state;
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Create Promo Code
              </h1>
            </Col>
            <Col>
              {/* <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/notification/notificationList")
                    }
                  >
                    Back
                  </Button>
                )}
              /> */}
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col md="6" sm="6">
                  <Label>Code (eg. OFF50)</Label>
                  <Input
                    type="text"
                    name="code"
                    value={this.state.code}
                    onChange={this.changeHandlercode}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Amount</Label>
                  <Input
                    type="text"
                    name="amount"
                    value={this.state.amount}
                    onChange={this.changeHandlercode}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Expiry Date</Label>
                  <Input
                    required
                    type="date"
                    name="expiry_date"
                    placeholder="dd/mm/yyyy"
                    value={this.state.expiry_date}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  className="mr-1 mb-1"
                  type="submit"
                  color="primary"
                >
                  Generate Code
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddReferralCode;
