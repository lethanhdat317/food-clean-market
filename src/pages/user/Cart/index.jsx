import { cartList } from "../../../constants/cart";
import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Input,
  Button,
  notification,
  Divider,
  Radio,
  Space,
  Form,
} from "antd";

// import { useSelector, useDispatch } from 'react-redux';
// import history from '../../../utils/history';

import { PlusOutlined, MinusOutlined, CloseOutlined } from "@ant-design/icons";

function CartPage() {
  const [checkoutForm] = Form.useForm();
  const [isShow, setIsShow] = useState(false);

  // textarea
  const { TextArea } = Input;
  const onChange = (e) => {
    console.log(e);
  };
  // const { cartList } = useSelector((state) => state.cartReducer);
  // const { userInfo } = useSelector((state) => state.userReducer);

  // const dispatch = useDispatch();

  let totalPrice = 0;

  // function handlePlusCount(index) {
  //   const newCartData = [...cartList];
  //   newCartData.splice(index, 1, {
  //     ...newCartData[index],
  //     count: newCartData[index].count + 1,
  //   });
  //   dispatch(plusItemCountAction({
  //     id: userInfo.data.id,
  //     data: { cart: newCartData },
  //   }));
  // }

  // function handleMinusCount(index) {
  //   if (cartList.data[index].count === 1) return null;console.log("🚀 ~ file: index.jsx ~ line 34 ~ handleMinusCount ~ cartList", cartList)
  //   const newCartData = [...cartList];
  //   newCartData.splice(index, 1, {
  //     ...newCartData[index],
  //     count: newCartData[index].count - 1,
  //   });
  //   dispatch(minusItemCountAction({
  //     id: userInfo.data.id,
  //     data: { cart: newCartData },
  //   }));
  // }

  // function handleDeleteItem(index) {
  //   const newCartData = [...cartList];
  //   newCartData.splice(index, 1);
  //   dispatch(deleteCartItemAction({
  //     id: userInfo.data.id,
  //     data: { cart: newCartData },
  //   }));
  // }
  function renderCarttItem() {
    return cartList.map((cartItem, cartIndex) => {
      totalPrice = totalPrice + cartItem.price * cartItem.count;
      return (
        <Card
          key={`cart-${cartItem.id}`}
          size="small"
          className="render-cart-item"
        >
          <Row className="render-cart-item">
            <Col span={3} className="render-cart-item image">
              <img
                src={cartItem.image}
                alt={cartItem.name}
                srcset=""
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={4} className="render-cart-item name">
              {cartItem.name}
            </Col>
            <Col span={4} className="render-cart-item price">
              {cartItem.price.toLocaleString()}
            </Col>
            <Col span={6} className="render-cart-item count">
              <Input.Group compact>
                <Button
                  icon={<MinusOutlined />}
                  // onClick={() => handleMinusCount(cartIndex)}
                />
                <Input
                  value={cartItem.count}
                  readOnly
                  style={{ width: 40, textAlign: "center" }}
                />
                <Button
                  icon={<PlusOutlined />}
                  // onClick={() => handlePlusCount(cartIndex)}
                />
              </Input.Group>
            </Col>
            <Col span={4} className="render-cart-item total">
              {(cartItem.price * cartItem.count).toLocaleString()}
            </Col>
            <Col span={3} className="render-cart-item delete">
              <Button
                type="text"
                danger
                icon={<CloseOutlined />}
                // onClick={() => handleDeleteItem(cartIndex)}
              />
            </Col>
          </Row>
        </Card>
      );
    });
  }
  function renderCartList() {
    if (cartList.length > 0) {
      return (
        <>
          <Col span={18}>
            <Card size="small" className="card-title">
              <Row>
                <Col span={3}></Col>
                <Col span={4}>Tên</Col>
                <Col span={4}>Giá (vnd)</Col>
                <Col span={6}>Số lượng</Col>
                <Col span={4}>Tổng giá (vnd)</Col>
                <Col span={3}></Col>
              </Row>
            </Card>
            <Row>{renderCarttItem()}</Row>
          </Col>

          <Col span={6}>
            <Row className="cart-col-right">
              <Col span={24}>
                <Row>
                  <p className="cart-col-right-title">
                    TỔNG <span>GIỎ HÀNG</span>
                  </p>
                </Row>
                <Row>
                  <p className="cart-col-right-totalPrice">
                    Thành tiền: {totalPrice.toLocaleString()} VND
                  </p>
                </Row>
                <Row>
                  <Col span={15}>
                    <Input placeholder="Mã giảm giá" />
                  </Col>
                  <Col span={8} offset={1}>
                    <Button
                      type="primary"
                      ghost
                      className="cart-col-right-button-sale"
                    >
                      ÁP DỤNG
                    </Button>
                  </Col>
                </Row>
                <Row>
                  {!isShow ? (
                    <Button
                      block
                      className="cart-col-right-checkout"
                      // onClick={() => handleCheckout()}
                      onClick={() => setIsShow(!isShow)}
                    >
                      THANH TOÁN
                    </Button>
                  ) : null}
                </Row>
              </Col>
            </Row>
          </Col>
        </>
      );
    } else {
      return <div>Giỏ hàng trống</div>;
    }
  }
  return (
    <>
      <Row className="cart-container">
        <Col>
          <Row className="detail-name">
            GIỎ HÀNG
            <Divider style={{ marginTop: -10, border: "2px groove #237804" }} />
          </Row>
          <Row>{renderCartList()}</Row>
          <Row>
            {isShow ? (
              <Col span={24}>
                <p className="cart-col-right-title" style={{ marginTop: 50 }}>
                  <span>THÔNG TIN THANH TOÁN</span>
                  <Button
                    type="text"
                    danger
                    icon={<CloseOutlined />}
                    style={{float: 'right'}}
                    // onClick={() => handleDeleteItem(cartIndex)}
                    onClick={() => setIsShow(!!!isShow)}
                  />
                  <Divider
                    style={{ marginTop: -10, border: "2px groove #237804" }}
                  />
                </p>
                <Form
                  form={checkoutForm}
                  name="basic"
                  layout="vertical"
                  // initialValues={{
                  //   name: userInfo.data.name,
                  //   email: userInfo.data.email,
                  // }}
                  // onFinish={(values) => handleOrder(values)}
                >
                  {/* <Card title="Thông tin đơn hàng" size="small">
                {renderCartItems()}
              </Card> */}
                  <Card
                    title="Thông tin cá nhân"
                    size="small"
                    style={{ margin: "16px 0" }}
                  >
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          label="Name"
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: "Please input your name!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          label="Email"
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          label="Phone Number"
                          name="phoneNumber"
                          rules={[
                            {
                              required: true,
                              message: "Please input your phone number!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          label="Address"
                          name="address"
                          rules={[
                            {
                              required: true,
                              message: "Please input your address!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          label="Need Attention"
                          name="note"
                          // rules={[
                          //   {
                          //     required: true,
                          //     message: "Please input your username!",
                          //   },
                          // ]}
                        >
                          <TextArea
                            placeholder="Những điều bạn muốn cửa hàng chú ý"
                            allowClear
                            onChange={onChange}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Card>
                  <Card title="Thông tin thanh toán" size="small">
                    <Form.Item name="checkoutInfo">
                      <Radio.Group>
                        <Space direction="vertical">
                          <Radio value="momo">Momo</Radio>
                          <Radio value="zalo">Zalo Pay</Radio>
                          <Radio value="atm">Thẻ ATM</Radio>
                          <Radio value="visa">Thẻ VISA, Master, JCB</Radio>
                        </Space>
                      </Radio.Group>
                    </Form.Item>
                  </Card>
                  <Row>
                    <Button
                      htmlType="submit"
                      type="primary"
                      style={{ margin: "16px auto" }}
                    >
                      Thanh Toán
                    </Button>
                  </Row>
                </Form>
              </Col>
            ) : null}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default CartPage;
