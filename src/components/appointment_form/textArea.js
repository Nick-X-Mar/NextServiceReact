import React from 'react';
import './appointmentForm.css';

const TextArea = ({ value, onChange, placeholder }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="textAreaStyle" // apply the css class
    rows={1}
  />
);

export default TextArea;
