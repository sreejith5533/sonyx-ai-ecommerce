import { useState } from "react";

function LensComparision() {
  const [lens, setLens] = useState([
    {
      model: "24-70mm f/2.8 GM II",
      aperture: "f/2.8 - f/22",
      weight: "695g",
      motors: "4x XD Linear",
      price: "$2,299",
    },
    {
      model: "70-200mm f/2.8 GM OSS II",
      aperture: "f/2.8 - f/22",
      weight: "1,045g",
      motors: "4x XD Linear",
      price: "$2,799",
    },
    {
      model: "50mm f/1.2 GM",
      aperture: "f/1.2 - f/16",
      weight: "778g",
      motors: "4x XD Linear",
      price: "$1,999",
    },
  ]);

  return (
    <section className="lens-comparision-section">
      <h5 className="comparision-title mb-3">Compare Lens Performance</h5>
      <div className="table-responsive ">
        <table className="table lens-table mb-0">
          <thead>
            <tr>
              <th>Lens Model</th>
              <th>Aperture</th>
              <th>Weight</th>
              <th>Focus Motors</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {lens.map((lens, index) => (
              <tr key={index}>
                <td>{lens.model}</td>
                <td>{lens.aperture}</td>
                <td>{lens.weight}</td>
                <td>{lens.motors}</td>
                <td className="fw-bold">{lens.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default LensComparision;
