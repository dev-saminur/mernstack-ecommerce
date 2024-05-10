import React, { useState } from "react";
// import { Button, Alert, Space, Input, Form } from "antd";
// import axios from "axios";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/Registration";
import OtpVarification from "./pages/OtpVarification";
import Login from "./pages/Login";
import EmailVerifyLink from "./pages/EmailVerifyLink";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/emailverification/:token" element={<EmailVerifyLink />} />
      <Route path="/otpvarification/:email" element={<OtpVarification />} />
    </Route>
  )
);

function App() {
  // const [loading, setLoading] = useState(false);
  // const [msg, setMsg] = useState("");
  // const onFinish = async (values) => {
  //   console.log("Success:", values);
  //   setLoading(true);

  //   let data = await axios.post(
  //     "http://localhost:8000/api/v1/auth/registration",
  //     {
  //       name: values.username,
  //       email: values.email,
  //       password: values.password,
  //     },
  //     {
  //       headers: {
  //         Authorization: "saminur1234",
  //       },
  //     }
  //   );
  //   console.log(data);
  //   setLoading(false);
  //   setMsg("Registration Successfull. Please check your email");
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  return (
    <>
      <RouterProvider router={router} />
      {/* <div>
        {msg && <Alert message={msg} type="success" showIcon closable />}

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div> */}
    </>
  );
}

export default App;
