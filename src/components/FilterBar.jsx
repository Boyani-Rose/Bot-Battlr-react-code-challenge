// FilterBar.js
import React from 'react';

function FilterBar({ onFilterChange }) {
  const botClasses = ['Support', 'Medic', 'Assault', 'Defender', 'Captain', 'Witch'];

  const handleChange = (e) => {
    const { value, checked } = e.target;
    onFilterChange(value, checked);
  };

  return (
    <div className="filter-bar">
      <h3>Filter by Class:</h3>
      {botClasses.map((botClass) => (
        <label key={botClass}>
          <input
            type="checkbox"
            value={botClass}
            onChange={handleChange}
          />
          {botClass}
        </label>
      ))}
    </div>
  );
}

export default FilterBar;