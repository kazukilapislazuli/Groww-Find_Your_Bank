import { Content } from "antd/lib/layout/layout";
import { Menu, Dropdown, Button, Space } from "antd";
import React, { useState } from "react";
import TableComponent from "./Table";

import { Select, Input } from "antd";
const { Option } = Select;

const ContentBox = (props) => {
  const [search, setSearch] = useState("");
  function handleCityChange(value) {
    console.log(`selected ${value}`);
    props.setCity(value.toUpperCase());
  }
  function handleSearchedOptionChange(value) {
    console.log(`selected ${value}`);
    setSearch(value);
  }

  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Space wrap>
          <Select
            defaultValue="MUMBAI"
            style={{ width: 120 }}
            onChange={handleCityChange}
          >
            <Option value="PUNE">Pune</Option>
            <Option value="MUMBAI">Mumbai</Option>
            <Option value="DELHI">Delhi</Option>
            <Option value="BHADRAK">Bhadrak</Option>
            <Option value="JAIPUR">Jaipur</Option>
          </Select>

          <Select
            placeholder="Select Search Option"
            style={{ width: 120 }}
            onChange={handleSearchedOptionChange}
          >
            <Option value="ifsc">IFSC Code</Option>
            <Option value="bank">Bank Name</Option>
            <Option value="branch">Branch</Option>
          </Select>
          <Input
            onChange={(e) => props.updateFilterData(search, e.target.value)}
            placeholder="Enter Search Query"
          />
        </Space>
        <TableComponent data={props.dataSource} ></TableComponent>
      </div>
    </Content>
  );
};

export default ContentBox;
