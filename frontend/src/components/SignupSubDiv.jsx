import { useState } from "react";

function SignupSubDiv() {
  const [data, setData] = useState([
    {
      icon: "fa-solid fa-universal-access",
      heading: "Priority access to precision hardware",
      paragraph:
        "Early-stage hardware allocation before global retail release.",
    },
    {
      icon: "fa-regular fa-lightbulb",
      heading: "Technical support concierge",
      paragraph:
        "24/7 direct line to lead SONYX engineers for technical integration.",
    },
  ]);
  return (
    <div className="signup-sub-div">
      {data.map((item, index) => (
        <div className="innovation-content-info-div mt-3" key={index}>
          <span className="innovation-icon">
            <i class={item.icon}></i>
          </span>
          <div className="info-content">
            <p className="innovation-heading-info">{item.heading}</p>
            <p className="innovation-paragraph-info">
              {item.paragraph}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SignupSubDiv;
