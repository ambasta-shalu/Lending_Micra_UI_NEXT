const Input = ({
  type,
  name,
  placeholder,
}: {
  type: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full font-light text-base leading-5 mb-4 py-6 pl-3 bg-neutral-100 rounded"
    />
  );
};

export default Input;
