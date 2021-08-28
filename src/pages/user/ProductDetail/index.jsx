import { productList } from '../../../constants/product';
import { Row, Col, Card } from "antd";

const { Meta } = Card;

function ProductDetailPage(props) {
    const{match} = props;
    const productId = parseInt(match.params.id);

    const productDetail = productList.find(
        (product) => product.id === productId
    );
    
    return (
      <div style={{ padding: 20 }}>
        <Row gutter={[21, 25]}>
            <Col span={4.5}>
          
            <Card
              hoverable
              style={{ width: 245 }}
              cover={
                <img
                  alt="example"
                  src={productDetail.image}
                />
              }
            >
              <Meta
                title={productDetail.name}
                description={productDetail.price.toLocaleString()}
              />
            </Card>
            
            {/* <Card
                title={productItem.name}
                bordered={false}
            >
                {productItem.price.toLocaleString()}
            </Card> */}
          
        </Col>
        </Row>
      </div>     
    );
    
}

export default ProductDetailPage;