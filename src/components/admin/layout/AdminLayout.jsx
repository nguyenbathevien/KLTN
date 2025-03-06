import { useEffect, useState } from "react";
import HeaderBar from "./HeaderBar";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import CreateButton from "../CreateButton";
import { items } from "../MenuItem";

const AdminLayout = () => {
  const [currentType, setCurrentType] = useState("");
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const matchedItem = items.find(item => item.key === location.pathname);
    if (matchedItem) {
      setCurrentType(matchedItem.type);
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="d-flex" style={{ minHeight: "100vh", display: "flex" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          minHeight: "100vh",
          background: "#001529",
          overflow: "hidden",
          transition: "max-width 0.3s ease",
          position: "fixed",
          zIndex: 1000,
          left: "0px",
          maxWidth: collapsed ? "0px" : "250px", 
        }}
      >
        {!collapsed && <Sidebar setCurrentType={setCurrentType} />}
      </div>


      {/* Phần còn lại */}
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", marginLeft: collapsed ? "0" : "250px", transition: "margin-left 0.3s ease" }}>
        {/* Header có nút toggle */}
        <HeaderBar collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Nội dung chính */}
        <div
          style={{
            flexGrow: 1,
            padding: 16,
            backgroundImage: "url('https://s3.envato.com/files/57a805b1-b8a9-427d-a2ad-b41061ec7a94/inline_image_preview.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            {currentType !== "Dashboard" && <CreateButton type={currentType} />}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
