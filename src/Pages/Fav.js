import TableComponent from "../components/Table";
import { useEffect, useState } from "react";
import { Content } from "antd/lib/layout/layout";
import { myLocalStorage } from "../utils/localStorage";

const FavPageApp = (props) => {
  const [dataSource, setDataSource] = useState([]);
  const getFavBanks = () => {
    if (localStorage.getItem("favoriteBanks")) {
      setDataSource(JSON.parse(localStorage.getItem("favoriteBanks")));
    }
  };
  useEffect(() => {
    getFavBanks();
  }, [dataSource]);
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <TableComponent data={dataSource}></TableComponent>
    </Content>
  );
};
export default FavPageApp;
