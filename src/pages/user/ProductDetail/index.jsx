import { productList } from "../../../constants/product";
import { Row, Col, Card, Image, Button, Space, Tabs, Divider   } from "antd";
import {ShoppingCartOutlined, CarOutlined } from "@ant-design/icons";
import React, { useState } from 'react';

const { Meta } = Card;

function ProductDetailPage(props) {

  const [count, setCount] = useState(1);
  const { match } = props;
  const productId = parseInt(match.params.id);

  const productDetail = productList.find((product) => product.id === productId);
  let totalpice = count * productDetail.price;
  function removeCount() {
    if (count > 1) {
      setCount(count -1)
    }else{
      alert("ban ko the xuong nua");
    }
  }
  
  return (
    <>
      <Row className="detail-name">
        THÔNG TIN SẢN PHẨM
        <Divider style={{marginTop: -10, border: '2px groove #237804'}} />
      </Row>
      
      <Row className="detail-content">
        <Col span={7} className="detail-image">
          <Image
            width={325}
            alt={productDetail.name}
            src={productDetail.image}
          />
        </Col>
        <Col span={17} className="detail-info">
          <p className="detail-name-product">{productDetail.name}</p>
          <p className="detail-category-product">Thể loại: Hoa quả</p>
          <p className="detail-pice-product">
            Giá: <span>{productDetail.price.toLocaleString()} VND</span>{" "}
          </p>
          <p>
            Những bữa ăn tươi sạch luôn là mối quan tâm hàng đầu của người tiêu
            dùng hiện nay. Thấu hiểu điều đó, MM Mega Market đã xây dựng hệ
            thống nông trại rau củ quả tại Đà Lạt, Tiền Giang theo tiêu chuẩn
            VietGap & HACCP trong kiểm soát các nguy cơ về an toàn vệ sinh thực
            phẩm. MM Mega Market tự hào là sự lựa chọn hàng đầu về các sản phẩm
            rau củ, trái cây tươi, với mức đầu tư quy mô cho chuỗi quy trình
            khép kín từ trồng trọt, chăm sóc, thu hoạch đến vận chuyển. Quá
            trình này luôn có sự tham gia của đội ngũ kỹ sư nông nghiệp MM, làm
            việc trực tiếp với nông dân và hợp tác xã để chọn giống, lên kế
            hoạch sản xuất, thu hoạch, bao bì đóng gói và phân phối đến các
            trung tâm trên toàn quốc.
          </p>

          <div className='detail-count-product'>
            <Button onClick={removeCount}
              className='button-add-remove'
            > 
              -
            </Button>
              <input className='detail-setcount'
                name='setCountProduct'
               type="text" value={count} />
            <Button onClick={() => setCount(count + 1)}
              className='button-add-remove'
            >
              +
            </Button>
            <span>Tổng giá sản phẩm: {totalpice.toLocaleString()} VND</span>
          </div>
          <Space>
            <Button type="primary" icon={<CarOutlined />}
              // className='button-add-remove'
              style=
                {{
                  marginLeft: -6,
                  backgroundColor: '#237804'
                }}
            >
              Mua ngay
            </Button>
            <Button type="primary" icon={<ShoppingCartOutlined />} 
              // className='button-add-remove'
              style=
                {{
                  backgroundColor: '#389e0d'
                }}
            >
              Thêm vào giỏ
            </Button>
          </Space>
        </Col>
      </Row>
    </>
  );
}

export default ProductDetailPage;
