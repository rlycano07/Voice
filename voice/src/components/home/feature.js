import React from 'react';

import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Ongoing Debates</h2>
          <p>Major topics of the week</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image1} />}
            >
              <Meta title="Politics" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image2} />}
            >
              <Meta title="Globay Economy" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image3} />}
            >
              <Meta title="Ethics" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image4} />}
            >
              <Meta title="Religion" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image5} />}
            >
              <Meta title="Education" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image6} />}
            >
              <Meta title="Sports" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;