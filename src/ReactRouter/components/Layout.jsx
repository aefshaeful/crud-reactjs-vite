import { Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{ height: "300px", background: "lime", marginBottom: "24px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "10px",
            gap: "10px",
          }}
        >
          <Button variant="primary" onClick={() => navigate("/")}>
            Product
          </Button>
          <Button variant="primary" onClick={() => navigate("/detail/1")}>
            Detail
          </Button>
          <Button variant="primary" onClick={() => navigate("/checkout")}>
            Checkout
          </Button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
