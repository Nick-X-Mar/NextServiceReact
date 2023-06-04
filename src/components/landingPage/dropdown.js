import React from 'react';

const DropDown = ({ label, options, value, onChange }) => (
  <div style={{ margin: '20px 0' }}>
    <label style={{ display: 'block', marginBottom: '10px' }}>{label}</label>
    <select value={value} onChange={onChange} style={{ display: 'block', width: '100%' }}>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default DropDown;
