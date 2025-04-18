import React from 'react';
import './Toggle.css';

interface ToggleProps {
  id: string;
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
}

/**
 * Reusable toggle switch component
 */
const Toggle: React.FC<ToggleProps> = ({
  id,
  label,
  checked,
  onChange,
  className = '',
  disabled = false
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className={`toggle-container ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
        className="toggle-input"
        disabled={disabled}
      />
      <label htmlFor={id} className="toggle-label">
        {label && <span className="toggle-text">{label}</span>}
      </label>
    </div>
  );
};

export default Toggle;