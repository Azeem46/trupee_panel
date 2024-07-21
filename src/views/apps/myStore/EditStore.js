import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Row,
  Input,
  CustomInput,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
// export class EditStore extends Component {
const EditStore = (props) => {
  const {
    // buttonLabel,
    // requestfordelete,
    className,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // render() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Edit Store Details</CardTitle>
        </CardHeader>
        <CardBody>
          <Form className="m-1">
            <Row className="mb-2">
              <Col lg="4" md="4" sm="4" className="mb-2">
                <Label>Store ID:</Label>
                <Input type="email" placeholder="Email" />
              </Col>
              <Col lg="4" md="4">
                <Label>Store Name: </Label>
                <Input type="text" placeholder="Enter Category" name="" />
              </Col>
              <Col lg="4" md="4" sm="4" className="mb-2">
                <Label>Store Email:</Label>
                <Input type="email" placeholder="Email" />
              </Col>{" "}
              <Col lg="4" md="4" sm="4" className="mb-2">
                <Label>Mobile Number:</Label>
                <Input
                  required
                  type="text"
                  placeholder="Mobile Number"
                  name="mobile_no"
                  // value={this.state.mobile_no}
                  // onChange={this.changeHandler}
                />
              </Col>
              <Col lg="4" md="4" sm="4" className="mb-2">
                <Label>VAT/GSTIN No:</Label>
                <Input
                  type="text"
                  placeholder="VAT/GSTIN No:"
                  name="num"
                  // value={this.state.phone_no}
                  // onChange={this.changeHandler}
                />
              </Col>
              <Col lg="4" md="4" className="mb-1">
                <Label>Store Address: *</Label>
                <Input type="textarea" name="text" />
              </Col>
              <Col lg="4" md="4" sm="4" className="mb-2">
                <Label>City / District:</Label>
                <CustomInput
                  required
                  type="select"
                  placeholder="City"
                  name="city"
                  // value={this.state.city}
                  // onChange={this.changeHandler}
                >
                  <option value="indore">Indore</option>
                  <option value="sagar">Sagar</option>
                  <option value="jabalpur">Jabalpur</option>
                  <option value="delhi">Delhi</option>
                </CustomInput>
              </Col>
              <Col lg="4" md="4" sm="4" className="mb-2">
                <Label>State:</Label>
                <CustomInput
                  required
                  type="select"
                  placeholder="State"
                  name="state"
                  // value={this.state.state}
                  // onChange={this.changeHandler}
                >
                  <option value="state">State</option>
                  <option value="mp">MP</option>
                  <option value="goa">Goa</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="gujarat">Gujarat</option>
                </CustomInput>
              </Col>
              <Col lg="4" md="4" sm="4" className="mb-2">
                <Label>Country:</Label>
                <CustomInput
                  required
                  type="select"
                  placeholder="Country"
                  name="country"
                  // value={this.state.country}
                  // onChange={this.changeHandler}
                >
                  <option value="country">Country</option>
                  <option value="algeria">Algeria</option>
                  <option value="austria">Austria</option>
                  <option value="canada">Canada</option>
                  <option value="UK">UK</option>
                </CustomInput>
              </Col>
              <Col lg="4" md="4" sm="4" className="mb-2">
                <Label>PinCode:</Label>
                <Input
                  required
                  type="text"
                  placeholder="Pin Code"
                  name="pincode"
                  //  value={this.state.pincode}
                  //  onChange={this.changeHandler}
                />
              </Col>
              <Col lg="4" md="4">
                <Label>Choose Store Logo:</Label>
                <Input type="file" name="file" placeholder="logo" />
              </Col>
            </Row>
            <Row>
              <Button.Ripple
                color="primary"
                type="submit"
                className="mr-1 mb-1"
              >
                Update
              </Button.Ripple>
              <Button
                color="danger"
                type="submit"
                className="mr-1 mb-1"
                onClick={toggle}
              >
                Request for delete !
              </Button>
              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>
                    Do Something
                  </Button>{" "}
                  <Button color="secondary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};
// }
export default EditStore;

//  {/* <Col lg="4" md="4">
//                 <Label> </Label>
//                 <CustomInput type="select" placeholder="" name="" >
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 </CustomInput>
//               </Col> */}
//               {/* <Col lg="4" md="4" sm="4" className="mb-2 mt-1">
//                 <Label className="mb-1">Status</Label>
//                 <div
//                   className="form-label-group"
//                  // onChange={(e) => this.changeHandler1(e)}
//                 >
//                   <input
//                     style={{ marginRight: "3px" }}
//                     type="radio"
//                     name="status"
//                     value="Active"
//                   />
//                   <span style={{ marginRight: "20px" }}>Active</span>

//                   <input
//                     style={{ marginRight: "3px" }}
//                     type="radio"
//                     name="status"
//                     value="Inactive"
//                   />
//                   <span style={{ marginRight: "3px" }}>Inactive</span>
//                 </div>
//               </Col> */}
