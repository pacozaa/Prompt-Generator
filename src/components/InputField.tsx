import React, { ChangeEvent, FC } from 'react';
import { styles } from '../styles/styles';

interface InputFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = ({ label, id, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id} style={styles.label}>{label}:</label>
      <input
      style={styles.input}
        type="text"
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;