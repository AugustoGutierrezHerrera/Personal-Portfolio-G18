import linkedin from "../../assets/presentation/linkedin.svg";
import githab from "../../assets/presentation/githab.svg";
import twitter from "../../assets/presentation/twitter.svg";
import instagram from "../../assets/presentation/instagram.svg";
import { useNavigate } from "react-router-dom";


export default function Footer(props) {
  const navigate = useNavigate();
 
/*Crea una linea */
  const underlineStyle = {
    textDecoration: "underline",
    textDecorationColor: "#D3E97A",
  };

  return (
    <section id="footer-section">
      <div>
        <hr className=" border border-custom-484848" />
      </div>

      <div className="flex gap-10 pt-20 pb-20">
        {props.user && (
          <div className="w-1/2 flex flex-col">
            <div>
              <h2 className="text-white font-bebasNeue text-7xl">Contactame</h2>
            </div>
            <div>
              <p className="text-custom-C7C7C7 font-manrope text-base pt-3 ">
                Mi correo de contacto:
                <span
                  className="text-white cursor-pointer "
                  style={underlineStyle}
                >
                  {" "}
                  {props.user.email}
                </span>
              </p>
              <p className=" text-custom-C7C7C7 font-manrope text-base">
                Para mas información, aqui esta mi
                <span
                  onClick={() => navigate("/about")}
                  className="text-white cursor-pointer"
                  style={underlineStyle}
                >
                  {" "}
                  resumen
                </span>
              </p>
            </div>
            <div className="flex gap-7 pt-5">
              <a
                rel="noopener noreferrer"
                href={props.user.linkedinURL}
                target="_blank"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a
                rel="noopener noreferrer"
                href={props.user.githabURL}
                target="_blank"
              >
                <img src={githab} alt="Githab" />
              </a>
              <a
                rel="noopener noreferrer"
                href={props.user.twitterURL}
                target="_blank"
              >
                <img src={twitter} alt="Twitter" />
              </a>
              <a
                rel="noopener noreferrer"
                href={props.user.instagramURL}
                target="_blank"
              >
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
            <div className="mt-auto">
              <p className="text-custom-C7C7C7 font-manrope">
                © 2024 {props.user.name}{" "}{props.user.lastName}
              </p>
            </div>
          </div>
        )}

        {/*-------------- FORMULARIO --------------*/}
        <div className="w-1/3">
          <form className="flex flex-col">
            <label className="text-custom-C7C7C7 font-manrope text-base pb-1">
              Nombres Completos:
            </label>
            <input
              id="name"
              name="nameInput" //para que sirve nameFer*33
              type="text"
              placeholder=""
              className="w-[450px] h-[51px] bg-custom-1A1A1A mb-6 text-custom-C7C7C7 font-manrope text-base px-5 focus:outline-none"
            />

            <label className="text-custom-C7C7C7 font-manrope text-base pb-1">
              Email:
            </label>
            <input
              id="email"
              name="emailInput"
              type="email"
              placeholder=""
              className="w-[450px] h-[51px] bg-custom-1A1A1A  mb-6 text-custom-C7C7C7 font-manrope text-base px-5 focus:outline-none"
            />

            <label className="text-custom-C7C7C7 font-manrope text-base pb-1">
              Teléfono:
            </label>
            <input
              id="telefono"
              name="cellInput"
              type="text"
              placeholder=""
              className="w-[450px] h-[51px] bg-custom-1A1A1A  mb-6 text-custom-C7C7C7 font-manrope text-base px-5 focus:outline-none"
            />

            <label className="text-custom-C7C7C7 font-manrope text-base pb-1">
              Mensaje:
            </label>
            <textarea
              id="message"
              name="messageInput"
              type="text"
              rows={4}
              placeholder=""
              className="w-[450px] h-[51px] bg-custom-1A1A1A  mb-6 text-custom-C7C7C7 font-manrope text-base px-5 pt-3 focus:outline-none"
            />
            <div>
              <button className="text-custom-0A0A0A bg-custom-D3E97A font-manrope font-bold text-base px-7 py-3 rounded-3xl  uppercase">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
