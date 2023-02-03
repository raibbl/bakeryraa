import useMediaQuery from "@mui/material/useMediaQuery";
import { CarouselResponsive } from "../components/CarouselResponsive";
import { BakeryName } from "../components/BakeryName";
import { Cairo } from "@next/font/google";
import { Button } from "antd";
const cairoFont = Cairo({ subsets: ["latin"] });
export default function Page({}) {
  const isMobile = useMediaQuery("(max-width:950px)");
  return (
    <main>
      <div style={{ alignItems: "center" }}>
        <BakeryName isMobile={isMobile} fontClassName={cairoFont.className} />
        <CarouselResponsive isMobile={isMobile} />
        <Button
          ghost
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            verticalAlign: "middle",
            position: "absolute",
            marginLeft: "-50px",
            left: "50%",
            width: "100px",
            bottom: "170px",
          }}
          className={cairoFont.className}
          size="middle"
          onClick={() => {
            console.log("hey");
          }}
        >
          أطلب الأن
        </Button>
      </div>
    </main>
  );
}
