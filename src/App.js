import React from "react";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import FavPageApp from "./Pages/Fav";
import MainPage from "./Pages/Main";
import icon from "./logo.svg";
import { Layout, Menu } from "antd";
import Details from "./Pages/Details";
const { Header, Footer, Sider } = Layout;
const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Link to="/" className="logo">
          <img src={icon} alt="logo" />
        </Link>

        <Menu theme="dark">
          <Menu.Item key="1">
            <Link to="/">All Banks</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/fav">Favorite</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />

        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/fav" element={<FavPageApp />} />
          <Route path="/bank-details/:ifsc" element={<Details />} />
        </Routes>
        <Footer style={{ textAlign: "center" }}>
          Kazukilapislazuli
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
