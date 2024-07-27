import { createUser, updateUser } from "../../services/auth";
import { storeFile } from "../../services/storage";
import { TextField } from "../../components";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate =     useNavigate()

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    photoURL: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Se habilitado IsLoading
    setIsLoading(true);
    // Se guarda el archivo en la firebase
    const url = await storeFile(event.target[3].files[0]);

    // Se crea el usuario en Firebase
    await createUser(values.email, values.password);
    // setValues({ email: '', password: '' }); //Este warning indica que estás cambiando un input controlado para que sea no controlado,

    // Se actualiza el nombre de usuario y foto de perfil
    await updateUser(values.fullName, url);
   

    //Se deshabilitado IsLoading
    setIsLoading(false);
    navigate("/")
    
  };

  const imageInput = useRef(null);

  return (
    <>
      <section className="max-w-xl m-auto flex flex-col justify-center h-[100vh]">
        <div className="bg-custom-1A1A1A p-16 rounded-md w-full ms:max-w-ms ">
          <div className="my-5">
            <h2
              className="
             text-center
             text-white
             text-3xl 
             font-bold 
             font-inter
             uppercase"
            >
              Bienvenido 🤗
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="my-5">
            <div className="my-5">
              <TextField
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleInputChange}
                placeholder="Ingresa tus nombre(s) y Apellido(s)"
              />
            </div>
            <div className="my-5">
              <TextField
                name="email"
                type="email"
                value={values.email}
                onChange={handleInputChange}
                placeholder="Ingresa tu correo"
              />
            </div>
            <div className="my-5">
              <TextField
                name="password"
                type="password"
                value={values.password}
                onChange={handleInputChange}
                placeholder="Ingrese su password"
              />
            </div>
            <div className="my-5">
              <input
                ref={imageInput}
                type="file"
                name="photoURL"
                value={values.photoURL}
                onChange={handleInputChange}
                className="
                hidden
                 "
              />
              <button
                type="button"
                onClick={() => imageInput.current.click()}
                className="
              px-5
              py-2
              rounded-md
              text-white
             bg-custom-1A1A1A
              border              
              border-dashed
              border-custom-D3E97A
              font-manrope
              font-bold
              text-lg
              w-full
              hover:bg-custom-D3E97A
              hover:text-custom-1A1A1A
              hover:font-bold
              transition-all ease-out duration-300"
              >
                Subir Imagen de Perfil 📷
              </button>
            </div>

            <div className="my-5">
              <button
                type="Submit"
                className="
                flex items-center justify-center
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
                transition-all ease-out duration-300}"
              >
                {isLoading && (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                Registrarme
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
