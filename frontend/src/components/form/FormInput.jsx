 const FormInput = ({
  children
}) => {
  return (
    <div className="relative flex">
      {children}
      {/* <input
        ref={ref1}
        className="bg-transparent w-full pb-[18px] text-[15px] font-light
                    leading-tight text-white indent-4 caret-red border-b border-greyishBlue 
                    focus:outline-none focus:border-white"
        placeholder={placeholderText}
        value={value}
        onChange={handleChange}
        name={name}
      />
      <p className={`${errorDisplay} absolute text-[13px] font-light leading-tight text-red right-0 top-0.5`}>{errorMessage}</p> */}
    </div>
  );
}
export default FormInput
