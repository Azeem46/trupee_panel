import React from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Row,
  Col,
  Label,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { AgGridReact } from "ag-grid-react";
import { ContextLayout } from "../../../utility/context/Layout";
import { ChevronDown, Trash2, Eye, Edit } from "react-feather";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import { Route } from "react-router-dom";
import swal from "sweetalert";
class MembershipList extends React.Component {
  state = {
    rowData: [],
    plan_list:[],
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
      },
      {
        headerName: "First Name",
        field: "firstname",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.firstname}</span>
            </div>
          );
        },
      },
      {
        headerName: "Last Name",
        field: "lastname",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.lastname}</span>
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
              <span>{params.data?.mobile}</span>
            </div>
          );
        },
      },

      {
        headerName: "Email",
        field: "email",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.email}</span>
            </div>
          );
        },
      },
      {
        headerName: "Date Of Birth",
        field: "dob",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.dob}</span>
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
              <span>{params.data?.gender}</span>
            </div>
          );
        },
      },
      {
        headerName: "Membership",
        field: "pack_name",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.pack_name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Start Date",
        field: "date",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.start_date}</span>
            </div>
          );
        },
      },
      {
        headerName: "Expire Date",
        field: "expdate",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.expdate}</span>
            </div>
          );
        },
      },

      {
        headerName: "Status",
        field: "status",
        width: 130,
        cellRendererFramework: (params) => {
          return params.value === "Active" ? (
            <div className="badge badge-pill badge-success">
              {params.data.status}
            </div>
          ) : params.value === "Deactive" ? (
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
        pinned: window.innerWidth > 992 ? "right" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {/* <Route
                render={({ history }) => (
                  <Eye
                    className="mr-50"
                    color="green"
                    size={20}
                    onClick={() =>
                      history.push(`/app/users/viewUsers/${params.data._id}`)
                    }
                  />
                )}
              /> */}
              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push(
                        `/app/membership/editMembership/${params.data.membership_id}`
                      )
                    }
                  />
                )}
              />

              {/* <Trash2
                className="mr-50"
                size="25px"
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
    //43.205.127.63:5000/admin/memberByType/Free
    // http:
    this.membershipDataList();

    axiosConfig
      .get(`/admin/plan_list_membership_update`)
      .then((response) => {
        console.log(response);
        this.setState({
          plan_list: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  membershipDataList = () => {
    axiosConfig.get("/admin/allmembership").then((response) => {
      const rowData = response.data.data;
      this.setState({ rowData });
    });
  };
  submitHandler = (e) => {
    axiosConfig
      .get(`/admin/allmembership?plan_id=${this.state.plan}`)
      .then((resp) => {
        this.setState({ rowData: resp.data.data });
        console.log(resp.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
          axiosConfig.get(`/admin/dlt_membership/${id}`).then((response) => {
            this.membershipDataList();
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

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Membership List"
          breadCrumbParent="Membership"
          breadCrumbActive="Membership List"
        />

        <Card className="overflow-hidden agGrid-card">
          <Row className="m-2">
            <Col lg="2" md="2" sm="2" className="">
              Filter Plan
            </Col>
            <Col lg="4" md="4" sm="4" className="">
              <Input
                type="select"
                name="plan"
                required
                onChange={this.changeHandler}
                defaultValue=""
              >
                {/* <option value="" disabled>
                  Select Plan
                </option>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option> */}

                <option key="" value="">
                  --- Select Plan ---
                </option>
                {this.state.plan_list.map((plan) => (
                  <option key={plan._id} value={plan._id}>
                    {plan.pack_name}
                  </option>
                ))}
              </Input>
            </Col>
            <Col lg="4" md="3" sm="6" className="">
              <Button
                className="float-right btn btn-success"
                onClick={(e) => this.submitHandler(e)}
              >
                Filter Data
              </Button>
            </Col>
            {/* <Col sm="6">
              <h1 className="float-left">Membership List</h1>
            </Col> */}
          </Row>
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
                        onChange={(e) => this.updateSearchQuery(e.target.value)}
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
      </React.Fragment>
    );
  }
}
export default MembershipList;
