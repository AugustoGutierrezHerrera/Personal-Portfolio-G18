import { useEffect, useState } from "react";
import { Presentation, Proyects, Footer } from "../../components";
import { AboutMe } from "../../components/About/index.js";
import { Link } from "react-router-dom";

import { fetchProjects } from "../../services/projectService.js";
import { BASE_URL } from "../../services/config.js";

export default function Home() {
  const [userData, setUserData] = useState({});
  const [projectData, setProjectData] = useState({});


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

  const fetchDataProject = async () => {
    try {
      
      const dataProject = await fetchProjects();
      setProjectData(dataProject) //Guarda los datos en el estado
      console.log("error 2", projectData)
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchDataUser();
    fetchDataProject();
  }, []);

  const user = userData.length > 0 ? userData[0] : null;



  return (
    <>
      <Presentation user={user} />

      <Proyects projectData={projectData} />

      <AboutMe user={user}>
        <div className=" pb-60">
          <p className="text-custom-D3E97A font-manrope uppercase hover:underline">
            <Link to={"/about"}>Más Sobre Mí</Link>
          </p>
        </div>
      </AboutMe>

      <Footer
        user={user}   
      />
    </>
  );
}
