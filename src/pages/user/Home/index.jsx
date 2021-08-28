import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import { productList } from '../../../constants/product';

const { Meta } = Card;

function HomePage() {
  function renderProductList() {
    return productList.map((productItem, productIndex) => {
      return (
        <Col span={4.5} key={productIndex}>
          <Link to={`/product/${productItem.id}`}>
            <Card
              hoverable
              style={{ width: 245 }}
              cover={
                <img
                  alt="example"
                  src={productItem.image}
                />
              }
            >
              <Meta
                title={productItem.name}
                description={productItem.price.toLocaleString()}
              />
            </Card>
            
            {/* <Card
                title={productItem.name}
                bordered={false}
            >
                {productItem.price.toLocaleString()}
            </Card> */}
          </Link>
        </Col>
      );
    })
  }
  return (
    <div>
      <div style={{ padding: 20 }}>
        <Row gutter={[21, 25]}>
          {renderProductList()}
        </Row>
      </div>
    </div>
  );
}

export default HomePage;