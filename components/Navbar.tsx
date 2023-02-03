import { Button, Row } from "antd";
import { Cairo } from "@next/font/google";
export const cairoFont = Cairo({ subsets: ["latin"] });
import useMediaQuery from "@mui/material/useMediaQuery";
export default function Navbar() {
  const isMobile = useMediaQuery("(max-width:950px)");
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
              paddingTop: "10px",
            }}
            size={"small"}
            type="text"
            className={cairoFont.className}
          >
            من نحن
          </Button>
        </li>
      </ul>
      <Row
        style={{
          height: "100%",
          margin: isMobile ? -20 : -5,
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
            className={cairoFont.className}
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
            className={cairoFont.className}
          >
            En
          </Button>
        </li>
      </Row>
    </nav>
  );
}
