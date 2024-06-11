import { Link } from "react-router-dom";
import IconButton from "../atoms/IconButton";
import { Cart, Heart } from "../atoms/icons";
import { formatToRp } from "../../utils/format";

const ProductCard = ({ name, image, price, id, variant }) => {
  return (
    <div className="inline-block rounded-[10px] bg-white p-[18px] shadow">
      <div className="h-[346.364px] w-[346.364px] rounded-[10px] border border-gray-300">
        <Link to={`/products/${id}`}>
          <img
            src={image}
            alt={`Product ${name} Image`}
            className="h-full w-full rounded-[10px] object-cover"
          />
        </Link>
      </div>
      <div className="mt-3">
        <h6 className="text-2xl font-semibold text-black">
          <Link to={`/products/${id}`}>{name}</Link>
        </h6>
        <p className="mt-[9px] text-xl font-medium text-gray-600">{variant}</p>
        <div className="mt-[26px] flex items-center justify-between">
          <p className="text-[22px] font-medium leading-6 text-orange-500">
            {formatToRp(price)}
          </p>
          <div className="flex items-center gap-3">
            <IconButton outline icon={<Heart pathFill="#f97316" />} />
            <IconButton icon={<Cart />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
