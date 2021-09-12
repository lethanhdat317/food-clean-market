import {
  Row, 
  Col, 
  Card, 
  Input, 
  Space, 
  Pagination,
  Button, 
  InputNumber, 
  Carousel,
  Slider,
  Checkbox,
  Select  } from "antd";
// import Search from "antd/lib/transfer/search";
import { Link } from "react-router-dom";
import { productList } from "../../../constants/product";

import banner1 from "../../../assets/images/banner-1.png";
import banner2 from "../../../assets/images/banner-2.jpg";
import banner3 from "../../../assets/images/banner-3.jpg";
import banner4 from "../../../assets/images/banner-4.png";
import certificate from "../../../assets/images/certificate.png";
import ship from "../../../assets/images/itruck-filled.png";
import refresh from "../../../assets/images/refresh.png";
import protect from "../../../assets/images/protect-filled.png";

import imgContentsLeft from "../../../assets/images/left-contents.jpg";
import {ShoppingCartOutlined, CarOutlined } from "@ant-design/icons";


// css banner
const contentStyle = {
  height: '350px', 
  width: '1350px',
  marginBottom: '10px',
  background: '#364d79'
};

//input search
const { Search } = Input;
const onSearch = (value) => console.log(value);

//select theo các hình thức
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

// function onSearch(val) {
//   console.log('search:', val);
// }

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: "#1890ff",
//     }}
//   />
// );



function HomePage() {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  function renderProductList() {
    return productList.map((productItem, productIndex) => {
      return (
        <Col span={8} key={productIndex}>
          <Link to={`/product/${productItem.id}`}>
            <Card 
              hoverable
              style={{ 
                width: 300,
               }}
              cover={<img alt="example" src={productItem.image} />}
            >
              <h1>{productItem.name}</h1>
              <p>{`${productItem.price.toLocaleString()} VND`}</p>
              <Row style={{
                  marginTop: 10,
                  padding:0
                }}>
                  <Space >
                    <Button type="primary" icon={<CarOutlined />}
                      style={{
                        marginLeft: -6,
                        backgroundColor: '#237804'
                      }}
                    >
                      Mua ngay
                    </Button>
                    <Button type="primary" icon={<ShoppingCartOutlined />} 
                      style={{
                        backgroundColor: '#389e0d'
                      }}
                    >
                      Thêm vào giỏ
                    </Button>
                  </Space>
              </Row>
            </Card>
          </Link>
        </Col>
      );
    });
  }
  return (
    <>
    <Carousel autoplay>
      <div>
        <img src={banner1} alt="banner1"
        style={contentStyle}/>
      </div>
      <div>
        <img src={banner2} alt="banner2"  
        style={contentStyle}/>
      </div>
      <div>
        <img src={banner3} alt="banner3"  
        style={contentStyle}/>
      </div>
      <div>
        <img src={banner4} alt="banner4"  
        style={contentStyle}/>
      </div>
    </Carousel>
      <Row style={{marginLeft: 40,
      marginRight: 40,
      }}>
        <Col span={6} 
        style={{
          // background: 'gray',
           padding: '80px 5px 5px 5px'
        }}
        >
          <Row gutter={[0,0]}>
          <p style={{
            fontWeight: 'bold',
            fontSize: 19
          }}>
            CÁC LOẠI SẢN PHẨM
          </p>
          <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
              <Col span={24}>
                <Checkbox value="A"><h3>Rau củ</h3></Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="B"><h3>Thịt</h3></Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="C"><h3>Cá</h3></Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="D"><h3>Hoa quả</h3></Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="E"><h3>Tôm</h3></Checkbox>
              </Col>
          </Checkbox.Group>
          </Row>

          <Row gutter={[0,0]} style={{
            marginTop: 30
          }}>
          <p style={{
            fontWeight: 'bold',
            fontSize: 19
          }}>
            GIÁ BÁN
          </p>
            <Col span={24}>
              <Slider
                range min={10000}
                max={1000000}
                step={10000} 
                defaultValue={[10000, 100000]}
              />
            </Col>
            <Col span={24}>
              <InputNumber
                min={10000}
                max={1000000}
                step={10000}
                style={{ marginLeft: 50, marginRight: 10 }}
                // value={inputValue}
                // onChange={this.onChange}
              />VND
            </Col>
          </Row>
          <Row gutter={[0,0]} style={{
            marginTop: 30
          }}>
          
            <Col span={24}>
              <p style={{
                fontWeight: 'bold',
                fontSize: 19
              }}>
                SẢN PHẨM NỔI BẬT
              </p>
            </Col>
            <Col span={24}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br /> 
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br /> 
            </Col>
            <Col span={24} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
              <img src={imgContentsLeft} alt="imgContentsLeft" style={{
                width: '90%', 
              }} />
            </Col>
            <Col span={24} >
              <p className='text-center'>Tại sao nên chọn chúng tôi</p>
              <ul className='group-list'>
                <li>
                  <img src={certificate} alt="certificate" className='group-list-image'
                    style={{margin: '0 0.4em 0 -0.3em'}}
                  />
                  <span>Sản phẩm đạt chuẩn an toàn thực phẩm</span>
                </li>
                <li>
                  <img src={ship} alt="ship" className='group-list-image'
                    style={{width: 21, margin: '0 0.4em 4px 0'}}
                  />
                  <span>Giao hàng toàn quốc</span>
                </li>
                <li>
                  <img src={refresh} alt="refresh" className='group-list-image'
                     style={{width: 22, margin: '5px 0.3em 4px 0'}}
                  />
                  <span>Đổi trả trong vòng 15 ngày</span>
                </li>
                {/* <li>
                  <img src={protect} alt="" className='group-list-image'/>
                  <span></span>
                </li> */}
              </ul>
            </Col>
          </Row>

        
        </Col>
        
        <Col span={18} style={{
          // background: '#e6f7ff'
          }}>

                  <Search
                    placeholder="Tìm kiếm..."
                    onSearch={onSearch}
                    enterButton
                    style={{
                      width: 600,
                      marginTop: 20,
                      marginLeft: 200,
                    }}
                  />

                <div style={{
                  display: "flex", 
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginTop: 20,
                  paddingRight: '5%'
                }}>
                  <Select
                    className='select-product'
                    showSearch
                    style={{ width: 200, marginBottom: 15}}
                    placeholder="Phân loại mặc định"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="up">Giá từ thấp đến cao</Option>
                    <Option value="down">Giá từ cao đến thấp</Option>
                    <Option value="new">Sản phẩm mới nhất</Option>
                  </Select>
                </div>
          <div style={{ padding: 10 }}>
            <Row gutter={[22, 25]}>{renderProductList()}</Row>
          </div>
          <Row style={{
            marginBottom: 10
          }}>
            <Pagination defaultCurrent={1} size='small' total={50} span={1} style={{
              margin: '20px auto'
            }}/>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default HomePage;
