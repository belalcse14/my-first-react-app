import React, { useState } from "react";
import "./Country.css";

const Country = (country, handleVisitedCountries) => {
  const countryName = country.country.name.common;
  const countryFlags = country.country.flags.flags.png;
  // console.log(countryFlags);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={countryFlags} alt="" />
      <h3>Name: {countryName}</h3>
      <h3>Population: {country.country.population.population}</h3>
      <h4>Area: {country.country.area.area}</h4>
      {/* <h5>
        Country Type:
        {country.country.area.area > 350000 ? "Large Country" : "Small Country"}
      </h5> */}
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
