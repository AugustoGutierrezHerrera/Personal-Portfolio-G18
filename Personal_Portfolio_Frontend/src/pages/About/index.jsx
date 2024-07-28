import { Footer } from "../../components";
import { AboutMe, Capabilities, Experience } from "../../components/About";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../services/config.js";


import linkedin from "../../assets/presentation/linkedin.svg";
import githab from "../../assets/presentation/githab.svg";

export default function AboutPage() {
  const [userData, setUserData] = useState({});

  // Scroll al inicio de la página al cargar
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);



  const fetchDataUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}usersdata`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const dataUser = await response.json();
        setUserData(dataUser); // Guarda los datos en el estado
        // console.log("ruta del la imagen", userData)
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
    fetchDataUser();
  }, []);
  const user = userData.length > 0 ? userData[0] : null;

  return (
    <>
      <AboutMe user={user}>
        <div className="pb-24">
          {user && (
            <div className="flex items-center gap-4">
              <div>
                <button
                  className="
            flex items-center 
            justify-center
            font-manrope
            font-bold
            uppercase
            text-base
            px-7
            py-3
            rounded-3xl
            text-custom-0A0A0A
            bg-custom-D3E97A"
                >
                  Descarga Mí CV
                </button>
              </div>
              <div
                className=" 
          flex items-center 
          justify-center  
          bg-custom-222222 
          px-3
          py-3
          rounded-full "
              >
                <a target="_blank" href={user.linkedinURL}>
                  <img src={linkedin} alt="Likeding" />
                </a>
              </div>
              <div
                className="
          flex items-center 
          justify-center  
          bg-custom-222222 
          px-3
          py-3
          rounded-full"
              >
                <a target="_blank" href={user.githabURL}>
                  <img src={githab} alt="Githab" />
                </a>
              </div>
            </div>
          )}
        </div>
      </AboutMe>
      {user && (
      <div className="pb-20">
        <img src={user.photoPortadaUrl} alt="" />
      </div>)}

      <Capabilities user={user} />
      <Experience />

      <Footer
        user={user}
      />
    </>
  );
}
