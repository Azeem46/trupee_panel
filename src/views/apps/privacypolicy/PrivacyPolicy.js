import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
// import swal from "sweetalert";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import Textarea from "../../forms/form-elements/textarea/Textarea";

class PrivacyPolicy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dealer: "",
      desc: "",
    };
    this.state = {
      dealerN: [],
    };
  }
  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle=" Privacy Policy"
          breadCrumbParent="Home"
          breadCrumbActive=" Privacy Policy"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Privacy Policy
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/ro-configuration/basicDetailsList")
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
              <Row>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                <Label> Name</Label>
                <Input
                  type="text"

                ></Input>
              </Col>


              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Email</Label>
                <Input
                  type="text"

                ></Input>
              </Col>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Mobile</Label>
                <Input
                  type="number"

                ></Input>
              </Col> */}
                <Col lg="12" md="12" sm="12" className="mb-2">
                  <Label>Descriptions</Label>
                  <Input
                    type="textarea"
                    name="desc"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                    rows="3"
                    placeholder="Textarea"
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
                    Submit
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

export default PrivacyPolicy;
