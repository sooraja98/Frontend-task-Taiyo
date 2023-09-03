import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useCountriesData } from "../../store/api/CovidCountry";

const CovidMap: React.FC = () => {
  const { data, isLoading, isError } = useCountriesData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  // Extract country data from the object
  const countriesData = Object.values(data);

  return (
    <div className="covid-map">
      <MapContainer style={{ height: "500px", width: "100%" }}>
        <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {countriesData.map((country: any) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Total Active Cases: {country.active}</p>
                <p>Total Recovered Cases: {country.recovered}</p>
                <p>Total Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CovidMap;
