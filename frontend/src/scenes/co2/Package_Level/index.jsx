import React, { useState } from 'react';
import './PackageLevel.css';

const emissionsFactors = {
  truck: 0.209, // kg CO2 per km
  van: 0.156, // kg CO2 per km
  ferry: 0.120, // kg CO2 per km
  electricTruck: 0.050, // Example emissions factor for electric truck (adjust as needed)
};

const distances = {
  // Within Finland
  'Helsinki-Kokkola': 483,
  'Kokkola-Oulu': 198,
  'Kokkola-Vaasa': 121,
  'Kokkola-Tampere': 295,
  'Kokkola-Jyväskylä': 218,
  'Helsinki-Oulu': 607,
  'Helsinki-Rovaniemi': 821,
  'Helsinki-Turku': 165,
  'Helsinki-Tampere': 176,
  'Helsinki-Vaasa': 419,
  'Helsinki-Jyväskylä': 271,
  'Helsinki-Kuopio': 383,
  'Helsinki-Joensuu': 437,
  'Helsinki-Lappeenranta': 230,

  // International distances (placeholder values)
  'Helsinki-Frankfurt': 1826,
  'Helsinki-Darmstadt': 1880,
  'Darmstadt-Helsinki': 1880,
  'Darmstadt-Frankfurt': 30,
  'Frankfurt-Kokkola': 1826,
  'Darmstadt-Kokkola': 1856,
  'Kokkola-Darmstadt': 1856,
  'Frankfurt-Helsinki': 1826,
};
const Package_Level = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [transport, setTransport] = useState('');
  const [emission, setEmission] = useState(0);

  const calculateEmission = () => {
    const key = `${start}-${end}`;
    const reverseKey = `${end}-${start}`;
    const distance = parseInt(distances[key]) || parseInt(distances[reverseKey]) || 0;
    const factor = emissionsFactors[transport];
    const result = distance * factor;
    setEmission(result);
  };

return (
    <div className="carbon-calculator-container">
      <h1>Carbon Calculator</h1>

      <div className="select-container">
        <select onChange={(e) => setStart(e.target.value)}>
          <option value="">Select starting point</option>
          <option value="Helsinki">Helsinki</option>
          <option value="Kokkola">Kokkola</option>
          <option value="Darmstadt">Darmstadt</option>
          <option value="Frankfurt">Frankfurt</option>
          <option value="Oulu">Oulu</option>
          <option value="Rovaniemi">Rovaniemi</option>
        </select>

        <select onChange={(e) => setEnd(e.target.value)}>
          <option value="">Select destination</option>
          <option value="Kokkola">Kokkola</option>
          <option value="Oulu">Oulu</option>
          <option value="Vaasa">Vaasa</option>
          <option value="Tampere">Tampere</option>
          <option value="Jyväskylä">Jyväskylä</option>
          <option value="Darmstadt">Darmstadt</option>
          <option value="Rovaniemi">Rovaniemi</option>
          <option value="Frankfurt">Frankfurt</option>
          <option value="Helsinki">Helsinki</option>
        </select>

        <select onChange={(e) => setTransport(e.target.value)}>
          <option value="">Select transportation mode</option>
          <option value="truck">Truck</option>
          <option value="van">Van</option>
          <option value="ferry">Ferry</option>
          <option value="electricTruck">Electric Truck</option> {/* ✅ Added here */}
        </select>
      </div>

      <button className="calculate-button" onClick={calculateEmission}>Calculate</button>

      <div className="result-container">
        Carbon Emissions: {emission.toFixed(2)} kg CO2
      </div>
    </div>
  );
};

export default Package_Level;
