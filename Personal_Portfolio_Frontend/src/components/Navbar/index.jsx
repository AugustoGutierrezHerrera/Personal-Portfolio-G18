import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [userData, setUserData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/usersdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const dataUser = await response.json();
        setUserData(dataUser); // Guarda los datos en el estado
      } else {
        const errorData = await response.json();
        console.error(
          "Error fetching data:",
          errorData.message || "Error al obtener los datos"
        );
      }
    } catch (error) {
      console.error("Error al realizar la solicitud", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const user = userData.length > 0 ? userData[0] : null;

  const navigate = useNavigate();

  // Función Click - se desplaza al componente Footer
  const handleClick = () => {
    //Busca
    const sectionFooter = document.getElementById("footer-section");
    sectionFooter.scrollIntoView({ behavior: "smooth" });
  };

  //Verifica si hay un token
  const isAuthenticated = !!localStorage.getItem("token");

  //Cerrar Sesion
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center py-5">
      <div className="flex items-center gap-4">
        {isAuthenticated && user ? (
          <div className="flex items-center gap-2">
            <div>
              <img
                src={user.photoPerfilUrl}
                alt=""
                className="w-[60px] h-[60px] object-cover rounded-full"
              />
            </div>
            <div>
              <p className="text-white font-manrope text-xs ">{user.name}</p>
              <p className="text-white font-manrope text-xs ">{user.email}</p>
            </div>
          </div>
        ) : (
          <div>
            {user && (
              <p className="font-bebasNeue text-xl text-textColor">
                {user.name} {user.lastName}
              </p>
            )}
          </div>
        )}
      </div>
      <div>
        <ul className="flex gap-8 list-none">
          <li>
            <a
              onClick={() => navigate("/")}
              className="font-inter text-sm text-custom-C7C7C7 cursor-pointer  hover:text-white hover:underline"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/about")}
              className="font-inter text-sm text-custom-C7C7C7 cursor-pointer hover:text-white hover:underline"
            >
              Sobre Mi
            </a>
          </li>
          <li>
            <a
              className="font-inter text-sm text-custom-C7C7C7 cursor-pointer hover:text-white hover:underline"
              onClick={handleClick}
            >
              Contacto
            </a>
          </li>
          {isAuthenticated && (
            <li>
              <a
                onClick={() => navigate("/form")}
                className="font-inter text-sm text-custom-C7C7C7 cursor-pointer hover:text-white hover:underline"
              >
                Configuración
              </a>
            </li>
          )}
          {isAuthenticated ? (
            <li>
              <a
                onClick={handleLogout}
                className="font-inter text-sm text-custom-C7C7C7 cursor-pointer hover:text-white hover:underline"
              >
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <li>
              <a
                onClick={() => navigate("/login")}
                className="font-inter text-sm text-custom-C7C7C7 cursor-pointer hover:text-white hover:underline"
              >
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
