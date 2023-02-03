import { Button, Row } from "antd";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <img
            style={{
              display: "flex",
            }}
            alt="me"
            src="/bakeryLogo.ico"
          />
        </li>
        <li>
          <Button
            style={{
              display: "flex",
              paddingTop: "15px",
            }}
            size={"small"}
            type="text"
          >
            من نحن
          </Button>
        </li>
      </ul>
      <Row
        style={{
          height: "100%",
          margin: -10,
          padding: 0,
          display: "flex",
          listStyleType: "none",
          justifyContent: "right",
        }}
      >
        <li>
          <Button
            style={{
              display: "flex",
            }}
            size={"small"}
            type="text"
          >
            عربي
          </Button>
        </li>
        <li>
          <Button
            style={{
              display: "flex",
            }}
            size={"small"}
            type="text"
          >
            En
          </Button>
        </li>
      </Row>
    </nav>
  );
}
