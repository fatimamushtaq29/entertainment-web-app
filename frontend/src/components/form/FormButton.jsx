export default function FormButton({children}) {
  return (
    <button className="bg-red rounded-md w-full py-3.5 text-[15px] font-light
    leading-tight hover:bg-white hover:text-semiDarkBlue transition duration-[250ms]">{children}</button>
  )
}
