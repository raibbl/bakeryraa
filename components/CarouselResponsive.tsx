import { Carousel } from "antd";
import React from "react";
export const contentStyle: React.CSSProperties = {
  height: "50%",
  width: "100%",
  color: "#fff",
  lineHeight: "50%",
  display: "flex",
  textAlign: "center",
  background: "#364d79",
};
export function CarouselResponsive({
  isMobile,
}: {
  isMobile: boolean;
}): JSX.Element {
  return (
    <Carousel className="carouselResponsive" autoplaySpeed={3000} autoplay>
      <div>
        <img
          src={`/slideshow1${isMobile ? "mb" : ""}.jpg`}
          style={contentStyle}
        />
      </div>
      <div>
        <img
          src={`/slideshow2${isMobile ? "mb" : ""}.jpg`}
          style={contentStyle}
        />
      </div>
      <div>
        <img
          src={`/slideshow3${isMobile ? "mb" : ""}.jpg`}
          style={contentStyle}
        />
      </div>
      <div>
        <img
          src={`/slideshow4${isMobile ? "mb" : ""}.jpg`}
          style={contentStyle}
        />
      </div>
    </Carousel>
  );
}
