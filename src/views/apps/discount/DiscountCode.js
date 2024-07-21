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
      expdate: "",
    };
    this.state = {
      planN: [],
      userN: [],
    };
  }
  async componentDidMount() {

    //plan//
    axiosConfig
      .get("/plan_list")
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
      .post(`/add_discount/${id}`, this.state, {
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
          breadCrumbTitle="Discount Code"
          breadCrumbParent="Home"
          breadCrumbActive="Add Discount Code"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Discount Code
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/discount/discountList")}
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
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Membership Plan</Label>
                  <CustomInput
                    type="select"
                    name="pack_name"
                    value={this.state.pack_name}
                    onChange={this.changeHandler}
                  ><option>Select Plan</option>
                    <option>Free</option>
                    {this.state.planN?.map((allPlan) => (
                      <option value={allPlan?._id} key={allPlan?._id}>
                        {allPlan?.pack_name}
                      </option>
                    ))}
                  </CustomInput>
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
              </Row>

              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add
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
