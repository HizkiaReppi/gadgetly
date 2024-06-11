import { useSelector } from "react-redux";

const Checkout = () => {
  const checkoutData = useSelector((state) => state.cart.checkoutData);

  return (
    <div>
      Checkout
      {checkoutData.map((data) => (
        <div key={data.id}>{data.name}</div>
      ))}
    </div>
  );
};

export default Checkout;
