import React from "react";
import Layout from "../components/Layout";
import { Tabs, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NotificationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const handleMarkallread = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/get-all-notification",
        { userId: user._id, },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.message) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };
  const handleDeleteallread = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/delete-all-notification",
        { userId: user._id, },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.message) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong in notification");
    }
  };
  return (
    <Layout>
      <h4 className="p-3 text-center">Notifiaction Page</h4>
      <Tabs>
        <Tabs.TabPane tab="UnRead" key={0}>
          <div className="d-flex justify-center">
            <h4 className="p-2" onClick={handleMarkallread}>
              Mark all read
            </h4>
          </div>
          {user?.notification.map((notificationMsg) => (
            <div
              className="card"
              onClick={navigate(notificationMsg.onClickPath)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-text">{notificationMsg.message}</div>
            </div>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Read" key={1}>
          <div className="d-flex justify-center">
            <h4 className="p-2 text-primary" style={{ cursor: "pointer" }} onClick={handleDeleteallread}>
              Delete all read
            </h4>
          </div>
          {user?.seennotification.map((notificationMsg) => (
            <div
              className="card"
              onClick={navigate(notificationMsg.onClickPath)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-text">{notificationMsg.message}</div>
            </div>
          ))}
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
};

export default NotificationPage;
