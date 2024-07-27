import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
import { useEffect, useState } from "react";
// import { getDataUser } from "../../services/getData.js";

export default function MainLayout() {  
  
  return (
    <>
      <div>
        <Navbar />
        {<Outlet />}
      </div>
    </>
  );
}
