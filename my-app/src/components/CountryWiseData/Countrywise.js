import React, { useState, useEffect } from "react";
import "./Countrywise.css";

const Countrywise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://api.covid19api.com/summary");
    const actualData = await res.json();
    console.log(actualData.Countries);
    setData(actualData.Countries);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">World</span> COVID-19 Dashboard
          </h1>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th> Country </th>
                <th> NewConfirmed </th>
                <th> TotalConfirmed </th>
                <th> NewDeaths </th>
                <th> TotalDeaths </th>
                <th> NewRecovered </th>
                <th> TotalRecovered </th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElem, ind) => {
                return (
                  <tr key={ind}>
                    <td> {curElem.Country} </td>
                    <td> {curElem.NewConfirmed} </td>
                    <td> {curElem.TotalConfirmed} </td>
                    <td> {curElem.NewDeaths} </td>
                    <td> {curElem.TotalDeaths} </td>
                    <td> {curElem.NewRecovered} </td>
                    <td> {curElem.TotalRecovered} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Countrywise;
