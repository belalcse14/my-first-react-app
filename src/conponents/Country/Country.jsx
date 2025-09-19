import React from "react";

const Country = (country) => {
  const countryName = country.country.name.common;
  const countryFlags = country.country.flags.flags.png;
  console.log(countryFlags);

  return (
    <div>
      <h3>Name: {countryName}</h3>
      <img src={countryFlags} alt="" />
    </div>
  );
};

export default Country;
