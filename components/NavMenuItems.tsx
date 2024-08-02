import React from "react";

const NeumorphicButton = ({ children, onClick }) => {
  return (
    <button className={styles.neumorphicButton} onClick={onClick}>
      {children}
    </button>
  );
};

const NavMenuItems = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <NeumorphicButton onClick={handleClick}>Click me</NeumorphicButton>
    </div>
  );
};

export default NavMenuItems;
