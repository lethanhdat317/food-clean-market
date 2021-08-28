import { Form, Input, Select, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="register-container">
      <div className="login-register-form">
        <div className="login-register-title">
          <h2>Register</h2>
        </div>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={(values) => console.log(values)}
        >
          <Form.Item
            label="Tên"
            name="name"
            rules={[{ required: true, message: "Bạn chưa nhập tên!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Giới tính"
            name="gender"
            rules={[{ required: true, message: "Bạn chưa nhập giới tính!" }]}
          >
            <Select>
              <Select.Option value="male">Nam</Select.Option>
              <Select.Option value="female">Nữ</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Bạn chưa nhập mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
           name="agree" 
           valuePropName="checked"
           rules={[{ required: true, message: "Bạn phải đồng ý mọi điều khoản!" }]}
           >
            <Checkbox>Đồng ý với các điều khoản</Checkbox>
          </Form.Item>

          <div style={{ display: "inline-block", marginBottom: 16 }}>
            Bạn đã có tài khoản?&nbsp;
            <Link to="/login">Đăng nhập</Link>
          </div>

          <Button type="primary" htmlType="submit" block>
            Đăng kí
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
