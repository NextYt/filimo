import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ButtonElement?: 'button' | 'a';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  onClick, 
  ButtonElement = 'button',
  href = '#',
  type = 'button'
}) => {
  if (ButtonElement === 'a') {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button 
      className={className} 
      onClick={onClick} 
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
