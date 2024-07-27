import linkedin from "../../assets/presentation/linkedin.svg";
import githab from "../../assets/presentation/githab.svg";
import perfil from "../../assets/presentation/perfil.svg";

export default function Presentation(props) {
  // console.log("entre a presentation")
  // console.log(props.users.user_name)

  //Función Click
  const handleClick = () => {
    //Busca
    const sectionFooter = document.getElementById("footer-section");
    sectionFooter.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      
      {props.user && (
        <div
          // key={index}
          className="flex items-center justify-center gap-10 py-20"
        >
          <div className="w-9/12">
            <div>
              <h1 className="text-white font-bebasNeue text-7xl uppercase">
                Hola, Soy
              </h1>
              <h1 className="text-white font-bebasNeue text-7xl uppercase">
                {props.user.name}
              </h1>
              <p className="text-textColor text-sm font- manrope pt-3">
                {props.user.shortDescriptionAboutMy}
              </p>
            </div>
            <div className="flex items-center gap-4 pt-10">
              <div>
                <button
                  onClick={handleClick}
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
                  Contáctame
                </button>
              </div>
              <div>
                <a
                  rel="noopener noreferrer"
                  href={props.user.linkedinURL}
                  target="_blank"
                  className=" 
                  flex items-center 
                  justify-center  
                  bg-custom-222222 
                  px-3
                  py-3
                  rounded-full "
                >
                  <img src={linkedin} alt="Likeding" />
                </a>
              </div>
              <div>
                <a
                  rel="noopener noreferrer"
                  href={props.user.githabURL}
                  target="_blank"
                  className="
                    flex items-center 
                    justify-center  f
                    bg-custom-222222 
                    px-3
                    py-3
                    rounded-full"
                >
                  <img src={githab} alt="Githab" />
                </a>
              </div>
            </div>
          </div>
          <div className="w=1/2">
            <img src={props.user.photoPresentationUrl} alt="Foto de Perfil" />
          </div>
          <br></br>
        </div>
      )}
    </>
  );
}
