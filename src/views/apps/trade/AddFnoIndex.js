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
  CustomInput,
} from "reactstrap";
import { Route } from "react-router-dom";
import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";

export class AddFnoIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expiryDate: "",
      script_type: "",
      fnoindex_scrpt_name: "",
      active_value: "",
      active_value2: "",
      call_type: "",
      qty: "",
      investment_amt: "",
      no_of_lots: "",
      trade_type: "",
      t5: "",
      status: "",
      type: "Index",
      scriptN: [],
      expdateI: [],
      R1: false,
      R2: false,
      R3: false,
      R4: false,
      ALL: false,
    };
  }

  componentDidMount() {
    axiosConfig
      .get("/admin/getFnoScript")
      .then((response) => {
        this.setState({
          scriptN: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

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

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

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
      .post("/admin/add_fnoIndex", this.state)
      .then((response) => {
        swal("Success!", "Submitted Successfully!", "success");
        this.props.history.push("/app/trade/fnoIndexList");
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
                Add FNO Index
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/trade/fnoIndexList")}
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
                    required
                    defaultValue=""
                    name="fnoindex_scrpt_name"
                    value={this.state.fnoindex_scrpt_name}
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
                    value={this.state.expiryDate}
                    onChange={this.changeHandler}
                  >
                    <option value="" disabled>
                      Expiry Date
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
                    name="script_type"
                    type="select"
                    required
                    defaultValue=""
                    value={this.state.script_type}
                    onChange={this.changeHandler}
                  >
                    <option value="" disabled>
                      Select Script
                    </option>
                    <option>BUY</option>
                    <option>SELL</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Trade Type</Label>
                  <Input
                    required
                    defaultValue=""
                    id="exampleSelect"
                    name="trade_type"
                    type="select"
                    value={this.state.trade_type}
                    onChange={this.changeHandler}
                  >
                    <option value="" disabled>
                      Select Trade
                    </option>
                    <option value="BankNifty">BANK NIFTY</option>
                    <option value="Nifty">NIFTY</option>
                    <option value="FinNifty">FIN NIFTY</option>
                    <option value="SENSEX">SENSEX</option>
                    <option value="MIDCPNIFTY">MIDCPNIFTY</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Call Type</Label>
                  <Input
                    required
                    defaultValue=""
                    id="exampleSelect"
                    name="call_type"
                    type="select"
                    value={this.state.call_type}
                    onChange={this.changeHandler}
                    placeholder="Select Call Type"
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
                    <option>BTST (Hero-Zero)</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Active Value*</Label>
                  <Input
                    type="number"
                    required
                    placeholder="Enter Active Value"
                    name="active_value"
                    value={this.state.active_value}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Range value*</Label>
                  <Input
                    name="active_value2"
                    type="number"
                    required
                    placeholder="Enter Range value"
                    value={this.state.active_value2}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Number Of Lots</Label>
                  <Input
                    type="number"
                    required
                    name="no_of_lots"
                    placeholder="Enter Number Of Lots"
                    value={this.state.no_of_lots}
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
              </Row>
              <Row>
                <Button.Ripple
                  className="mr-1 mb-1"
                  type="submit"
                  color="primary"
                >
                  Add FNO Index
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddFnoIndex;
