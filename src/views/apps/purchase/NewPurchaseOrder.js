import React from "react";
import Wizard from "./FormComponent";
import {
  FormGroup,
  Input,
  Label,
  CustomInput,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Button,
  Container,
  }
  from "reactstrap";

import "ag-grid-community/dist/styles/ag-grid.css";
//import { history } from "../../../history";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss"

class NewPurchaseOrder extends React.Component {
  constructor(props) {
    super(props)
      {
        this.state = {
          addTextbox:[{}]
        }
      }
    }
    addControls()
    {
      this.setState((
      {
        addTextbox:[...this.state.addTextbox,{}]
      }
      ))
    }
    delControl(i){
      this.state.addTextbox.splice(i,1);
      this.setState({})
      }

  render() {
    const steps= [
       {
        title: "1",
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Select Supplier </Label>
                <CustomInput type="select">
                  <option>Add Supplier</option>
                  <option>Add Supplier</option>
                  <option>Add Supplier</option>
                  <option>Add Supplier</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> GSTIN </Label>
                <Input type="text" placeholder="GSTIN" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Amount Are </Label>
                <CustomInput type="select">
                  <option>Select</option>
                  <option>Tax Includive</option>
                  <option>Tax Excludive</option>
                  <option>Add Supplier</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Stock Due </Label>
                <Input type="date" name="select" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Payment Due </Label>
                <Input type="date" name="select" />
              </FormGroup>
            </Col>
          </Row>
        ),
      },
     
      {
        title: "2",
        content: (
        <div>
          {this.state.addTextbox.map((index)=>(
          <div>
            {
            index ?
             <div id="btn">
              <Row>
                <Col flax="left" lg="6" md="6" sm="6" className="mb-2">
              
                <Button
                  color="primary"
                  onClick={()=>this.addControls()}
                >
                  Add 
                </Button>
                <div className="New-line">
               <hr/>
                <div className="form-check">
                    <input 
                      className="form-check-input"  
                      type="checkbox" 
                      value=""  
                      onClick={()=>this.delControl(index)} 
                    />
                    <label className="mr-1 mb-1" style={{color: "red"}}>
                      Remove
                    </label>
                    </div>
                  </div>
              </Col>
            </Row>
          </div>
        :null
        }
      
            <Row>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label>  Product Name </Label>
                  <Input type="text" placeholder=" Product Name" />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label>  SKU </Label>
                  <Input type="text" placeholder="SKU" />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label> HSN  </Label>
                  <Input type="text" rows="5" placeholder="HSN" />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label> Quantity  </Label>
                  <Input type="text" rows="5" placeholder="Quantity" />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label> Cost price  </Label>
                  <Input type="text" rows="5" placeholder="Cost price" />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label> GST  </Label>
                  <Input type="text" rows="5" placeholder="GST" />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label> Discount  </Label>
                  <Input type="text" rows="5" placeholder="Discount" />
                </FormGroup>
              </Col>
            </Row>
          </div>
          ))}
      
      </div>
    ),
      },
      {
        title: 3,
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>  Transportation Cost </Label>
                <Input type="text" placeholder="Transportation Cost" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>  Tax </Label>
                <Input type="text" placeholder="Tax" />
              </FormGroup>
            </Col>
         
            <Col md="6" sm="12">
              <FormGroup>
                <Label>  Grand Total </Label>
                <Input type="text" placeholder="Grand Total" />
              </FormGroup>
            </Col>
        
            <Col md="6" sm="12">
              <FormGroup>
                <Label>  Instructions </Label>
                <Input type="text" placeholder="Instructions"/>
              </FormGroup>
            </Col>

{/* <div id="btn">     <Button type="submit" class="btn btn-outline-primary">Back</Button>
           <Button type="submit" class="btn btn-primary">Create Purchase order</Button></div>        */}
           
          </Row>
        ),
      },
    ]
    return (
  
      <Card>
        <CardHeader>
          <h1>New Purchase Order</h1>
         
        </CardHeader>
        <CardBody>
          <Wizard
            enableAllSteps
            onFinish={() => alert("submitted")}
            steps={steps}
          />
        </CardBody>
      </Card>

    );
  }
}

export default NewPurchaseOrder;







              {/* <Col md="6" sm="12">
              <FormGroup>
                <Label> Grand Total </Label>
                <CustomInput type="select" name="select" id="status">
                  <option>Planning</option>
                  <option>In Process</option>
                  <option>Finished</option>
                </CustomInput>
              </FormGroup>
            </Col> */}
               {/* <Col md="6" sm="12">
              <FormGroup>
                <Label> Tax </Label>
                <CustomInput type="select" name="select" id="location">
                  <option>New York</option>
                  <option>Chicago</option>
                  <option>San Francisco</option>
                  <option>Boston</option>
                </CustomInput>
              </FormGroup>
            </Col> */}
            {/* <Col md="6" sm="12">
              <FormGroup>
                <Label> Event Status </Label>
                <Label className="mr-2">Requirements :</Label>
                <div className="stacked-checkbox">
                  <div className="d-inline-block mr-2">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Staffing"
                      defaultChecked={false}
                    />
                  </div>
                  <div className="d-inline-block">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Catering"
                      defaultChecked={false}
                    />
                  </div>
                </div>
              </FormGroup>
            </Col> */}