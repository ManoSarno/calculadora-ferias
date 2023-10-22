import React, { useState } from 'react';

type Props = {
  label: string;
  name: string;
  placeholder: string;
  step: string;
  required: boolean;
}

export default function CurrencyInput({label, name, placeholder, step, required}: Props) {
 const [value, setValue] = useState("");

 function formatCurrency(e: any) {

  let number = e.which - 48;
  if(e.which > 47 && e.which < 58) {
    if(value == "") {
      setValue("" + number/100);
    } else {
      let modifiedValue = value.replace('.', '').split('');
      modifiedValue.push(number.toString());
      if(modifiedValue[0] == '0') {
        modifiedValue.shift();
      }
      let commaPosition = modifiedValue.length - 2;
      modifiedValue.splice(commaPosition, 0, '.')
      let finalValue = modifiedValue.join('');
      setValue(finalValue);
    }
  }
  if(e.which == 8) {
    let modifiedValue = value.replace('.', '').split('');
    modifiedValue.pop();
    let commaPosition = modifiedValue.length - 2;
    modifiedValue.splice(commaPosition, 0, '.')
    if(modifiedValue[0] == '.') {
      modifiedValue.unshift('0');
    }
    let finalValue = modifiedValue.join('');
    if(finalValue == "0.00") {
      setValue("");
    } else {
      setValue(finalValue);
    }
  }
 }

 return (
  <div className="flex flex-col gap-0.5 w-full">
    <label className="text-[13px] md:text-sm" htmlFor={name}>{label}</label>
    <div className="flex text-[12px] md:text-[13px] border border-gray rounded overflow-hidden">
      <span className="bg-light-blue p-1.5">R$</span>
      <input
        type="number"
        step={step}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onKeyDown={(e) => formatCurrency(e)}
        onChange={() => console.log('change')}
        className="bg-white h-9 p-1.5 w-full focus:outline-blue"
        required={required}
      />
    </div>
  </div>
 );
};
