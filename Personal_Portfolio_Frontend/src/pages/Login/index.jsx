import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "../../components";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dateEnviada = { email, password };

    try {
      const response = await fetch("https://personal-portfolio-g18.onrender.com/api/v1/login", {
        method: "POST",
        body: JSON.stringify(dateEnviada),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();

        // Guardar el token JWT o cualquier información de sesión que necesites
        localStorage.setItem("token", data.access);
        localStorage.setItem('userId', data.user.id);

        console.log(data);
        navigate("/");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error al enviar la información", error);
      setError("Error de red o servidor");
    }
  };

  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     await signIn(values.email, values.password);

  //     navigate("/");

  //     setValues({
  //       email: "",
  //       password: "",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo"
              />
            </div>
            <div className="my-5">
              <TextField
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu password"
              />
            </div>
            <div className="my-5">
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
                Iniciar Sesión
              </button>
            </div>
          </form>
          <div className="text-center mt-5">
            <p
              className="
            text-white
            font-manrope
            text-base "
            >
              ¿No tienes una cuenta? &nbsp;
              <Link
                className="underline hover:text-custom-C7C7C7"
                to={"/signup"}
              >
                Registrate
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
