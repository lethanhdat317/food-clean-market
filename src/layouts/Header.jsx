// import { Space, Button } from "../../../fe18-react-router-exam/node_modules/antd/lib";
import { Space, Button } from "antd";
import { Link } from "react-router-dom";
import logoHeader from '../assets/images/logo.png';
function Header(props) {
  return (
    <div className="header-container">
      <Link to="/">
                <img src={logoHeader}  alt="logo"/>
      </Link>
      <Space>
        <Link to="/">
          <Button type="link">Home</Button>
        </Link>
        <Link to="/about">
          <Button type="link">About</Button>
        </Link>
      </Space>
      <Space>
        <Link to="/login">
          <Button type="primary">Đăng Nhập</Button>
        </Link>
      </Space>
    </div>
  );
}

export default Header;
