import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Label,
  CustomInput,
} from "reactstrap";

import axiosConfig from "../../../axiosConfig";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
import swal from "sweetalert";
import { history } from "../../../history";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
import moment from "moment";
class FnoIndexReport extends React.Component {
  state = {
    rowData: [],
    StartDate: "",
    EndDate: "",
    list: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },

    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 100,
        filter: true,
      },

      {
        headerName: "Type Of Script",
        field: "script_type",
        width: 140,
        // pinned: window.innerWidth > 992 ? "left" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex  align-items-center cursor-pointer">
              <span>{params.data.script_type}</span>
            </div>
          );
        },
      },

      {
        headerName: "Script Name",
        field: "populatedModels.scriptName",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex  align-items-center cursor-pointer">
              <span>{params.data.populatedModels?.scriptName}</span>
            </div>
          );
        },
      },

      {
        headerName: "Trade Type",
        field: "type",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.type}</span>
            </div>
          );
        },
      },
      {
        headerName: "Call Type",
        field: "call_type",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.call_type}</span>
            </div>
          );
        },
      },
      {
        headerName: "Active Value",
        field: "active_value",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.active_value}</span>
            </div>
          );
        },
      },
      {
        headerName: "Active Value 2",
        field: "active_value2",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.active_value2}</span>
            </div>
          );
        },
      },
      {
        headerName: " SL",
        field: "SL",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.SL}</span>
            </div>
          );
        },
      },
      {
        headerName: "Trial",
        field: "trl",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.trl}</span>
            </div>
          );
        },
      },
      {
        headerName: "T₹ 1",
        field: "FT1",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.FT1}</span>
            </div>
          );
        },
      },
      {
        headerName: "T₹ 2",
        field: "FT2",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.FT2}</span>
            </div>
          );
        },
      },
      {
        headerName: "T₹ 3",
        field: "FT3",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.FT3}</span>
            </div>
          );
        },
      },
      {
        headerName: "T₹ 4",
        field: "FT4",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.FT4}</span>
            </div>
          );
        },
      },
      {
        headerName: "T5",
        field: "FT5",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.FT5}</span>
            </div>
          );
        },
      },

      {
        headerName: "Quantity",
        field: "qty",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.qty}</span>
            </div>
          );
        },
      },
      {
        headerName: "Investment Amount",
        field: "investment_amt",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.investment_amt}</span>
            </div>
          );
        },
      },
      {
        headerName: "Date",
        field: "createdAt",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{moment(params.data.createdAt).format("ll")} </span>
            </div>
          );
        },
      },

      {
        headerName: "Number Of Lots",
        field: "no_of_lots",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.no_of_lots}</span>
            </div>
          );
        },
      },
      {
        headerName: "SL Type",
        field: "sl_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.sl_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.sl_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "Trial Type",
        field: "trl_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.trl_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.trl_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "FT1 Type",
        field: "FT1_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.FT1_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.FT1_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "FT2 Type",
        field: "FT2_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.FT2_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.FT2_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "FT3 Type",
        field: "FT3_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.FT3_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.FT3_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "T1 Type",
        field: "t1_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.t1_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.t1_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "T2 Type",
        field: "t2_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.t2_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.t2_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "T3 Type",
        field: "t3_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.t3_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.t3_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "T4 Type",
        field: "t4_type",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.t4_type}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.t4_type}
            </div>
          ) : null;
        },
      },
      {
        headerName: "status ",
        field: "tradeStatus",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.data.tradeStatus === "Closed" ? (
            <div className="badge badge-pill badge-success">
              {'Completed'}
            </div>
          ) : params.data.tradeStatus === "Closed" ? (
            <div className="badge badge-pill badge-danger">
              {'Completed'}
            </div>
          ) : null;

          //   return params?.data?.FT1_type === "true" ||
          //     params?.data?.FT2_type === "true" ||
          //     params?.data?.FT3_type === "true" ||
          //     params?.data?.t1_type === "true" ||
          //     params?.data?.t2_type === "true" ||
          //     params?.data?.t3_type === "true" ||
          //     params?.data?.t4_type === "true" ||
          //     params?.data?.trl_type === "true" ||
          //     params?.data?.t5_type === "true" ? (
          //     <div className="badge badge-pill badge-success">
          //       Completed
          //       {/* {params?.data?.tradeStatus} */}
          //     </div>
          //   ) : params?.data?.sl_type === "true" ? (
          //     <div className="badge badge-pill badge-danger">
          //       {/* {params?.data?.tradeStatus} */}
          //       Completed
          //     </div>
          //   ) : null;
        },
      },
   
      {
        headerName: "Exp Date",
        field: "exp_date.expDate",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.exp_date.expDate}</span>
            </div>
          );
        },
      },
      {
        headerName: "Actions",
        field: "sortorder",
        width: 150,
        pinned: window.innerWidth > 992 ? "right" : false,

        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {" "}
              -- No Action --
              {/* <Trash2
                size={20}
                color="red"
                onClick={() => {
                  this.runthisfunction(params.data._id);
                }}
              /> */}
            </div>
          );
        },
      },
    ],
  };

  componentDidMount() {
    this.alltradeList();
  }
  changeHandlerStartDate = (e) => {
    const startDate = moment(e.target.value).format("D-MM-YYYY");
    this.setState({ StartDate: startDate });
  };
  changeHandlerEndDate = (e) => {
    const endDate = moment(e.target.value).format("D-MM-YYYY");
    this.setState({ EndDate: endDate });
  };
  alltradeList = () => {
    axiosConfig.get(`/admin/reportTrade?type=Index`).then((response) => {
      console.log(response.data.data);
      const rowDataList = response.data.data;
      const rowData = rowDataList.filter((value) => {
        if (
          value.FT1_type === "true" ||
          value?.FT2_type === "true" ||
          value?.FT3_type === "true" ||
          value?.t1_type === "true" ||
          value?.t2_type === "true" ||
          value?.t3_type === "true" ||
          value?.t4_type === "true" ||
          value?.trl_type === "true" ||
          value?.t5_type === "true" ||
          value?.sl_type === "true"
        ) {
          return value;
        }
      });
      console.log("NewList", rowData);
      const list = response.data.data;
      this.setState({ rowData });
      this.setState({ list });
    });
  };
  runthisfunction(id) {
    swal(
      `Do You Want To Delete Permanently`,
      "This item will be deleted immediately",

      {
        buttons: {
          cancel: "Cancel",
          catch: { text: "Delete ", value: "catch" },
        },
      }
    ).then((value) => {
      switch (value) {
        case "cancel":
          break;
        case "catch":
          axiosConfig.get(`/admin/dlt_alltrade/${id}`).then(() => {
            this.alltradeList();
          });
          break;
        default:
          break;
      }
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

  submitHandler = (e) => {
    console.log(this.state.StartDate, this.state.EndDate);
    axiosConfig
      .get(
        `/admin/reportTrade?type=Index&start=${this.state.StartDate}&end=${this.state.EndDate}`
      )
      .then((response) => {
        this.setState({ rowData: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <Row className="app-user-list">
        <Col sm="12">
          <Card>
            <h1 col-sm-6 className="float-left p-2">
              FNO Index Report List
            </h1>
            <Row className="m-2">
              <Col lg="4" md="3" sm="6" className="mb-2">
                <Label>Start Date</Label>
                <Input
                  type="date"
                  name="StartDate"
                  required
                  onChange={this.changeHandlerStartDate}
                ></Input>
              </Col>
              <Col lg="4" md="3" sm="6" className="mb-2">
                <Label>End Date</Label>
                <Input
                  type="date"
                  name="EndDate"
                  required
                  onChange={this.changeHandlerEndDate}
                ></Input>
              </Col>
              <Col lg="4" md="3" sm="6" className="mt-1">
                <Button
                  className="float-right btn btn-success"
                  onClick={(e) => this.submitHandler(e)}
                >
                  Filter Data
                </Button>
              </Col>
            </Row>
            <CardBody>
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
export default FnoIndexReport;
