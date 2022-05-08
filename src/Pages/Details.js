import React from "react";
import { Card, Col, Row } from "antd";
import { myLocalStorage } from "../utils/localStorage";
import { Content } from "antd/lib/layout/layout";

const Details = () => {
  const data = myLocalStorage.getItem("currentBank");
  let renderData = {};
  if (data) {
    renderData = JSON.parse(data);
    console.log(renderData);
  }


  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div className="site-card-wrapper">
        <h2
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "2em" }}
        >
          Bank Details
        </h2>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="IFSC Code" bordered={false}>
              {renderData.ifsc}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Bank Name" bordered={false}>
              {renderData.bank_name}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Bank ID" bordered={false}>
              {renderData.bank_id}
            </Card>
          </Col>
        </Row>
        <Row style={{marginTop:"1em"}} gutter={16}>
          <Col span={8}>
            <Card title="City" bordered={false}>
              {renderData.city}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="District" bordered={false}>
              {renderData.district}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="State" bordered={false}>
              {renderData.state}
            </Card>
          </Col>
        </Row>
        <Row style={{marginTop:"1em", justifyContent: "center"}} gutter={16}>
            <Card  title="Address" span={8}>
            {renderData.address}
            </Card>
        </Row>
      </div>
    </Content>
  );
};

export default Details;
