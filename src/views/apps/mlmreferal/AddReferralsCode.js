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
      name: "",
      code_qty: "",
      mobile: "",
      plan_id: "",
      plan_list: []
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
        "/mlm/generate_referral_code",
        this.state
      )
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
              GENERATE AFFILIATE CODE
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
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Mobile no.</Label>
                  <Input
                    type="text"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Select Plan</Label>
                  <Input
                    type="select"
                    name="plan_id"
                    placeholder="Select Plan"
                    value={this.state.plan_id}
                    onChange={this.changeHandler}
                  >
                    <option key="" value="">
                      --- Select Plan ---
                    </option>
                    {this.state.plan_list.map((plan) => (
                      <option key={plan._id} value={plan._id}>
                        {plan.pack_name}
                      </option>
                    ))}
                  </Input>
                </Col>

                <Col lg="6" md="6" className="mb-2">
                  <Label>Qty</Label>
                  <Input
                    type="text"
                    name="code_qty"
                    value={this.state.code_qty}
                    onChange={this.changeHandler}
                  />
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
