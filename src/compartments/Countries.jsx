
const Countries = ({ countries, onFlagClick }) => {
  // Implement your countries component here
  return (
    <div className="flag-container">
      {countries.map((country) => (
        <div key={country.name.common} onClick={() => onFlagClick(country)}>
          <img
            src={country.flags.svg}
            alt={`${country.name.common}'s flag`}
            className="flag-image"
          />
        </div>
      ))}
    </div>
  );
};

export default Countries;
