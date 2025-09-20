import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log("Clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);

  return (
    <div>
      <h2>Countries around the World: {countries.length}</h2>
      <h5>Total Countries Visited: {visitedCountries.length} </h5>

      <div className="countries">
        {countries.map((country) => (
          <Country
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
