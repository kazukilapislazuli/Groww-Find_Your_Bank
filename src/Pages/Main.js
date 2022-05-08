import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ContentBox from "../components/content";
import { myLocalStorage } from "../utils/localStorage";

function MainPage() {
  const [mainDataSource, setMainDataSource] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [city, setCity] = useState("MUMBAI");
  const [displayData, setDisplayData] = React.useState();

  useEffect(() => {
    getData();
  }, [city]);

  const updateFilterData = (search, searchValue) => {
    if (search == "" || searchValue == "") {
      return;
    }
    const filteredData = dataSource.filter((item) => {
      if (search == "ifsc") {
        return item.ifsc.toLowerCase().includes(searchValue.toLowerCase());
      } else if (search == "bank") {
        return item.bank_name.toLowerCase().includes(searchValue.toLowerCase());
      } else {
        return item.branch.toLowerCase().includes(searchValue.toLowerCase());
      }
    });
    setDataSource(filteredData);
  };

  const getData = async () => {
    if (myLocalStorage.getItem(city)) {
      setMainDataSource(JSON.parse(myLocalStorage.getItem(city)));
      setDataSource(JSON.parse(myLocalStorage.getItem(city)));
    } else {
      axios
        .get(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`)
        .then((response) => {
          setDataSource(response.data);
          setMainDataSource(response.data);
          myLocalStorage.setItem(city, JSON.stringify(response.data));
          const prevData = myLocalStorage.getItem("banks");
          if (prevData) {
            const parsedData = JSON.parse(prevData);
            const newData = [...parsedData, ...response.data];
            myLocalStorage.setItem("banks", JSON.stringify(newData));
          } else {
            myLocalStorage.setItem("banks", JSON.stringify(response.data));
          }
        });
    }
  };

  return (
    <ContentBox
      dataSource={dataSource}
      setCity={setCity}
      updateFilterData={updateFilterData}
      setDisplayData={setDisplayData}
    />
  );
}

export default MainPage;
