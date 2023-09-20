import React, { useState } from 'react';

const CityInput = ({ onCityChange }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCityChange(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="text-center" type="text" value={city} placeholder="Enter a city" onChange={handleInputChange} />
      <button type="submit"></button>
    </form>
  );
};

export default CityInput;