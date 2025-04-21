// SortBar.js
import React from 'react';

function SortBar({ onSortChange }) {
  const sortOptions = [
    { value: 'health', label: 'Health' },
    { value: 'damage', label: 'Damage' },
    { value: 'armor', label: 'Armor' },
  ];

  const handleChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="sort-bar">
      <h3>Sort by:</h3>
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>Select an attribute</option>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortBar;