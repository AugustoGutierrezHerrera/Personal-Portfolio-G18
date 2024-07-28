import { useEffect, useState } from "react";
import { BASE_URL } from "../../../services/config";


export default function Experience() {
  const [experienceData, setExperienceData] = useState({});

  const fetchDataExperience = async () => {
    try {
      const response = await fetch(`${BASE_URL}experience`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const dataExperience = await response.json();
        setExperienceData(dataExperience); // Guarda los datos en el estado
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
    fetchDataExperience();
  }, []);

  const experience = experienceData ? Object.values(experienceData) : [];

  return (
    <div className="flex gap-20 pt-20 pb-20">
      
      <div className="w-10/12">
        <h2 className=" text-white font-bebasNeue text-7xl">Mi Experiencia</h2>
      </div>
      {experience && (
        <div className="w-10/12">
          {experience.map((doc, index) => (
              <div key={index} className="pb-10">
                <div className="flex justify-between items-center ">
                  <div>
                    <h4 className="text-white font-manrope text-2xl">
                      {doc.title}
                    </h4>
                  </div>
                  <div>
                    <p className="text-white font-manrope text-lg">
                    {doc.date}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-custom-C7C7C7 text-base pb-2">
                  {doc.description}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-manrope text-lg">Empresa: </p>
                  </div>
                  <div>
                    <p className="text-custom-C7C7C7 font-manrope text-lg pl-1">
                    {doc.company}
                    </p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      )}
    </div>
  );
}
