import TextArea from "../../TextArea";
import TextField from "../../TextField";
import { useEffect, useState } from "react";
import { fetchProjects,createProject, updateProject, deleteProject } from "../../../services/projectService";

export default function ProyectForm(props) {
  const [projectData, setProjectData] = useState([]);
  // const project = props.projectData ? Object.values(props.projectData) : [];

  // Obtener el ID del usuario desde localStorage
  const [editingProject, setEditingProject] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    // Cargar proyectos iniciales si hay datos de proyectos en las props
    if (props.projectData) {
      setProjectData(Object.values(props.projectData));
    }
  }, [props.projectData]);

  const handleEdit = (project) => {
    setEditingProject(project);
    setSelectedProjectId(project.id); // Guardar el ID del proyecto seleccionado
    // console.log("id de proyecto guardado", selectedProjectId);
    // console.log("datos de proyecto guardado", editingProject);
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const projectData = Object.fromEntries(formData.entries());
    const userId = localStorage.getItem("userId"); // Cambia "userId" según el nombre que hayas usado

    //  // Agregar el ID del usuario a projectData
    if (userId) {
      projectData.user = Number(userId);
    }

    try {
      if (editingProject) {
        // Actualizar el proyecto existente
        await updateProject(editingProject.id, projectData);
        setEditingProject(null); // Resetear estado de edición
      } else {
        // Crear un nuevo proyecto
        await createProject(projectData);
      }
      // Actualizar la lista de proyectos después de la creación o actualización
      const updatedProjects = await fetchProjects();
      setProjectData(updatedProjects);

    } catch (error) {
      console.error("Error al crear el proyecto:", error);
      // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error, etc.
    }
  };

  const handleDelete = async (projectId) => {
    try {
      await deleteProject(projectId.id);
      const updatedProjects = await fetchProjects();
      setProjectData(updatedProjects);
    } catch (error) {
      console.error("Error al eliminar el proyecto:", error);
    }
  };

  // Ordenar proyectos por ID antes de renderizarlos
  const sortedProjects = [...projectData].sort((a, b) => a.id - b.id);

  return (
    <>
      <div className="flex flex-col justify-center items-center py-10 ">
        <div className="w-3/5  py-5 ">
          <form onSubmit={handleSubmit} className="my-5 ">
            <div className="my-5">
              <TextField
                type="text"
                name="title"
                placeholder="Ingresa un Título"
                value={editingProject ? editingProject.title|| "" : ""}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div className="my-5">
              <TextField
                type="url"
                name="imgUrl"
                placeholder="Link Foto Proyecto"
                value={editingProject ? editingProject.imgUrl || "": ""}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    imgUrl: e.target.value,
                  })
                }
              />
            </div>
            <div className="my-5">
              <TextArea
                type="text"
                name="description"
                placeholder="Describe tu proyecto"
                value={editingProject ? editingProject.description|| "" : ""}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div className="my-5">
              <TextField
                type="text"
                name="client"
                placeholder="Cliente"
                value={editingProject ? editingProject.client || "": ""}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    client: e.target.value,
                  })
                }
              />
            </div>
            <div className="my-5">
              <TextField
                type="text"
                name="role"
                placeholder="Rol"
                value={editingProject ? editingProject.role || "": ""}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    role: e.target.value,
                  })
                }
              />
            </div>
            <div className="my-5">
              <TextField
                type="date"
                name="date"
                placeholder="Fecha"
                className="appearance-none border border-gray-300 rounded-md  mr-2 w-40"
                value={editingProject ? editingProject.date || "": ""}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    date: e.target.value,
                  })
                }
              />
            </div>
            <div className="my-5">
              <TextField
                type="url"
                name="githabURL"
                placeholder="Link Githab"
                value={editingProject ? editingProject.githabURL || "" : ""}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    githabURL: e.target.value,
                  })
                }
              />
            </div>
            <div className="my-5">
              <TextField 
              type="url" 
              name="demoUrl"
               placeholder="Link Demo" 
               value={editingProject ? editingProject.demoUrl || "": ""}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    demoUrl: e.target.value,
                  })
                }
              />
            </div>
            <div className="my-5">
              <TextField
                type="url"
                name="viewUrl"
                placeholder="Link del Proyecto"
                value={editingProject ? editingProject.viewUrl || "": ""}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    viewUrl: e.target.value,
                  })
                }
              />
            </div>
            |
            <div className=" w-full flex justify-center items-center">
              <div className="w-1/2">             


                <button
                  className="
            px-5
            py-2
            rounded-md
          text-white
          bg-custom-1A1A1A
            border
            border-custom-D3E97A
            font-manrope
            font-bold
            text-lg
            w-full
            hover:bg-custom-D3E97A
            hover:text-custom-1A1A1A
            hover:font-bold
            transition-all ease-out duration-300              
            "
                >
                  {editingProject ? "Actualizar" : "Guardar"}

                </button>
                {editingProject && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="
                    px-5
                    py-2
                    rounded-md
                  text-white
                  bg-custom-1A1A1A
                    border
                    border-custom-D3E97A
                    font-manrope
                    font-bold
                    text-lg
                    w-full
                    hover:bg-custom-D3E97A
                    hover:text-custom-1A1A1A
                    hover:font-bold
                    transition-all ease-out duration-300              
                    "
                  >
                    Cancelar
                  </button>
                )}

              </div>
            </div>
          </form>
        </div>

        <div className=" p-5 w-full ">
          {projectData && (
            <table className=" font-manrope text-xs ">
              <thead className="bg-custom-484848 text-white text-center">
                <tr>
                  <th className="py-2 px-4 ">Id</th>
                  <th className="py-2 px-4 ">Título</th>
                  <th className="py-2 px-4 ">Descripción</th>
                  <th className="py-2 px-4 ">Cliente</th>
                  <th className="py-2 px-4 ">Fecha</th>
                  <th className="py-2 px-4 ">Rol</th>
                  <th className="py-2 px-4 ">Edita</th>
                  <th className="py-2 px-4 ">Elimina</th>
                </tr>
              </thead>
              <tbody className="text-custom-C7C7C7">
                {sortedProjects.map((doc, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 whitespace-nowrap">{doc.id}</td>
                    <td className="py-2 px-4 whitespace-nowrap">{doc.title}</td>
                    <td className="py-2 px-4 ">
                      {/* Reduce el tamaño del texto */}
                      {doc.description.length > 50
                        ? `${doc.description.substring(0, 50)}...`
                        : doc.description}
                    </td>
                    <td className="py-2 px-4 whitespace-nowrap">
                      {doc.client}
                    </td>
                    <td className="py-2 px-4 whitespace-nowrap">{doc.date}</td>
                    <td className="py-2 px-4 whitespace-nowrap">{doc.role}</td>
                    <td className="text-center">
                      <button onClick={() => handleEdit(doc)}>✏️</button>
                    </td>
                    <td className="text-center">
                      <button onClick={()=>handleDelete(doc)}>🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
