import {
  Space,
  Button, 
  Menu,
  Dropdown,
  Affix,
} from "antd";
import React, { useState } from 'react';

import { Link } from "react-router-dom";
import logoHeader from "../../assets/images/logo-mixi-removebg.png";

import {
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined,
  UserOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";


function Header(props) {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          Profile
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          Log out
        </a>
      </Menu.Item>
    </Menu>
  );

  const [top, setTop] = useState(0);
  return (
    <Affix offsetTop={top}>
      <div className="header-form">
        <Link to="/">
          <img src={logoHeader} alt="logo" style={{ width: 110 }} />
        </Link>
        <div className="header-container">
          <div className="header-info" style={{ marginTop: -20 }}>
            <Space>
              <span>
                86 Nguyen Sinh Sac, Hoa Minh Ward, Lien Chieu District, Da Nang
                City
              </span>
              <span>
                <a href="#">(+84) 347567080</a>,&nbsp;&nbsp;
                <a href="#">(+84) 94893827</a>
              </span>
              <span>
                <a href="mailto:mixi@foodscleanmarket.com">
                  mixi@foodscleanmarket.com
                </a>
              </span>
              <div class="header-icons">
                <Link to="#">
                  <TwitterOutlined style={{ marginLeft: 30, marginRight: 10 }} />
                </Link>
                <Link to="#">
                <FacebookFilled style={{ marginRight: 10 }} />
                </Link>
                <Link to="#">
                <LinkedinFilled style={{ marginRight: 10 }} />
                </Link>
              </div>
            </Space>
            <hr style={{ color: "black" }} />
          </div>
          <div className="header-menu">
            <Space
              align="center"
              // style={{
              //   marginTop: 10,
              //   padding: 0,
              // }}
            >
              <Link to="/">
                <Button type="link">
                  <p>HOME</p>
                </Button>
              </Link>
              <Link to="/about">
                <Button type="link">
                  <p>ABOUT</p>
                </Button>
              </Link>
              <Link to="/contacts">
                <Button type="link">
                  <p>CONTACTS</p>
                </Button>
              </Link>
              <Link to="/blogs">
                <Button type="link">
                  <p>BLOG</p>
                </Button>
              </Link>
            </Space>

            <Space className='header-icon-login'>
              <Link to="/cart">
                <Button className='header-button'>
                  <ShoppingCartOutlined className="header-button-icon"/>
                </Button>
              </Link>
              <Dropdown className='header-button' overlay={menu} placement="bottomCenter" arrow trigger={['click']}>
                  <Button className='header-button'>
                    <UserOutlined className="header-button-icon"/> 
                  </Button>
              </Dropdown>
              <Link to="/login">
                <Button type="primary" 
                  style={{
                    borderRadius: '8px',
                    padding: 4, width:110, height: 35, fontSize: 16,
                  }}
                >
                  Đăng Nhập
                </Button>
              </Link>
            </Space>
          </div>
        </div>
      </div>
    </Affix>
  );
}

export default Header;
