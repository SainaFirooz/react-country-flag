
import './styles/CountryModal.css'; 

const CountryModal = ({ country, onClose }) => (
  <div className="country-modal">
    <button className="close-button" onClick={onClose}>
      Close
    </button>
    <img
      src={country.flags.svg}
      alt={`${country.name.common}'s flag`}
      className="flag-image"
    />
    <h1>{country.name.common}</h1>
    <p><strong>Capital:</strong> {country.capital}</p>
    <p><strong>Population:</strong> {country.population} humans</p>
  </div>
);

export default CountryModal;
