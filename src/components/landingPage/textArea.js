import React from 'react';

const TextArea = ({ value, onChange, placeholder }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    style={{ width: '100%', height: '300px', fontSize: '20px' }}
  />
);

export default TextArea;
