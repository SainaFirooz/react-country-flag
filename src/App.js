import React, { useState, useEffect } from "react";
import "./compartments/styles/CountryFlag.css";
import CountryModal from "./compartments/CountryModal";
import Countries from "./compartments/Countries";
import Continents from "./compartments/Continents";

const App = () => {
  const [selectedContinent, setSelectedContinent] = useState("asia");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${selectedContinent}`
      );
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching continents", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []); 

  const flagClick = (country) => {
    setSelectedCountry(country);
    setModalVisible(true);
  };

  const closeCountryModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="country-flags">
      <label>Choose a continent:</label>
      <Continents
        selectedContinent={selectedContinent}
        onChange={(value) => setSelectedContinent(value)}
      />

      <button className="btn" onClick={fetchCountries}>
        Fetch countries from {selectedContinent}
      </button>

      <Countries countries={countries} onFlagClick={flagClick} />

      {modalVisible && selectedCountry && (
        <CountryModal country={selectedCountry} onClose={closeCountryModal} />
      )}
    </div>
  );
};

export default App;
