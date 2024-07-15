import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <header>
      <nav className="py-3 px-4 flex items-center">
        <h1 className="text-2xl text-atmos-blue-100 poppins-semibold w-full">
          Atmos
        </h1>
        <div className="p-2 text-atmos-blue-100">
          <MenuIcon sx={{ fontSize: 32 }} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
