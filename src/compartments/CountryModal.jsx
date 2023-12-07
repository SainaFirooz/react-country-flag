
import './styles/CountryModal.css'; 

const CountryModal = ({ country, onClose }) => (
  <div className="country-card">
    <button className="close-button" onClick={onClose}>
      Close
    </button>
    <img
      src={country.flags.svg}
      alt={`${country.name.common}'s flag`}
      className="flag-image"
    />
    <h2>{country.name.common}</h2>
    <p><strong>Capital:</strong> {country.capital}</p>
    <p><strong>Population:</strong> {country.population} </p>
  </div>
);

export default CountryModal;
