import React from "react";
import { useState, useEffect } from "react";
import adminProfile from "../../../assets/img/admin.png";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import * as Icon from "react-feather";
import { Route } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";

const handleNavigation = (e, path) => {
  e.preventDefault();
  window.location.replace(path);
};
const handleNavigationbar = (e, path) => {
  e.preventDefault();
  window.location.replace(path);
};

const NavbarUser = () => {
  const [adminimg, setAdminimg] = useState({});
  const tokenVerify = () => {
    let data = localStorage.getItem("ad-token");
    sessionStorage.clear();
    if (data === undefined || data === null) {
      window.location.replace("/#/pages/login");
    }
  };

  useEffect(() => {
    let adminId = localStorage.getItem("userId");
    tokenVerify();
    async function getNotifications() {
      try {
        const data = await axiosConfig.get(`/admin/viewoneadmin/${adminId}`);
        setAdminimg(data.data.data);
      } catch (error) {}
    }
    getNotifications();
  }, []);

  return (
    <ul className="nav navbar-nav navbar-nav-user float-right">
      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
        <DropdownToggle tag="a" className="nav-link dropdown-user-link">
          <div className="user-nav d-sm-flex d-none">
            <span className="user-name text-bold-600" color="#fff">
              {adminimg.name}
            </span>
          </div>
          <span data-tour="user">
            <img
              src={adminimg.adminimg ? adminimg.adminimg : adminProfile}
              className="round"
              height="40"
              width="40"
              alt="avatar"
            />
          </span>
        </DropdownToggle>
        <DropdownMenu right style={{ width: "fit-content" }}>
          <DropdownItem
            tag="a"
            href="#"
            onClick={(e) => handleNavigation(e, "/#/pages/profile")}
          >
            <Icon.User size={14} className="mr-50" />
            <span className="align-middle">Edit Profile</span>
          </DropdownItem>
          <DropdownItem divider />
          <Route
            render={({ history }) => (
              <DropdownItem
                tag="a"
                onClick={(e) =>
                  handleNavigationbar(e, "/#/pages/changepassword")
                }
              >
                <Icon.Lock size={14} className="mr-50" />
                <span className="align-middle">Change Password</span>
              </DropdownItem>
            )}
          />
          <DropdownItem divider />
          <Route
            render={({ history }) => (
              <DropdownItem
                tag="a"
                onClick={(e) => {
                  localStorage.removeItem("ad-token");
                  window.location.replace("/#/pages/login");
                }}
              >
                <Icon.Power size={14} className="mr-50" />
                <span className="align-middle">Log Out</span>
              </DropdownItem>
            )}
          />
        </DropdownMenu>
      </UncontrolledDropdown>
    </ul>
  );
};
export default NavbarUser;
