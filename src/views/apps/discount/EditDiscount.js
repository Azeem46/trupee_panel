import React, { Component } from "react";
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
// import Textarea from "../../../forms/form-elements/textarea/Textarea";

class EditDiscount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "",
        dis_type: "",
        dis_amt: "",
        plan: "",
        userid: "",
        startdate: "",
        expdate:""

    };
    this.state = {
      
      planN: [],
      userN: [],
    };
  }
  async componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getone_equityCash/${id}`, {
        // headers: {
        //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
        // },
      })
      .then((response) => {
        console.log(response);
        this.setState({
        title: response.data.data.title,
        dis_type:response.data.data.dis_type,
        dis_amt: response.data.data.dis_amt,
        plan: response.data.data.plan,
        userid: response.data.data.userid,
        startdate: response.data.data.startdate,
        expdate: response.data.data.expdate,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //plan//
    axiosConfig
      .get("/allmembership")
      .then((response) => {
        console.log(response);
        this.setState({
          // scriptT: response.data.data,
          planN: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  
     //User//
     axiosConfig
     .get("/getuser")
     .then((response) => {
       console.log(response);
       this.setState({
         // scriptT: response.data.data, pack_name
         userN: response.data.data,
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
      .post(`/edit_equityCash/${id}`, this.state, {
        // headers: {
        //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
        // },
      })
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/trade/equityCashList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Equity Cash"
          breadCrumbParent="Home"
          breadCrumbActive="Edit Equity Cash"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Equity Cash
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/trade/equityCashList")}
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
                  <Label>Title</Label>
                  <Input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <div>
                    <Label>FALT&Percentage</Label>
                    <Input
                      type="select"
                      name="dis_type"
                      value={this.state.dis_type}
                      onChange={this.changeHandler}
                    >
                      <option value="Option 1">Select Option</option>
                      <option value="Option 2">FLAT</option>
                      <option value="Option 3">Percentage</option>
                    </Input>
                    <Input
                      type="text"
                      name="dis_amt"
                      value={this.state.dis_amt}
                      onChange={this.changeHandler}
                    />
                  </div>
                </Col>
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Discount Code</Label>
                  <Input readOnly type="text" placeholder="code" />
                </Col> */}
                <Col lg="6" md="6" className="mb-2">
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    placeholder="Enter Discount Price"
                    name=" startdate"
                    value={this.state.startdate}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Expiry Date</Label>
                  <Input
                    type="date"
                    placeholder="Enter Discount Price"
                    name=" expdate"
                    value={this.state.expdate}
                    onChange={this.changeHandler}
                  />
                </Col>
            
              
          
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Script</Label>
                  <CustomInput
                    type="select"
                    name="script_type"
                    value={this.state.script_type}
                    onChange={this.changeHandler}
                  >
                    {this.state.scriptT?.map((allScript) => (
                      <option value={allScript?._id} key={allScript?._id}>
                        {allScript?.script_type}
                      </option>
                    ))}
                  </CustomInput>
                </Col> */}
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>User Name</Label>
                  <CustomInput
                    type="select"
                    name="userid"
                    value={this.state.userid}
                    onChange={this.changeHandler}
                  >
                    {this.state.userN?.map((allUser) => (
                      <option value={allUser?._id} key={allUser?._id}>
                        {allUser?.firstname}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Equity Script</Label>
                  <Input
                    id="exampleSelect"
                    name="equity_script"
                    type="select"
                    value={this.state.equity_script}
                    onChange={this.changeHandler}
                  >
                    <option>Select Script</option>
                    <option>CE</option>
                    <option>PF</option>
                    <option>BUY</option>
                    <option>SELL</option>
                  </Input>
                </Col>
              
                
                <Col lg="6" md="6" className="mb-2">
                  <div>
                    <Label>P&L</Label>
                    <Input
                      type="select"
                      name="pl_type"
                      value={this.state.pl_type}
                      onChange={this.changeHandler}
                    >
                      <option value="Option 1">Select Option</option>
                      <option value="Option 2">Profit</option>
                      <option value="Option 3">Loss</option>
                    </Input>
                    <Input
                      type="text"
                      name="profit_loss"
                      value={this.state.profit_loss}
                      onChange={this.changeHandler}
                    />
                  </div>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Active Value</Label>
                  <Input
                    type="text"
                    placeholder="Enter Active Value"
                    name="active_value"
                    value={this.state.active_value}
                    onChange={this.changeHandler}
                  />
                </Col>
        
                <Col lg="3" md="3" sm="3" className="mb-3 mt-1">
                  <Label className="mb-1">T4</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler5(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="t4_type"
                      value="true"
                    />
                    <span style={{ marginRight: "20px" }}>True</span>
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="t4_type"
                      value="false"
                    />

                    <span style={{ marginRight: "3px" }}>False</span>
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
                    Update Equity Cash
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

export default EditDiscount;