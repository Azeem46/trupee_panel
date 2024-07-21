import React from "react";
import {
  Row,
  Card,
  CardBody,
  Input,
  Button,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
// import axios from "axios";
import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";
import { AgGridReact } from "ag-grid-react";
import { ContextLayout } from "../../../utility/context/Layout";
import { ChevronDown, Trash2 } from "react-feather";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import { Route } from "react-router-dom";
// import moment from "moment";

class RefferalWalletList extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    // {
    //   "_id": "63198fd6f72f743b37b8d342",
    //   "userid": {
    //       "_id": "631989855c73b3496d92f343",
    //       "mobile": 9893805276,
    //       "userverified": true,
    //       "refral_Code": "WY0n2D",
    //       "amount": 0,
    //       "status": "Active",
    //       "otp": "123456",
    //       "createdAt": "2022-09-08T06:19:50.020Z",
    //       "updatedAt": "2022-09-08T06:53:39.623Z",
    //       "__v": 0,
    //       "walletId": "631989855c73b3496d92f343",
    //       "dob": "1998/07/10",
    //       "email": "araj@gmail.com",
    //       "firstname": "Anjali",
    //       "gender": "Female",
    //       "lastname": "Raj"
    //   },
    //   "date": "2022-09-08",
    //   "expdate": "2023-09-08",
    //   "planId": {
    //       "_id": "62e28f41dea47c1d2b6d95f0",
    //       "pack_name": "1 Month",
    //       "mrp_price": 3999,
    //       "des_price": 1999,
    //       "status": "Active",
    //       "desc": "40% Off",
    //       "createdAt": "2022-07-28T13:29:37.597Z",
    //       "updatedAt": "2022-08-23T06:34:09.028Z",
    //       "__v": 0
    //   },
    //   "refral_Code": "CYteN0",
    //   "status": "Success",
    //   "createdAt": "2022-09-08T06:46:46.885Z",
    //   "updatedAt": "2022-09-08T06:46:46.885Z",
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 100,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },
      {
        headerName: "Name",
        field: "firstname",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>
                {params.data.userid?.firstname} {params.data.userid?.lastname}
              </span>
            </div>
          );
        },
      },
      {
        headerName: "Mobile",
        field: "mobile",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.userid?.mobile}</span>
            </div>
          );
        },
      },

      {
        headerName: "Email ID",
        field: "email",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.userid?.email}</span>
            </div>
          );
        },
      },

      {
        headerName: "Gender",
        field: "gender",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.userid?.gender}</span>
            </div>
          );
        },
      },
      {
        headerName: "Date Of Birth",
        field: "dob",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.userid?.dob}</span>
            </div>
          );
        },
      },
         {
        headerName: "Amount",
        field: "amount",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.userid?.amount}</span>
            </div>
          );
        },
      },
      {
        headerName: "Membership plan",
        field: "pack_name",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.planId?.pack_name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Start Date",
        field: "date",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              {/* <span>{moment(params.data.createdAt).format("ll")} </span> */}
              <span>{params.data.date}</span>
            </div>
          );
        },
      },

      {
        headerName: "Expiry Date",
        field: "expdate",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.expdate}</span>
              {/* <span>{moment(params.data.updatedAt).format("ll")} </span> */}
            </div>
          );
        },
      },
     
      {
        headerName: "Refferal Code",
        field: "refral_Code",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.refral_Code}</span>
            </div>
          );
        },
      },
    
   

      {
        headerName: "Status",
        field: "status",
        filter: true,
        width: 100,
        cellRendererFramework: (params) => {
          return params.value === "Success" ? (
            <div className="badge badge-pill badge-success">
              {params.data.status}
            </div>
          ) : params.value === "Pending" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.status}
            </div>
          ) : null;
        },
      },
      {
        headerName: "Actions",
        field: "sortorder",
        width: 150,
        // pinned: window.innerWidth > 992 ? "right" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {/* <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push(`/app/script/editScript/${params.data._id}`)
                    }
                  />
                )}
              /> */}

              <Trash2
                className="mr-50"
                size="25px"
                color="red"
                onClick={() => {
                  let selectedData = this.gridApi.getSelectedRows();
                  this.runthisfunction(params.data._id);
                  this.gridApi.updateRowData({ remove: selectedData });
                }}
              />
            </div>
          );
        },
      },
    ],
  };
  async componentDidMount() {
    await axiosConfig.get("/allmembership").then((response) => {
      let rowData = response.data.data;
      this.setState({ rowData });
    });
  }
  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/dlt_membership/${id}`).then((response) => {
      console.log(response);
    });
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <Row className="app-user-list">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                 Refferal Wallet List
                </h1>
              </Col>
            </Row>
            {/* <Col className="pt-4">
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-success float-right"
                    onClick={() => history.push("/app/package/addRefferalWallet")}
                  >
                    Add Refferal Wallet
                  </Button>
                )}
              />
            </Col> */}
            <CardBody className="py-0">
              {this.state.rowData === null ? null : (
                <div className="ag-theme-material w-100 my-2 ag-grid-table">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="mb-1">
                      <UncontrolledDropdown className="p-1 ag-dropdown">
                        <DropdownToggle tag="div">
                          {this.gridApi
                            ? this.state.currenPageSize
                            : "" * this.state.getPageSize -
                              (this.state.getPageSize - 1)}{" "}
                          -{" "}
                          {this.state.rowData.length -
                            this.state.currenPageSize * this.state.getPageSize >
                          0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData.length}{" "}
                          of {this.state.rowData.length}
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(20)}
                          >
                            20
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(50)}
                          >
                            50
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(100)}
                          >
                            100
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(134)}
                          >
                            134
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div className="table-input mr-1">
                        <Input
                          placeholder="search..."
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="export-btn">
                        <Button.Ripple
                          color="primary"
                          onClick={() => this.gridApi.exportDataAsCsv()}
                        >
                          Export as CSV
                        </Button.Ripple>
                      </div>
                    </div>
                  </div>
                  <ContextLayout.Consumer>
                    {(context) => (
                      <AgGridReact
                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={false}
                        pagination={true}
                        paginationPageSize={this.state.paginationPageSize}
                        pivotPanelShow="always"
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default RefferalWalletList;
