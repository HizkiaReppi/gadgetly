const InputError = ({ error }) => {
  if (error) {
    return <p className="mt-1 text-sm text-red-500 lg:text-base">{error}</p>;
  }
};

export default InputError;
