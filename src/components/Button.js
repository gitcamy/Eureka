import React from "react";
import "./Button.css";

/**
 * Reusable Button Component
 * 
 * @param {string} variant - 'primary' or 'secondary'
 * @param {string} style - 'filled' or 'outlined'
 * @param {string} arrow - 'up', 'down', 'left', 'right', or null
 * @param {string} children - Button text content
 * @param {function} onClick - Click handler
 * @param {string} className - Additional CSS classes
 * @param {string} type - Button type (button, submit, reset)
 * @param {object} rest - Any other props to pass to button element
 */
const Button = ({
  variant = "primary",
  style = "filled",
  arrow = null,
  children,
  onClick,
  className = "",
  type = "button",
  ...rest
}) => {
  const arrowSymbols = {
    up: "↑",
    down: "↓",
    left: "←",
    right: "→",
  };

  const buttonClasses = [
    "btn",
    `btn-${variant}`,
    `btn-${style}`,
    arrow ? "btn-with-arrow" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      {...rest}
    >
      <span className="btn-text">{children}</span>
      {arrow && (
        <span className={`btn-arrow btn-arrow-${arrow}`}>
          {arrowSymbols[arrow]}
        </span>
      )}
    </button>
  );
};

export default Button;

