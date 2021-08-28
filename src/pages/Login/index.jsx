import { Form, Input, Button, Checkbox, notification } from "antd";
import { Link } from "react-router-dom";

import history from '../../utils/history';

import { userList } from '../../constants/user';

function LoginPage() {
  function handleSubmit(values) {
    const userInfo = userList.find((user) => {
      return user.email === values.email && user.password === values.password;
    })
    if (userInfo) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      if (userInfo.role === 'user') {
        history.push('/');
      } else {
        history.push('/admin')
      }
    } else {
      notification.error({
        message: 'Đăng nhập thất bại',
        description: 'Email hoặc mật khẩu không đúng!'
      })
    }
  }
  return (
    <div className="login-container">
      <div className="login-register-form">
        <div className="login-register-title">
          <h2>Login</h2>
        </div>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={(values) => handleSubmit(values)}
        >
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

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Ghi nhớ tài khoản</Checkbox>
          </Form.Item>

          <Form.Item>
            <div style={{ display: "inline-block", marginBottom: 16 }}>
              Bạn chưa có tài khoản?&nbsp;
              <Link to="/register">Bấm vào đây để đăng ký.</Link>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default LoginPage;
