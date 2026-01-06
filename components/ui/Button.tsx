import React from "react";
import Link from "next/link";
import { Button as MuiButton } from "@mui/material";
import type { ButtonProps } from "@/types";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  external = false,
  disabled = false,
  ...props
}) => {

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: 'linear-gradient(to right, #ea580c, #fb923c)', // secondary-600 to secondary-400
          color: 'white',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          '&:hover': {
            background: 'linear-gradient(to right, #f97316, #fdba74)', // secondary-500 to secondary-300
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            transform: 'scale(1.05)',
          }
        };
      case 'secondary':
        return {
          background: 'linear-gradient(to right, #ca8a04, #facc15)', // accent-600 to accent-400
          color: '#111827', // gray-900
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          '&:hover': {
            background: 'linear-gradient(to right, #eab308, #fde047)', // accent-500 to accent-300
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            transform: 'scale(1.05)',
          }
        };
      case 'outline':
        return {
          border: '2px solid white',
          color: 'white',
          bgcolor: 'transparent',
          '&:hover': {
            bgcolor: 'white',
            color: '#111827', // gray-900
          }
        };
      case 'ghost':
        return {
          color: 'white',
          bgcolor: 'transparent',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.1)',
          }
        };
      default:
        return {};
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm': return { px: 2, py: 1, fontSize: '0.875rem' };
      case 'lg': return { px: 4, py: 2, fontSize: '1.125rem' };
      default: return { px: 3, py: 1.5, fontSize: '1rem' };
    }
  };

  const commonSx = {
    ...getVariantStyles(),
    ...getSizeStyles(),
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.025em',
    borderRadius: '0.5rem',
    transition: 'all 0.3s',
    textDecoration: 'none',
    ...((props as any).sx || {}), // In case sx is passed via props or className (though className is different)
  };

  if (href) {
    if (external) {
      return (
        <MuiButton
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          disabled={disabled}
          sx={commonSx}
          className={className}
        >
          {children}
        </MuiButton>
      );
    }

    return (
      <Link href={href} passHref legacyBehavior>
        <MuiButton component="a" disabled={disabled} sx={commonSx} className={className}>
          {children}
        </MuiButton>
      </Link>
    );
  }

  return (
    <MuiButton onClick={onClick} disabled={disabled} sx={commonSx} className={className}>
      {children}
    </MuiButton>
  );
};

export default Button;
