import {
  useProductLister,
  deleteProduct,
  addProduct,
} from "../config/firebase";

export default function Home() {
  const products = useProductLister();
  return (
    <div>
      <button
        onClick={() => {
          addProduct();
        }}
      >
        ADD PRODUCT
      </button>
      {products.map((product) => (
        <div>
          <h2>{product.name}</h2>
          <button
            onClick={() => {
              deleteProduct(product.id);
            }}
          >
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
}
