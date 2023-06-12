import React, { useState, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import carData from '../../dataset/groupedCarModels.json';
import brandDetails from '../../dataset/carBrands.json';
// import ViberButton from '../viber/viberButton';
import TextArea from './textArea'; // import your custom TextArea
import formConfig from './formConfig';
import "./appointmentForm.css"

const AppointmentForm = () => {
  const [description, setDescription] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedEngine, setSelectedEngine] = useState(null);
  const [selectedFuel, setSelectedFuel] = useState(null);
  const [engineOptions, setEngineOptions] = useState([]);
  const [cc, setCc] = useState('');
  const [hp, setHp] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    if (selectedBrand) {
      const brandModels = carData.find(brand => brand.brand === selectedBrand.value).models;
      setModels(brandModels.map(model => ({ value: model.parentModel, label: model.parentModel })));
    } else {
      setModels([]);
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedBrand && selectedModel) {
      const brandDetailsEntry = brandDetails.find(entry => entry.brand === selectedBrand.value);
      if (brandDetailsEntry) {
        const modelDetails = brandDetailsEntry.models.filter(model => model.model === selectedModel.value);
        if (modelDetails.length > 0) {
          setSelectedFuel({ label: modelDetails[0].fuel, value: modelDetails[0].fuel });
          setEngineOptions(modelDetails.map(detail => ({ label: detail.engineSpecsTitle, value: detail.engineSpecsTitle })));
        }
      }
    }
  }, [selectedBrand, selectedModel]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!formVisible) {
      // change the form visibility if it is not visible
      setFormVisible(true);
    } else {
      const data = {
        description: description,
        brand: selectedBrand.value,
        model: selectedModel.value,
        fuel: selectedFuel.value,
        engine: selectedEngine.value,
        cc: selectedEngine.value === 'Other' ? cc : undefined,
        hp: selectedEngine.value === 'Other' ? hp : undefined
      };
      // Here you would typically send the data to your backend
      console.log(data);
    }
  };

  const textAreaStyle = { borderRadius: '15px' };

  return (
    <form onSubmit={handleSubmit}>
      <label className="textAreaLabel">
        {/* {formConfig.fields.description.label} */}
        <TextArea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder={formConfig.fields.description.placeholder}
        />
      </label>
      {formVisible && (
        <>
          <label>{formConfig.fields.brand.label}</label>
          <CreatableSelect
            isClearable
            onChange={setSelectedBrand}
            options={carData.map((brand) => ({ value: brand.brand, label: brand.brand }))}
            placeholder={formConfig.fields.brand.placeholder}
          />
          <label>{formConfig.fields.model.label}</label>
          <CreatableSelect
            isClearable
            onChange={setSelectedModel}
            options={models}
            placeholder={formConfig.fields.model.placeholder}
            isDisabled={!selectedBrand}
          />
          <label>{formConfig.fields.fuel.label}</label>
          <CreatableSelect
            isClearable
            onChange={setSelectedFuel}
            options={[
              { label: 'Gasoline', value: 'Gasoline' },
              { label: 'Petrol', value: 'Petrol' },
              { label: 'LPG', value: 'LPG' },
            ]}
            placeholder={formConfig.fields.fuel.placeholder}
            isDisabled={!selectedModel}
          />
          <label>{formConfig.fields.engine.label}</label>
          <CreatableSelect
            isClearable
            onChange={setSelectedEngine}
            options={[{ label: 'Other', value: 'Other' }, ...engineOptions]}
            placeholder={formConfig.fields.engine.placeholder}
            isDisabled={!selectedModel || engineOptions.length === 0}
          />
          {selectedEngine && selectedEngine.value === 'Other' && (
            <>
              <label>{formConfig.fields.cc.label}</label>
              <input type="number" value={cc} onChange={e => setCc(e.target.value)} />
              <label>{formConfig.fields.hp.label}</label>
              <input type="number" value={hp} onChange={e => setHp(e.target.value)} />
            </>
          )}
        </>
      )}
      <div>
        <button type="submit" className="submitButton">{formConfig.submitButton.label}</button>
      </div>
    </form>
  );

};

export default AppointmentForm;
