import React, { useState } from 'react';
import axios from 'axios';
import TextArea from './textArea';
import DropDown from './dropdown';
import InputField from './inputfields';

const AppointmentForm = () => {
  const [text, setText] = useState('');
  const [dropDownValue, setDropDownValue] = useState('');
  const [inputFieldValue, setInputFieldValue] = useState('');

  const dropDownOptions = ['Option 1', 'Option 2', 'Option 3'];

  const handleSubmit = async (event) => {
    event.preventDefault();

    // send the form data to your backend server
    await axios.post('/api/your-endpoint', { text, dropDownValue, inputFieldValue });

    // clear the form
    setText('');
    setDropDownValue('');
    setInputFieldValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextArea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Παρακαλώ πείτε μας σε τι εργασίες θα θέλατε να σας βρούμε την καλύτερη προσφορά ..."
      />
      <DropDown
        label="Dropdown Menu"
        options={dropDownOptions}
        value={dropDownValue}
        onChange={(event) => setDropDownValue(event.target.value)}
      />
      <InputField
        label="Input Field"
        value={inputFieldValue}
        onChange={(event) => setInputFieldValue(event.target.value)}
      />
      <button type="submit" style={{ display: 'block', margin: '20px auto' }}>Submit</button>
    </form>
  );
};

export default AppointmentForm;
