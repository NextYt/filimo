import React, { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  ButtonElement?: 'button' | 'a';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  onClick, 
  ButtonElement = 'button',
  href = '#',
  type = 'button',
  disabled
}) => {
  if (ButtonElement === 'a') {
    // Force TypeScript to accept the disabled prop on anchor element
    return React.createElement('a', {
      href,
      className,
      onClick,
      disabled
    }, children);
  }

  return (
    <button 
      className={className} 
      onClick={onClick} 
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
