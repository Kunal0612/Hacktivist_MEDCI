import React from "react";
import "../styles/LayoutStyles.css";
import { adminMenu, userMenu } from "../Data/data.jsx";
import { Badge, message } from "antd";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  // logout function
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout successfully");
    navigate("/");
  };
  // doctor menu

  const doctorMenu = [
    {
      name: "Home",
      path: "/user-home",
      icon: "fa-solid fa-house",
    },
    {
      name: "Appointments",
      path: "/doctor-appointments",
      icon: "fa-solid fa-list",
    },
    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "fa-solid fa-user",
    },
  ];

  // rendering menu list
  const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;
  return (
    <>
      <div className="main mb-[10px] p-4">
        <div className="layout h-full  p-1">
          <div className="sidebar shadow-lg shadow-purple-300 bg-purple-600  border  h-full ">
            <div className="logo border">
              <h3>DOC APP</h3>
              <hr />
            </div>
            <div className="menu mt-4 mb-10 p-1 font-[600]">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
              <div className={`menu-item`} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/">Logout</Link>
              </div>
            </div>
          </div>

          <div className="content mb-10 h-full">
            <div className="header border-4 border-purple-600 rounded-lg shadow-md">
              <div className="header-content" style={{ cursor: "pointer" }}>
                {/* count={user && user.notification?.length} */}
                <Badge
                  count={user && user.notification?.length}
                  onClick={() => {
                    navigate("/notification");
                  }}
                >
                  <i class="fa-solid fa-bell" />
                </Badge>
                <Link to="/profile" className="text-purple-600">{user?.name}</Link>
              </div>
            </div>
            <div className="body  border-4 border-purple-600 rounded-lg shadow-md h-full">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
