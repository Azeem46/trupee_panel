import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Label,
  Input,
  Card,
  CardTitle,
} from "reactstrap";
import "../../../assets/scss/pages/users-profile.scss";
import adminpimg from "../../../assets/img/admin.png";
import CheckBoxesVuexy from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      cnfmPassword: "",
      password: "",
      adminimg: "",
      selectedName: "",
      selectedFile: null,
      data: {},
    };
  }

  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
  };

  componentDidMount() {
    let adminId = localStorage.getItem("userId");
    axiosConfig
      .get(`/admin/viewoneadmin/${adminId}`)
      .then((response) => {
        this.setState({
          data: response.data.data,
          name: response.data.data.name,
          email: response.data.data.email,
          mobile: response.data.data.mobile,
          password: response.data.data.password,
          cnfmPassword: response.data.data.cnfmPassword,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    let adminId = localStorage.getItem("userId");
    e.preventDefault();

    const data = new FormData();
    data.append("name", this.state.name);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    data.append("password", this.state.password);
    data.append("cnfmPassword", this.state.cnfmPassword);
    if (this.state.selectedFile !== null) {
      data.append("adminimg", this.state.selectedFile, this.state.selectedName);
    }
    axiosConfig
      .post(`admin/editAdmin/${adminId}`, data, {
        headers: {
          "ad-token": localStorage.getItem("ad-token"),
        },
      })
      .then((response) => {
        console.log(response.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        window.location.reload("/#/pages/profile");
      })

      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error.response);
      });
  };
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Profile"
          breadCrumbParent="Pages"
          breadCrumbActive="Profile"
        />
        <div id="user-profile">
          <Row className="m-0 justify-content-center">
            <Col lg="4" md="4" xl="4" sm="12">
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <div className="profile-img text-center st-1">
                  <img
                    src={
                      this.state.data?.adminimg
                        ? this.state.data?.adminimg
                        : adminpimg
                    }
                    alt="adminimg"
                    className="rounded-circle"
                    width="150"
                    height="150"
                  />
                  <ul className="lst-1">
                    <li className="lst-2">
                      Name:
                      <span className="lst-3">{this.state.data.name}</span>
                    </li>
                    <li className="lst-2">
                      Mobile:
                      <span className="lst-3">{this.state.data.mobile}</span>
                    </li>
                    <li className="lst-2">
                      Email:
                      <span className="lst-3">{this.state.data.email}</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col
              sm="12"
              xl="8"
              lg="8"
              md="8"
              className="d-flex justify-content-center"
            >
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <Form className="m-1" onSubmit={this.submitHandler}>
                  <div className="st-2">
                    <CardTitle>
                      <h4 className="mb-3">Edit Profile</h4>
                      <Col></Col>
                    </CardTitle>
                    <Row className="m-0">
                      <Col sm="12" className="p-0">
                        <Label>Name</Label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={this.state.name}
                          onChange={this.changeHandler}
                        />
                        <Label>Email</Label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="email"
                          value={this.state.email}
                          onChange={this.changeHandler}
                        />
                        <Label>Mobile No.</Label>
                        <Input
                          type="number"
                          name="mobile"
                          placeholder="Mobile No."
                          value={this.state.mobile}
                          onChange={this.changeHandler}
                        />

                        <Label>User Image</Label>
                        <Input
                          className="form-control"
                          type="file"
                          name="adminimg"
                          onChange={this.onChangeHandler}
                        />
                        <CheckBoxesVuexy
                          color="primary"
                          icon={<Check className="vx-icon" size={16} />}
                          label=" I accept the terms & conditions."
                          defaultChecked={true}
                        />
                        <div className="d-flex justify-content-between">
                          <Button.Ripple color="primary" type="submit">
                            Submit
                          </Button.Ripple>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default Profile;
