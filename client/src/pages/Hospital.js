import { useState, useEffect } from "react";
// import Hospitalitem from "./HospitalItem";

const Hospital = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/hospital")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData(
          data.map((item) => {
            return <li key={item.facility_id}>{item.facility_name}</li>;
          })
        );
      })
      .catch((error) => {
        console.error("whatError:", error);
      });
  }, []);

  return (
    <div>
      <h1>hospital data</h1>
      <span>{data}</span>
    </div>
  );
};
export default Hospital;
