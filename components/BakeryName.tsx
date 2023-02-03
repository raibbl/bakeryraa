import React from "react";
import { Typography } from "antd";

export function BakeryName({
  isMobile,
  fontClassName,
}: {
  isMobile: boolean;
  fontClassName: string;
}): JSX.Element {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        alignItems: "center",
      }}
    >
      <Typography.Title
        style={{
          fontSize: isMobile ? "50px" : "100px",
          color: "black",
        }}
        className={fontClassName}
        level={1}
      >
        مخبز & مطعم راء
      </Typography.Title>
    </div>
  );
}
