import React, { useRef, memo } from 'react';
import './Dropdown.css';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  label?: string;
  options: Option[] | string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  id?: string;
}

/**
 * Reusable dropdown component 
 */
const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
  className = '',
  id
}) => {
  // Handle string[] or Option[] types
  const normalizedOptions: Option[] = options.map(option => 
    typeof option === 'string' 
      ? { value: option, label: option }
      : option
  );
  
  const selectRef = useRef<HTMLSelectElement>(null);
  
  // Simple, direct change handler
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <div className={`reusable-dropdown ${className}`}>
      {label && (
        <div className="dropdown-label">{label}</div>
      )}
      <div className="dropdown-select">
        <select 
          id={id}
          ref={selectRef}
          value={value} 
          onChange={handleChange}
        >
          {normalizedOptions.map((option, index) => (
            <option 
              key={`option-${index}`} 
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default memo(Dropdown);