import React from 'react';
import Select from 'react-select';
import '../../style/DropDownList.css';

export default function DropDownList(props) {
  
  function parseOptionsToDropDown(optionToParse = props.options) {
    return optionToParse.map(currentOptions => ({
      value: currentOptions.codigo,
      label: currentOptions.nome
    }));
  }

  return (
    <Select className='custom-dropdownlist' {...props} options={parseOptionsToDropDown()} />
  );
}
