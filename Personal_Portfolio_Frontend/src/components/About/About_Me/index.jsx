import { Children } from "react";

export default function AboutMi({ children, ...props }) {
  return (
    <>
      {props.user && (
        <div  className="flex gap-20 pt-20">
          <div className="w-1/2">
            <h2 className="text-white font-bebasNeue text-7xl ">
              Acerca de mí
            </h2>
          </div>
          <div className="w-10/12">
            <h4 className="text-white font-manrope text-2xl pb-5">
              {props.user.titleAboutMy}
            </h4>
            <p className="text-custom-C7C7C7 text-base pb-10">
              {props.user.descriptionAboutMy}
            </p>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
