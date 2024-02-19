
import React from "react";

interface imageProps {
  size: string;
  bg: string;
  color: string;
  text?: string;
}

const ImagePlaceholder = ({ size, bg, color, text }: imageProps) => {
  const divStyle = {
    width: `${size.split("x")[0]}px`,
    height: `${size.split("x")[1]}px`,
    backgroundColor: `#${bg}`,
    color: `#${color}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
  };

  return <div style={divStyle}>{text || size}</div>;
};

export default ImagePlaceholder;
