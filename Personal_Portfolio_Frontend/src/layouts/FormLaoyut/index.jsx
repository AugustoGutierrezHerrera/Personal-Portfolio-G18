import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "../../components";

export default function FormLayouts() {
   const [showPage, setShowPage] = useState(false);
   const navigate = useNavigate();
   
 

  const fetchUser = async () => {
    try {

        //Verifica si hay un token      
        const isAuthenticated = !!localStorage.getItem("token");
        //No deja entrar a la pagina /form hasta que encuentre un token
      if (isAuthenticated) {
        navigate("/form");
        setShowPage(true);
      }else{
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
    
      <Navbar/>
      {/* {<Outlet />} */}

      <div>{showPage && <Outlet />}</div>
    </>
  );
}
