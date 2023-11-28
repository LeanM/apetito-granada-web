import { useEffect, useState } from "react";
import asado from "../../assets/ASADO.jpg";

export default function CategoryCard(props) {
  const [containerStyle, setContainerStyle] = useState({});

  useEffect(() => {
    if (props.position === "left") {
      setContainerStyle({
        width: "80%",
        height: "20rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "auto",
      });
    } else
      setContainerStyle({
        width: "80%",
        height: "20rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
      });
  }, []);

  return (
    <div style={containerStyle}>
      <div
        style={{
          width: "70%",
          height: "85%",
          boxShadow: "0 0 5px black",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <img
          src={asado}
          style={{ width: "30%", height: "95%", borderRadius: "10px" }}
        />
        {props.categoryData}
      </div>
    </div>
  );
}
