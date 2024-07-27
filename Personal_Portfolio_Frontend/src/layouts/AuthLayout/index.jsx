import { Outlet, useNavigate  } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/auth";

export default function AuthLayouts() {
  const [showPage, setShowPage] = useState(false);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const user = await getCurrentUser();

      if (user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setShowPage(true);
    }
  };
  
  useEffect(() => {
    fetchUser();
  }, []);

  return <div>{showPage && <Outlet />}</div> 

}
