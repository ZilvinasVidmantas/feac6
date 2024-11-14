import React from 'react';
import styles from './text-field.module.scss';

export type TextFieldProps = {
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  name: string,
  label: string,
  value: string;
  error?: string;
  touched?: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.ChangeEvent<any>) => void;
};

export function TextField({
  type = 'text',
  name,
  label,
  value,
  error,
  touched,
  disabled,
  onChange,
  onBlur,
}: TextFieldProps) {
  const id = `form-${label}`;
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{`${label}:`}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
      { touched && error && <small>{error}</small>}
    </div>
  );
}
