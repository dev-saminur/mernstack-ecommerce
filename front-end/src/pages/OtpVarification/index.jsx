import React, { useState } from "react";
import { Button, Alert, Space, Input, Form } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";

const OtpVarification = () => {
  const [loading, setLoading] = useState(false);

  let params = useParams();
  console.log(params.email);
  const onFinish = async (values) => {
    setLoading(true);
    console.log("Success:", values.otp);
    let data = await axios.post(
      "http://localhost:8000/api/v1/auth/otpvarification",
      {
        email: params.email,
        otp: values.otp,
      }
    );
    console.log(data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div>
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
            label="Code"
            name="otp"
            rules={[
              {
                required: true,
                message: "Please input your otp!",
              },
            ]}
          >
            <Input />
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
      </div>
    </>
  );
};

export default OtpVarification;
