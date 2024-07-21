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
} from "reactstrap";
import swal from "sweetalert";

import axiosConfig from "../../../axiosConfig";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown, Smartphone } from "react-feather";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";

class FnoEquityList extends React.Component {
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

    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 100,
        filter: true,
      },
      {
        headerName: "Script Name",
        field: "scriptName",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.fnoequty_scrpt_name?.scriptName}</span>
            </div>
          );
        },
      },
      {
        headerName: "Equity Script",
        field: "script_type",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex  align-items-center cursor-pointer">
              <span>{params.data.script_type}</span>
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
        headerName: "T₹ 1",
        field: "T1",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.T1}</span>
            </div>
          );
        },
      },
      {
        headerName: "T₹ 2",
        field: "T2",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.T2}</span>
            </div>
          );
        },
      },
      {
        headerName: "T₹ 3",
        field: "T3",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.T3}</span>
            </div>
          );
        },
      },
      {
        headerName: "T₹ 4",
        field: "T4",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.T4}</span>
            </div>
          );
        },
      },
      {
        headerName: "T5",
        field: "t5",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.t5}</span>
            </div>
          );
        },
      },
      {
        headerName: "P&L ",
        field: "pl",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.pl}</span>
            </div>
          );
        },
      },
      {
        headerName: "PL% ",
        field: "pl_per",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.pl_per} </span>
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
        headerName: "Expiry Date ",
        field: "expDate",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.expiryDate?.expDate}</span>
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
        headerName: "Trade Alert",
        field: "tradealert",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.no_of_lots}</span>
            </div>
          );
        },
      },
      {
        headerName: "Status ",
        field: "status",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "Active" ? (
            <div className="badge badge-pill badge-success">
              {params.data.status}
            </div>
          ) : params.value === "Deactive" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.status}
            </div>
          ) : (
            <div className="badge badge-pill badge-danger">
              {params.data.status}
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
              <Smartphone
                className="mr-50"
                size="25px"
                color={params.data.status === "Active" ? "green" : "red"}
                onClick={() => {
                  let selectedData = this.gridApi.getSelectedRows();
                  this.runthisfunctionEdit(params.data._id, selectedData);
                }}
              />
              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push(
                        `/app/trade/editFnoEquity/${params.data._id}`
                      )
                    }
                  />
                )}
              />

              <Trash2
                size={20}
                color="red"
                onClick={() => {
                  this.runthisfunction(params.data._id);
                }}
              />
            </div>
          );
        },
      },
    ],
  };

  componentDidMount() {
    this.fnoEquity();
  }
  fnoEquity = () => {
    axiosConfig.get(`admin/fnoEquity_list`).then((response) => {
      const rowData = response.data.data;
      this.setState({ rowData });
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
          axiosConfig.get(`/admin/dlt_alltrade/${id}`).then((response) => {
            this.fnoEquity();
          });
          break;
        default:
          break;
      }
    });
  }

  async runthisfunctionEdit(id, selectedData) {
    console.log("@@selectedData", id, selectedData[0].t1);
    //
    let status = selectedData[0].status === "Active" ? "Deactive" : "Active";
    let payload = {
      // expiryDate:selectedData[0].expiryDate,
      // script_type:selectedData[0].script_type,
      // fnoequty_scrpt_name:selectedData[0].fnoequty_scrpt_name,
      // call_type:selectedData[0].call_type,
      // active_value:selectedData[0].active_value,
      // T1:selectedData[0].T1,
      // T2:selectedData[0].T2,
      // T3:selectedData[0].T3,
      // T4:selectedData[0].T4,
      // trl:selectedData[0].trl,
      // trl_type:selectedData[0].trl_type,
      // t1_type:selectedData[0].t1_type,
      // t2_type:selectedData[0].t2_type,
      // t3_type:selectedData[0].FT3_type,
      // t4_type:selectedData[0].t4_type,
      // qty:selectedData[0].qty,
      // sl_type:selectedData[0].sl_type,
      // no_of_lots:selectedData[0].no_of_lots,
      // trade_type:selectedData[0].trade_type,
      // type:selectedData[0].type,
      status: status,
    };
    await axiosConfig
      .post(`admin/editalltrade/${id}`, payload)
      .then((response) => {
        swal("Success!", "Status " + status + " SuccessFull!", "success");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
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
                <h1 sm="6" className="float-left">
                  Fno Option List
                </h1>
              </Col>
              <Col className="pt-4">
                <Route
                  render={({ history }) => (
                    <Button
                      className=" btn btn-success float-right"
                      onClick={() => history.push("/app/trade/AddFnoEquity")}
                    >
                      Add Fno Option
                    </Button>
                  )}
                />
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
export default FnoEquityList;
