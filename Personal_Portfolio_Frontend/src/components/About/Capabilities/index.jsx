import { useEffect, useState } from "react";


export default function Capabilities(props) {

  const [skillData, setSkillData] = useState({});

  const fetchDataSkill = async () => {
    try {
      const response = await fetch("https://personal-portfolio-g18.onrender.com/api/v1/skills", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const dataSkill = await response.json();
        setSkillData(dataSkill); // Guarda los datos en el estado
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
    fetchDataSkill();
  }, []);

  

 const skill = skillData ? Object.values(skillData) : []


  return (
    <>
      {props.user&&(
        <div  className="flex gap-20 pt-20 pb-20">
          <div className="w-1/2">
            <h2 className=" text-white font-bebasNeue text-7xl">
              Mis Capacidades
            </h2>
          </div>

          <div className="w-1/2">
            <div>
              <p className="text-custom-C7C7C7 text-base pb-10">
               {props.user.descriptionSkills}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {skill.map((doc, index) => (
                  <p key={index} className="text-white uppercase border border-custom-484848 rounded-3xl py-3 px-7 inline-block">
                    {doc.title}
                  </p>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
