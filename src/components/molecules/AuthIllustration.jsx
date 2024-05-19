import logoGadgetly from "../../assets/logo/logo-1-black.png";

const AuthIllustration = ({ image, text }) => {
  return (
    <div className="hidden rounded-xl border border-gray-300 bg-gray-50 px-10 py-14 shadow-lg lg:block">
      <img src={logoGadgetly} alt="Logo Gadgetly" className="w-48" />
      <h2 className="mt-9 w-96 text-3xl font-medium">{text}</h2>
      <img src={image} alt="Auth Illustration" className="mt-24" />
    </div>
  );
};

export default AuthIllustration;
