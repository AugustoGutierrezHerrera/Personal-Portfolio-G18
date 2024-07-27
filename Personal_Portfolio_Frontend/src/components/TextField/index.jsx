export default function TextField(props){

    const {type, name,value,onChange, placeholder} = props

    return(
        <div className="my-5">
              <input
                name={name}
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className="
              px-5
              py-2
              outline-none
              rounded-md
              w-full
              bg-custom-222222
              text-custom-C7C7C7
              text-base
              font-manrope
              "
              />
            </div>
    )
}