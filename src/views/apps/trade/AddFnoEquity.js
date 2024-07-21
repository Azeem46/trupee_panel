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
  CustomInput,
} from "reactstrap";
import { Route } from "react-router-dom";
// import Select from "react-select";
// import { history } from "../../../history";
import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";

export class AddFnoEquity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      script_type: "",
      fnoequty_scrpt_name: "",
      script_name: "",
      active_value: "",
      active_value2: "",
      call_type: "",
      SL: "",
      sl_type: "false",
      T1: "",
      t1_type: "false",
      T2: "",
      t2_type: "false",
      T3: "",
      t3_type: "false",
      T4: "",
      t4_type: "false",
      t5: "",
      t5_type: "false",
      qty: "",
      no_of_lots: "",
      expiryDate: "",
      R1: false,
      R2: false,
      R3: false,
      R4: false,
      ALL: false,

      // cstmMsg: "",
    };
    this.state = {
      // scriptT: [],
      type: "Equity",
      scriptN: [],
      expdateI: [],
    };
  }
  //Script//
  async componentDidMount() {
    axiosConfig
      .get("/admin/getEquityScript")
      .then((response) => {
        this.setState({
          scriptN: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // expDate//
    axiosConfig
      .get("/admin/datelist")
      .then((response) => {
        this.setState({
          expdateI: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (name === "ALL") {
      this.setState({
        R1: checked,
        R2: checked,
        R3: checked,
        R4: checked,
        ALL: checked,
      });
    } else {
      this.setState({ [name]: checked }, () => {
        const { R1, R2, R3, R4 } = this.state;
        if (R1 && R2 && R3 && R4) {
          this.setState({ ALL: true });
        } else {
          this.setState({ ALL: false });
        }
      });
    }
  };

  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("/admin/add_fnoEquity", this.state)
      .then((response) => {
        console.log("option", response.data.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/trade/fnoEquityList");
      })
      .catch((error) => {
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
                Add FNO Option
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/trade/fnoEquityList")}
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
                <Col lg="12" className="mb-2">
                  <Label>Roles</Label>
                  <div>
                    <CustomInput
                      type="checkbox"
                      id="R1"
                      label="R1"
                      name="R1"
                      checked={this.state.R1}
                      onChange={this.handleCheckboxChange}
                      inline
                    />
                    <CustomInput
                      type="checkbox"
                      id="R2"
                      label="R2"
                      name="R2"
                      checked={this.state.R2}
                      onChange={this.handleCheckboxChange}
                      inline
                    />
                    <CustomInput
                      type="checkbox"
                      id="R3"
                      label="R3"
                      name="R3"
                      checked={this.state.R3}
                      onChange={this.handleCheckboxChange}
                      inline
                    />
                    <CustomInput
                      type="checkbox"
                      id="R4"
                      label="R4"
                      name="R4"
                      checked={this.state.R4}
                      onChange={this.handleCheckboxChange}
                      inline
                    />
                    <CustomInput
                      type="checkbox"
                      id="ALL"
                      label="ALL"
                      name="ALL"
                      checked={this.state.ALL}
                      onChange={this.handleCheckboxChange}
                      inline
                    />
                  </div>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Script Name</Label>
                  <CustomInput
                    type="select"
                    name="fnoequty_scrpt_name"
                    required
                    defaultValue=""
                    value={this.state.fnoequty_scrpt_name}
                    onChange={this.changeHandler}
                  >
                    <option value="" disabled>
                      Select Script
                    </option>
                    {this.state.scriptN?.map((allScript) => (
                      <option value={allScript?._id} key={allScript?._id}>
                        {allScript?.scriptName}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Expiry Date</Label>
                  <CustomInput
                    type="select"
                    name="expiryDate"
                    required
                    defaultValue=""
                    // valid={this.state.expiryDate ? true : false}
                    // invalid={this.state.expiryDate ? false : true}
                    value={this.state.expiryDate}
                    onChange={this.changeHandler}
                  >
                    <option value="" disabled>
                      Select Expiry Date
                    </option>
                    {this.state.expdateI?.map((allExpDate) => (
                      <option value={allExpDate?._id} key={allExpDate?._id}>
                        {allExpDate?.expDate}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Equity Script</Label>
                  <Input
                    id="exampleSelect"
                    name="script_type"
                    required
                    defaultValue=""
                    type="select"
                    value={this.state.script_type}
                    onChange={this.changeHandler}
                    // valid={this.state.script_type ? true : false}
                    // invalid={this.state.script_type ? false : true}
                  >
                    <option value="" disabled>
                      Select Script
                    </option>
                    <option>BUY</option>
                    <option>SELL</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Call Type</Label>
                  <Input
                    id="exampleSelect"
                    name="call_type"
                    type="select"
                    defaultValue=""
                    required
                    value={this.state.call_type}
                    onChange={this.changeHandler}
                    // valid={this.state.call_type ? true : false}
                    // invalid={this.state.call_type ? false : true}
                  >
                    <option value="" disabled>
                      Select Call Type
                    </option>
                    <option>Intraday</option>
                    <option>BTST</option>
                    <option>Short Term</option>
                    <option>Intraday or BTST</option>
                    <option>Intraday (Risky)</option>
                    <option>Intraday (Trailed)</option>
                    <option>Intraday (Re-entry)</option>
                    <option>Intraday (Re-entry- Trailed)</option>
                    <option>Intraday (Hero-Zero)</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Active Value</Label>
                  <Input
                    type="text"
                    placeholder="Enter Active Value"
                    name="active_value"
                    required
                    value={this.state.active_value}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Range Value</Label>
                  <Input
                    type="number"
                    placeholder="Enter Max. Value Price"
                    name="active_value2"
                    required
                    value={this.state.active_value2}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>SL</Label>
                  <Input
                    name="SL"
                    type="text"
                    required
                    placeholder="Enter Stop Loss"
                    value={this.state.SL}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Quantity</Label>
                  <Input
                    type="text"
                    name="qty"
                    required
                    placeholder="Enter Quantity"
                    value={this.state.qty}
                    onChange={this.changeHandler}
                  />
                </Col>
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Investment Amount</Label>
                  <Input
                    name="investment_amt"
                    type="text"
                    placeholder="Enter Investment Amount"
                    value={this.state.investment_amt}
                    onChange={this.changeHandler}
                  />
                </Col> */}
                <Col lg="6" md="6" className="mb-2">
                  <Label>Number Of Lots</Label>
                  <Input
                    type="text"
                    name="no_of_lots"
                    required
                    placeholder="Enter Number Of Lots"
                    value={this.state.no_of_lots}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>T₹ 1 </Label>
                  <Input
                    type="text"
                    placeholder="Enter Target 1"
                    name="T1"
                    value={this.state.T1}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>T₹ 2</Label>
                  <Input
                    type="text"
                    placeholder="Enter Target 2"
                    name="T2"
                    value={this.state.T2}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>T₹ 3</Label>
                  <Input
                    type="text"
                    placeholder="Enter Target 3"
                    name="T3"
                    value={this.state.T3}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="6" className="mb-2">
                  <Label>T₹ 4</Label>
                  <Input
                    type="text"
                    placeholder="Enter Target 4"
                    name="T4"
                    value={this.state.T4}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Call Alert</Label>
                  <Input
                    required
                    defaultValue=""
                    id="exampleSelect"
                    name="call_alert"
                    type="select"
                    value={this.state.call_alert}
                    onChange={this.changeHandler}
                    placeholder="Select Call Alert"
                  >
                    <option value="" disabled>
                      Select Call Alert
                    </option>
                    <option>Active</option>
                    <option>Pre Market</option>
                    <option>Hold</option>
                    <option>Rocket</option>
                    <option>Exit Now</option>
                    <option>Completed</option>
                  </Input>
                  </Col>
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Achieved Target+</Label>
                  <Input
                    type="text"
                    placeholder="Enter Target 5"
                    name="t5"
                    value={this.state.t5}
                    onChange={this.changeHandler}
                  />
                </Col> */}
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Trade Type</Label>
                  <Input
                    type="select"
                    name="type"
                    placeholder="Enter Trade Type"
                    value={this.state.type}
                    onChange={this.changeHandler}
                  >
                    <option>Select type</option>
                    <option>Equity</option>
                  </Input>
                </Col> */}
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Trade Alert</Label>
                  <Input
                    type="text"
                    placeholder="Keep booking or trailing stop loss"
                    name="cstmMsg"
                    value={this.state.cstmMsg}
                    onChange={this.changeHandler}
                  />
                </Col> */}
              </Row>
              <Row>
                <Button.Ripple
                  className="mr-1 mb-1"
                  type="submit"
                  color="primary"
                >
                  Add FNO Option
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddFnoEquity;
