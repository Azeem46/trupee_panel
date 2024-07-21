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
import CheckBoxesVuexy from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPass: "",
      password: "",
      cnfmPassword: "",
      data: {},
    };
  }

  //   componentDidMount() {
  //     let adminId = localStorage.getItem("userId");
  //     axiosConfig
  //       .get(`/admin/viewoneadmin/${adminId}`)
  //       .then((response) => {
  //         this.setState({
  //           password: response.data.data.password,
  //           cnfmPassword: response.data.data.cnfmPassword,
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error.response.data);
  //       });
  //   }

  changeHandler = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.password.length < 5 && this.state.cnfmPassword.length < 5) {
      swal("Error", "Password must be atleast 5 abore character ", "error");
    } else if (this.state.password !== this.state.cnfmPassword) {
      swal("Error", "Password not match", "error");
    } else {
      let password = {
        oldPass: this.state.oldPass,
        password: this.state.password,
        cnfmPassword: this.state.cnfmPassword,
      };

      let adminId = localStorage.getItem("userId");
      axiosConfig
        .post(`/admin/changeAdmingpassword/${adminId}`, password)
        .then((response) => {
          this.setState({ oldPass: "" });
          this.setState({ password: "" });
          this.setState({ cnfmPassword: "" });
          swal("Success!", "Password Changed", "success");
        })
        .catch((error) => {
          swal("Error!", "You clicked the button!", "error");
        });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Profile"
          breadCrumbParent="Pages"
          breadCrumbActive="Change Password"
        />
        <div id="user-profile">
          <Row className="m-0 justify-content-center">
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
                      <h4 className="mb-3">Change Password</h4>
                      <Col></Col>
                    </CardTitle>
                    <Row className="m-0">
                      <Col sm="12" className="p-0">
                        <Label>Old Password</Label>
                        <Input
                          type="password"
                          name="oldPass"
                          placeholder="Old Password"
                          value={this.state.oldPass}
                          onChange={this.changeHandler}
                        />
                        <Label>New Password</Label>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.changeHandler}
                        />
                        <Label>Confirm Password</Label>
                        <Input
                          type="password"
                          name="cnfmPassword"
                          placeholder="Confirm password"
                          value={this.state.cnfmPassword}
                          onChange={this.changeHandler}
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
export default ChangePassword;
