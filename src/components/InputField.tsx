import React, { ChangeEvent, FC } from 'react';

interface InputFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = ({ label, id, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 font-bold text-brown-600">{label}:</label>
      <input
        className="w-full px-3 py-2 mb-4 border border-beige-300 rounded bg-white text-gray-700"
        type="text"
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;