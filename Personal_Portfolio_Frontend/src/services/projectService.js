import { BASE_URL } from "./config";

//Lista de Projects
export const fetchProjects = async () => {
  try {
    const response = await fetch(`${BASE_URL}projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al obtener los datos");
    }
    const data = await response.json();
    // console.log("error 1", data);
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

//Create Project
export const createProject = async (projectData) => {
  try {
    const response = await fetch(`${BASE_URL}projects/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(errorData.message || "Error al crear el proyecto");
    }

    const data = await response.json();
    return data; // Devuelve los datos del proyecto creado
  } catch (error) {
    console.error("Error creating project:", error);
    throw error; // Lanza el error para que pueda ser manejado por el componente que llama a esta función
  }
};

//Update Project
export const updateProject = async (projectId, projectData) => {
    try {
      const response = await fetch(`${BASE_URL}projects/${projectId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al actualizar el proyecto');
      }
  
      const data = await response.json();
      return data; // Devuelve los datos del proyecto actualizado
    } catch (error) {
      console.error('Error al actualizar el proyecto:', error);
      throw error; // Lanza el error para que pueda ser manejado por el componente que llama a esta función
    }
  };

  export const deleteProject = async(projectId) =>{
    try {
        
        const response = await fetch(`${BASE_URL}projects/${projectId}/`, {
            method:'DELETE',
            headers:{
                'Content-Type': 'aplication/json',                
            },
        });

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error al eliminar el proyecto')
        }
        return;
    } catch (error) {
        console.error('Error al eliminar el proyecto:', error);
        throw error;
    }
  }