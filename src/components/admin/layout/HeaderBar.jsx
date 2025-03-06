import { Layout, Input, Space, Button, Avatar } from "antd";
import { BellOutlined, LogoutOutlined, SearchOutlined, SettingOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

const HeaderBar = ({ collapsed, setCollapsed }) => (
  <Header
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#E11D48",
      padding: "0 16px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      color: "#fff",
    }}
  >
    {/* Nút Toggle Sidebar */}
    <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => setCollapsed(!collapsed)}
      style={{ color: "#fff", fontSize: "18px" }}
    />

    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <Input placeholder="Search..." prefix={<SearchOutlined />} style={{ width: 200 }} />
      <Button style={{ color: "#fff" }} type="text" icon={<SettingOutlined />} />
      <Avatar src="https://anhnail.com/wp-content/uploads/2024/11/son-goku-ngau-nhat.jpg" />
      <Button style={{ color: "#fff" }} type="text" icon={<LogoutOutlined />} />
    </div>
  </Header>
);

export default HeaderBar;
