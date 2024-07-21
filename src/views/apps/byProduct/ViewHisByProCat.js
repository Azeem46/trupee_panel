
import React from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
// import {
//   Truck,
//   DollarSign,
//   ShoppingCart,
//   Heart,
//   Facebook,
//   Twitter,
//   Youtube,
//   Instagram,
// } from "react-feather";

//import classnames from "classnames";
import { history } from "../../../history";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import axiosConfig from "../../../axiosConfig";
import ViewHisByProTyp from "./ViewHisByProTyp";

class ViewHisByProCat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewoneproduct/${id}`)
      .then((response) => {
        // console.log(response.data);
        console.log(response.data.data);
        this.setState({ data: response.data.data });
        console.log(response.data.data.rate[0].rate);
        //console.log(this.state.rate[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // state = {
  //   selectedColor: 1,
  // };
  // toggleSelectedColor = (color) => this.setState({ selectedColor: color });
  render() {
    return (
      <React.Fragment>
        <Card className="overflow-hidden app-ecommerce-details">
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Activity Logs Detail
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/product/historyByProductCat")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody className="pb-0">
            <Row className="mb-5 mt-2">
              <Col
                className="d-flex align-items-start justify-content-center mb-2 mb-md-0"
                sm="12"
                md="5"
              >
                <img
                  src={this.state.data.product_img}
                  alt="Google Home"
                  height="250"
                  width="250"
                />
              </Col>
              <Col md="7" sm="12">
                <h3>{this.state.data.item_name}</h3>
                <h6 className="">by {this.state.data.brand?.name}</h6>
                <div className="d-flex flex-wrap">
                  <h3 className="text-primary">
                    {/* {this.state.data?.rate[0]?.rate} */}
                  </h3>
                </div>
                <hr />
                <h4>Short Description </h4>
                <h6>{this.state.data.short_desc}</h6>
                <hr />
                <h4>Product Description </h4>
                <h6>{this.state.data.desc}</h6>
                <hr />
                <h4>Product Code</h4>
                <h6>{this.state.data.code}</h6>
                <hr />
                <h4>HSN Code</h4>
                <h6>{this.state.data.hsn_code}</h6>
                <hr />
                <h4>Brand</h4>
                <h6>{this.state.data.brand?.name}</h6>
                <hr />
                <h4>Product Category</h4>
                <h6>{this.state.data.productcategory?.name}</h6>
                <hr />
                <h4>Product Sub Category </h4>
                <h6>{this.state.data.productsubcategory?.name}</h6>
                <hr />
                <h4>Stock Quantity </h4>
                <h6>{this.state.data.stock_qty}</h6>
                <hr />
                <h4>Size</h4>
                <h6>{this.state.data.size}</h6>
                <hr />
                <h4>Color </h4>
                <h6>{this.state.data.colour}</h6>
                <hr />
                <h4>Material </h4>
                <h6>{this.state.data.material}</h6>
                <hr />
                <h4>BarCode </h4>
                <h6>{this.state.data.barcode}</h6>
                <hr />
             
                <h6 className="my-50">
                  <span>Available</span>
                  <span className="mx-50">-</span>
                  <span className="text-success">In Stock</span>
                </h6>
               
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default ViewHisByProCat;
