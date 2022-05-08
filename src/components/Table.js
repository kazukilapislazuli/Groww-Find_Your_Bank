import { Table, Tag, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import get from "lodash/get";
import filter from "lodash/filter";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { find } from "lodash";
import { Popconfirm } from "antd";
import { myLocalStorage } from "../utils/localStorage";
import { message } from 'antd';

const TableComponent = ({ data }) => {
  async function storeData(record){
    myLocalStorage.setItem("currentBank", JSON.stringify(record));
  }
  async function favStatus(record) {
    const favData = myLocalStorage.getItem("favoriteBanks");
    if (favData) {
      const parsedData = JSON.parse(favData);
      const newFav = await parsedData.filter(
        (data) => data.ifsc === record.ifsc
      );
      if (newFav.length !== 0) {
        const removedFav = await parsedData.filter(
          (data) => data.ifsc !== record.ifsc
        );
        myLocalStorage.setItem("favoriteBanks", JSON.stringify(removedFav));
        message.warning("Bank Removed to Favourites");

      } else {
        const data = [...parsedData, record];
        myLocalStorage.setItem("favoriteBanks", JSON.stringify(data));
        message.success("Bank added to Favourites");
      }
    } else {
      let favBanks = [record];
      myLocalStorage.setItem("favoriteBanks", JSON.stringify(favBanks));
      message.success("Bank added to Favourites");
    }
  }

  const columns = [
    {
      title: "Bank",
      key: "bank_name",
      render: (record) => (
        <Link onClick={storeData(record)} to={`/bank-details/${get(record, "ifsc")}`}>
          {get(record, "bank_name")}
        </Link>
      ),
    },
    {
      title: "IFSC",
      key: "ifsc",
      render: (record) => <div>{get(record, "ifsc")}</div>,
    },
    {
      title: "Branch",
      key: "branch",
      render: (record) => <div>{get(record, "branch")}</div>,
    },
    {
      title: "Address",
      key: "address",
      render: (record) => <div>{get(record, "address")}</div>,
    },
    {
      title: "Actions",
      key: "action",
      render: (record) => (
        <button onClick={() => favStatus(record)}>Press</button>
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} scroll={{ x: "100vh" }} />;
};

export default TableComponent;
