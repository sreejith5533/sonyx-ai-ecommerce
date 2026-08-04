import InnovationContentInfo from "./InnovationContentInfo";
import { useState } from "react";
function InnovationContent() {
  const [data, setData] = useState([
    {
      icon: "fa-regular fa-address-card",
      heading: "Spatial Innovation",
      paragraph:
        "Immerse yourself in sound that surrounds you from all directions. As real as if you were there at a live concert or with the artist recording in a studio.",
    },
    {
      icon: "fa-solid fa-headset",
      heading: "Personalized Calibration",
      paragraph:
        "I adapt to your ear shape. Our AI analyzes your ear shape to optimize the spatial soundstage specifically for you.",
    },
  ]);
  return (
    <div className="innovation-content">
      <p className="innovation-heading">Spatial Innovation</p>
      <p className="innovation-subheading">360 Reality Audio</p>
      <p className="innovation-paragraph">
        Immerse yourself in sound that surrounds you from all directions. As
        real as if you were there at a live concert or with the artist recording
        in a studio.
      </p>
      {data.map((item, index) => (
        <InnovationContentInfo
          key={index}
          icon={item.icon}
          heading={item.heading}
          paragraph={item.paragraph}
        />
      ))}
    </div>
  );
}

export default InnovationContent;
