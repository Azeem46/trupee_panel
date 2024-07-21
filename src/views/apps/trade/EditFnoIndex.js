import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  CustomInput,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";


function formatDateIn12HourFormat(dateString, timezone) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZoneName: 'short',
  };
  // Assuming dateString is in UTC, if not, adjust accordingly
  const date = new Date(dateString + ' ' + timezone);
  return date.toLocaleString('en-US', options);
}



class EditFnoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fnoindex_scrpt_name: "",
      trl_type: false,
      trl: "",
      expiryDate: "",
      script_type: "",
      active_value: "",
      active_value2: "",
      call_type: "",
      no_of_lots: "",
      trade_type: "",
      type: "Index",
      FT1: "",
      FT1_type: false,
      FT2: "",
      FT2_type: false,
      FT3: "",
      FT3_type: false,
      FT4_type: false,
      FT5_type: false,
      FT6_type: false,
      FT7_type: false,
      sl_type: false,
      t5: "",
      FT4: "",
      FT5: "",
      FT6: "",
      FT7: "",
      status: "",
      cstmMsg: "",
      tradeStatus: "",
    };
    this.state = {
      scriptN: [],
      expdateI: [],
      alertHistory: [],
    };
  }
  async componentDidMount() {
    let { id } = this.props.match.params;

    

    axiosConfig
      .get(`/admin/viewonetrades/${id}`)
      .then((response) => {
        console.log("RangetValue", response.data.data);
        this.setState({
          expiryDate: response.data.data.expiryDate,
          script_type: response.data.data.script_type,
          fnoindex_scrpt_name: response.data.data.fnoindex_scrpt_name,
          call_type: response.data.data.call_type,
          active_value: response.data.data.active_value,
          active_value2: response.data.data.active_value2,
          FT1: response.data.data.FT1,
          FT2: response.data.data.FT2,
          FT3: response.data.data.FT3,
          FT4: response.data.data?.FT4,
          FT5: response.data.data?.FT5,
          trl: response.data.data.trl,
          trl_type: response.data.data.trl_type,
          FT1_type: response.data.data.FT1_type,
          FT2_type: response.data.data.FT2_type,
          FT3_type: response.data.data.FT3_type,
          FT4_type: response.data.data.FT4_type,
          FT5_type: response.data.data.FT5_type,
          FT6_type: response.data.data.FT6_type,
          FT7_type: response.data.data.FT7_type,
          FT6: response.data.data?.FT6,
          FT7: response.data.data?.FT7,
          qty: response.data.data.qty,
          sl_type: response.data.data.sl_type,
          no_of_lots: response.data.data.no_of_lots,
          trade_type: response.data.data.trade_type,
          type: response.data.data.type,
          // cstmMsg: response.data.data.cstmMsg,
          status: response.data.data.status,
          tradeStatus: response.data.data.tradeStatus,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //Alert History
    axiosConfig
      .get(`/admin/getalerthistory/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          alertHistory: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //Script//
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
  changeHandler_tradeStatus = (e) => {
    this.setState({ tradeStatus: e.target.value });
  };
  changeHandler1 = (e) => {
    this.setState({ tradeStatus: e.target.value });
  };

  changeHandler2 = (e) => {
    if (e.target.checked) {
      this.setState({ FT1_type: "true" });
    } else {
      this.setState({ FT1_type: "false" });
    }
  };
  changeHandler3 = (e) => {
    if (e.target.checked) {
      this.setState({ FT2_type: "true" });
    } else {
      this.setState({ FT2_type: "false" });
    }
  };
  changeHandler4 = (e) => {
    if (e.target.checked) {
      this.setState({ FT3_type: "true" });
    } else {
      this.setState({ FT3_type: "false" });
    }
  };
  changeHandlerT4 = (e) => {
    if (e.target.checked) {
      this.setState({ FT4_type: "true" });
    } else {
      this.setState({ FT4_type: "false" });
    }
  };
  changeHandlerT5 = (e) => {
    if (e.target.checked) {
      this.setState({ FT5_type: "true" });
    } else {
      this.setState({ FT5_type: "false" });
    }
  };
  changeHandlerT6 = (e) => {
    if (e.target.checked) {
      this.setState({ FT6_type: "true" });
    } else {
      this.setState({ FT6_type: "false" });
    }
  };
  changeHandlerT7 = (e) => {
    if (e.target.checked) {
      this.setState({ FT7_type: "true" });
    } else {
      this.setState({ FT7_type: "false" });
    }
  };
  changeHandler6 = (e) => {
    if (e.target.checked) {
      this.setState({ sl_type: "true" });
    } else {
      this.setState({ sl_type: "false" });
    }
  };
  changeHandler7 = (e) => {
    if (e.target.checked) {
      this.setState({ trl_type: "true" });
    } else {
      this.setState({ trl_type: "false" });
    }
  };
  changeHandler = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // debugger;
    let { id } = this.props.match.params;

    let obj = {
      active_value: this.state.active_value,
      active_value2: this.state.active_value2,
      expiryDate: this.state.expiryDate,
      script_type: this.state.script_type,
      no_of_lots: this.state.no_of_lots,
      fnoindex_scrpt_name: this.state.fnoindex_scrpt_name,
      call_type: this.state.call_type,
      trade_type: this.state.trade_type,
      trl_type: this.state.trl_type,
      FT1_type: this.state.FT1_type,
      FT2_type: this.state.FT2_type,
      FT3_type: this.state.FT3_type,
      FT4: this.state.FT4,
      FT5: this.state.FT5,
      FT6: this.state.FT6,
      FT7: this.state.FT7,
      t5: this.state.t5,
      status: this.state.status,
      cstmMsg: this.state.cstmMsg,
      sl_type: this.state.sl_type,
      tradeStatus: this.state.tradeStatus,
    };

    

    axiosConfig
      .post(`/admin/editFnoindex/${id}`, obj)
      .then((response) => {
        console.log(response);
        console.log("EditFNOIndex", response.data.data.active_value2);
       
        swal("Success!", "Submitted SuccessFull!", "success");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status === 400) {
          // Handle the 400 status code here
          console.log("Bad Request:", error.response.data);
          // You can use swal or other UI notifications to display the error message
          swal("Error!", "Oops!: " + error.response.data.error, "error");
        } else {
          // Handle other errors
          console.error("An error occurred:", error.message);
          swal("Error!", "An error occurred", "error");
        }
      });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Trade"
          breadCrumbParent="Home"
          breadCrumbActive=" Edit FNO Index"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit FNO Index
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
            <Form className="m-1" onSubmit={(e) => this.submitHandler(e)}>
              <Row className="mb-2">
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Script Name</Label>
                  <CustomInput
                    type="select"
                    name="fnoindex_scrpt_name"
                    // disabled
                    value={this.state.fnoindex_scrpt_name}
                    onChange={this.changeHandler}
                  >
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
                    // disabled
                    value={this.state.expiryDate}
                    onChange={this.changeHandler}
                  >
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
                    type="select"
                    // disabled
                    value={this.state.script_type}
                    onChange={this.changeHandler}
                  >
                    <option>BUY</option>
                    <option>SELL</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Trade Type</Label>
                  <Input
                    id="exampleSelect"
                    name="trade_type"
                    type="select"
                    disabled
                    value={this.state.trade_type}
                    onChange={this.changeHandler}
                  >
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
                    id="exampleSelect"
                    name="call_type"
                    // disabled
                    type="select"
                    value={this.state.call_type}
                    onChange={this.changeHandler}
                  >
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
                    type="number"
                    // disabled
                    placeholder="Enter Active Value"
                    name="active_value"
                    value={this.state.active_value}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" className="mb-2">
                  <Label>Range Value</Label>
                  <Input
                    type="number"
                    // placeholder="Enter TRAIL"
                    name="active_value2"
                    value={this.state.active_value2}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Number Of Lots</Label>
                  <Input
                    type="number"
                    name="no_of_lots"
                    // disabled
                    placeholder="Enter Lots Price"
                    value={this.state.no_of_lots}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                <Label className="mb-1">SL</Label>
                <Input
                    type="number"
                    name="Sl value"
                    // disabled
                    onChange={this.changeHandler}
                  />
                <div className="form-label-group">
                  <input
                    style={{ marginRight: "3px" }}
                    type="checkbox"
                    name="sl_type"
                    onChange={(e) => this.changeHandler6(e)}
                    checked={
                      this.state.sl_type === "false" ||
                      this.state.sl_type === false
                        ? false
                        : true
                    }
                  />
                  <span style={{ marginRight: "20px" }}>
                    {this.state.sl_type}
                  </span>
                </div>
              </Col>

              <Row className="mb-2">
                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">TRAIL</Label>
                  <Input
                    type="number"
                    name="Sl value"
                    // disabled
                    onChange={this.changeHandler}
                  />
                  <div className="form-label-group">
                    <input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="trl_type"
                      onChange={(e) => this.changeHandler7(e)}
                      checked={
                        this.state.trl_type === "false" ||
                        this.state.trl_type === false
                          ? false
                          : true
                      }
                    />
                    <span style={{ marginRight: "20px" }}>
                      {this.state.trl_type}
                    </span>
                  </div>
                </Col>

                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">T1</Label>
                  <Input
                    type="number"
                    name="t1 value"
                    // disabled
                    onChange={this.changeHandler}
                  />
                  <div className="form-label-group">
                    <input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="FT1_type"
                      readOnly
                      onChange={(e) => this.changeHandler2(e)}
                      checked={
                        this.state.FT1_type === "false" ||
                        this.state.FT1_type === false
                          ? false
                          : true
                      }
                    />
                    <span style={{ marginRight: "20px" }}>
                      {this.state.FT1_type}
                    </span>
                  </div>
                </Col>

                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">T2</Label>
                  <Input
                    type="number"
                    name="t2 value"
                    // disabled
                    onChange={this.changeHandler}
                  />
                  <div className="form-label-group">
                    <input
                      readOnly
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="FT2_type"
                      onChange={(e) => this.changeHandler3(e)}
                      checked={
                        this.state.FT2_type === "false" ||
                        this.state.FT2_type === false
                          ? false
                          : true
                      }
                    />
                    <span style={{ marginRight: "20px" }}>
                      {this.state.FT2_type}
                    </span>
                  </div>
                </Col>

                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">T3</Label>
                  <Input
                    type="number"
                    name="t3 value"
                    // disabled
                    onChange={this.changeHandler}
                  />
                  <div className="form-label-group">
                    <input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="FT3_type"
                      onChange={(e) => this.changeHandler4(e)}
                      checked={
                        this.state.FT3_type === "false" ||
                        this.state.FT3_type === false
                          ? false
                          : true
                      }
                    />
                    <span style={{ marginRight: "20px" }}>
                      {this.state.FT3_type}
                    </span>
                  </div>
                </Col>

                <Col lg="3" md="3" className="mb-2">
                  <Label>T4</Label>
                  <Input
                    type="number"
                    placeholder="Enter Target 4"
                    name="FT4"
                    value={this.state.FT4}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="3" md="3" className="mb-2">
                  <Label>T5</Label>
                  <Input
                    type="number"
                    placeholder="Enter Target 5"
                    name="FT5"
                    value={this.state.FT5}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="3" md="3" className="mb-2">
                  <Label>T6</Label>
                  <Input
                    type="number"
                    placeholder="Enter Target 6"
                    name="FT6"
                    value={this.state.FT6}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="3" md="3" className="mb-2">
                  <Label>T7</Label>
                  <Input
                    type="number"
                    placeholder="Enter Target 7"
                    name="FT7"
                    value={this.state.FT7}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" className="mb-2">
                  <Label>Trade Alert</Label>
                  <Input
                    type="text"
                    placeholder="Keep booking or trailing stop loss"
                    name="cstmMsg"
                    value={this.state.cstmMsg}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1">Trade Status Change</Label>
                  <div
                    className="form-label-group"
                    onChange={this.changeHandler_tradeStatus}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                      checked={this.state.tradeStatus == 'Active'}
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Closed"
                      checked={this.state.tradeStatus == 'Closed'}
                    />
                    <span style={{ marginRight: "3px" }}>Completed</span>
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
                    Update FNO Index
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
            <h3>Trade Alerts :</h3>
            <ul>
              {this.state.alertHistory?.map((alertH) => (
                <li value={alertH?._id} key={alertH?._id}>
                  {alertH?.alert_message} | { new Date(alertH?.createdAt).toLocaleString() }
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default EditFnoIndex;



