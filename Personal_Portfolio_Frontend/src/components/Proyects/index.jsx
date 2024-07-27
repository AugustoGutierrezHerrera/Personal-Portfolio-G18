
export default function Proyects(props) {
  //Convierte el objeto en un array para iterar
  const project = props.projectData ? Object.values(props.projectData) : [];

  return (
    <>
      <div>
        <div>
          <hr className="border border-custom-484848" />
        </div>
        <div className="w-1/2 pt-20">
          <h2 className="text-white font-bebasNeue text-7xl pb-3">
            Proyectos Destacados
          </h2>
          <p className="text-custom-C7C7C7 font-manrope text-base pb-20">
            Estos son algunos de los proyectos seleccionados que muestran mi
            pasión por el desarrollo front-end.
          </p>
        </div>
        {props.projectData && (
          <div>
            {project.map((doc, index) => (
              <div key={index} className="flex gap-10 pb-24 items-center">
                <div className="w-1/2">
                  <img src={doc.imgUrl} alt="" />
                </div>
                <div className="w-7/12">
                  <h4 className="text-white text-3xl pb-5">{doc.title}</h4>
                  <p className="text-custom-C7C7C7 text-base pb-10">
                    {doc.description}
                  </p>
                  <h6 className="text-white text-sm font-manrope uppercase pb-2">
                    Información de Proyecto
                  </h6>

                  <hr className="border-custom-484848" />
                  <div className="py-2 flex justify-between">
                    <p className="text-white text-sm font-manrope">Cliente</p>
                    <p className="text-custom-C7C7C7 text-sm">{doc.client}</p>
                  </div>

                  <hr className="border-custom-484848" />
                  <div className="py-2 flex justify-between">
                    <p className="text-white text-sm font-manrope">Año</p>
                    <p className="text-custom-C7C7C7 text-sm">{doc.date}</p>
                  </div>

                  <hr className="border-custom-484848" />
                  <div>
                    <div className="py-2 flex justify-between">
                      <p className="text-white text-sm font-manrope">Cargo</p>
                      <p className="text-custom-C7C7C7 text-sm font-manrope">
                        {doc.role}
                      </p>
                    </div>
                    <hr className="border-custom-484848" />

                    <div className="flex gap-7 pt-5" >
                      <div className=" ">
                        <a href={doc.viewUrl} target="_blank"><p className="text-custom-D3E97A font-manrope uppercase hover:underline" >
                          Ver Proyecto
                        </p></a>
                        
                      </div>
                      <div className="">
                        <a href={doc.demoUrl} target="_blank"><p className="text-custom-D3E97A font-manrope uppercase hover:underline">
                          Ver Demo
                        </p></a>
                        
                      </div>
                      <div className="">
                        <a href={doc.githabURL} target="_blank"><p className="text-custom-D3E97A font-manrope uppercase hover:underline">
                          Ver Codigo
                        </p></a>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-20">
              <hr className="border border-custom-484848" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
