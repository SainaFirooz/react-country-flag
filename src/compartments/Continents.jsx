
const Continents = ({ selectedContinent, onChange }) => {

  return (
    <select
    id="continent"
    value={selectedContinent}
    onChange={(e) => onChange(e.target.value)}
  >
    <option value="asia">Asia</option>
    <option value="africa">Africa</option>
    <option value="europe">Europe</option>
  </select>
  );
};

export default Continents;
