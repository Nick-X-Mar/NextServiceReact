import React from 'react';

const InputField = ({ label, value, onChange }) => (
  <div style={{ margin: '20px 0' }}>
    <label style={{ display: 'block', marginBottom: '10px' }}>{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      style={{ display: 'block', width: '100%' }}
    />
  </div>
);

export default InputField;
