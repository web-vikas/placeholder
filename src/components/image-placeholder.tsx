interface imageProps {
  size: string;
  bg: string;
  color: string;
  text?: string;
  radius: string;
  border?: string; // Border width and style
  gradient?: string; // Optional gradient background
  direction?: string; // Gradient direction
}

const ImagePlaceholder = ({
  size,
  bg,
  color,
  text,
  border,
  radius,
  gradient,
  direction,
}: imageProps) => {
  let backgroundStyle = {};
  if (gradient) {
    backgroundStyle = {
      backgroundImage: `linear-gradient(${direction || "to right"}, #${
        gradient.split("x")[0]
      }, #${gradient.split("x")[1]})`,
    };
  } else {
    backgroundStyle = {
      backgroundColor: `#${bg}`,
    };
  }

  const divStyle = {
    width: `${size.split("x")[0]}px`,
    height: `${size.split("x")[1]}px`,
    ...backgroundStyle,
    color: `#${color}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
    border: border,
    borderRadius: `${radius}px`,
  };

  return <div style={divStyle}>{text || size}</div>;
};

export default ImagePlaceholder;
