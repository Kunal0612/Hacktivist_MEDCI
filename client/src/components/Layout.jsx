import React from "react";
import "../styles/LayoutStyles.css";
import { adminMenu, userMenu } from "../Data/data.jsx";
import { Badge, message } from "antd";
import BellFilled from '@ant-design/icons'
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
            <div className="menu mt-4 mb-10 p-1 font-[600] bg-purple-600">
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
                  </svg>

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
