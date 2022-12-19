import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Calender() {
  const navlink = useNavigate();
  const [month, setMonth] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);
  const treat1View = () => {
    navlink("/gast");
  };
  const treat2View = () => {
    navlink("/anti");
  };
  const treat3View = () => {
    navlink("/vita");
  };
  const treat4View = () => {
    navlink("/nutr");
  };

  return (
    <>
      <h2>Recommendations</h2>
      <table>
        <thead>
          <tr>
            {month.map((ele) => {
              return <th>{ele}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3}>
              {" "}
              <span className="treat_1">
                {" "}
                <span>Gastritis Treatment</span>{" "}
                <button onClick={treat1View}>View Details</button>{" "}
              </span>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td colSpan={6}>
              {" "}
              <span className="treat_2">
                {" "}
                <span>Anticlotting Therapy</span>{" "}
                <button onClick={treat2View}>View Details</button>{" "}
              </span>
            </td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td colSpan={2}>
              {" "}
              <span className="treat_3">
                {" "}
                <span>Vitamin D Deficit</span>{" "}
                <button onClick={treat3View}>View Details</button>{" "}
              </span>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={12}>
              {" "}
              <span className="treat_4">
                {" "}
                <span>Nutrient Deficit</span>{" "}
                <button onClick={treat4View}>View Details</button>{" "}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Calender;
