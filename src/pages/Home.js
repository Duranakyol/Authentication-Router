import { useDispatch, useSelector } from "react-redux";

import { useProductListener } from "../config/firebase";
import { addProduct, deleteProduct } from "../redux/productsSlice";

export default function Home() {
  useProductListener();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(addProduct());
        }}
      >
        ADD PRODUCT
      </button>
      {products.map((product) => (
        <div>
          <h2>{product.name}</h2>
          <button
            onClick={() => {
              dispatch(deleteProduct(product.id));
            }}
          >
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
}
