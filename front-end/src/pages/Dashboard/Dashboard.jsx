import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Col, Row } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const items = [
    {
      key: "sub1",
      label: "Users",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "1",
          label: "Add User",
        },
        {
          key: "2",
          label: "View User",
        },
      ],
    },
    {
      key: "sub2",
      label: "Product",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "3",
          label: "Add Product",
        },
        {
          key: "4",
          label: "View Product",
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub3",
      label: "Catrgory",
      icon: <SettingOutlined />,
      children: [
        {
          key: "/dashboard/addcategory",
          label: "Add Category",
        },
        {
          key: "6",
          label: "View Catrgory",
        },
        {
          key: "7",
          label: "Add subatrgory",
        },
        {
          key: "8",
          label: "View subcategory",
        },
      ],
    },
    {
      key: "sub4",
      label: "Discount",
      icon: <SettingOutlined />,
      children: [
        {
          key: "9",
          label: "Add Discount",
        },
        {
          key: "10",
          label: "View Discount",
        },
      ],
    },
  ];
  const onClick = (e) => {
    console.log("click ", e);
    navigate(e.key);
  };
  return (
    <>
      <Row gutter={16}>
        <Col span={4}>
          <Menu
            onClick={onClick}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </Col>
        <Col span={20}>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
