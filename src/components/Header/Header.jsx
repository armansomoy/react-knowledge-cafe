import React from "react";
import profile from '../../images/profile.png'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 m-4 border-b-2">
      <h2 className="text-4xl font-bold">Tailwind</h2>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
