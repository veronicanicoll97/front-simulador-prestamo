import React from 'react';

const SelectComponent = ({ options, value, onChange }: any) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option: any) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export default SelectComponent;
