// Landets namn

// Landets huvudstad

//Hur många invånare som bor i landet

export default function Countries({ name, capital, population}) {

  
    return (
        <div>
          <h2>{name}</h2>
          <img src={image} alt={name} />
          <ul>
            <p><strong>{types}</strong></p>{" "}
          </ul>
          <p><strong>Capital: {capital} lbs</strong></p>
          <p><strong>Population: {population}</strong></p>

        </div>
      );
    }
    