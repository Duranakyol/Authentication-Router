import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useProductListener } from "../config/firebase";
import { addProduct, deleteProduct } from "../redux/productsSlice";

export default function Home() {
  useProductListener();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  
  const [url, setURL] = useState(null);
  const imageRef = ref(storage, "photos/image-name");

  useEffect(() => {
    getDownloadURL(imageRef)
      .then((url) => {
        setURL(url);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [imageRef]);


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ margin: "150px 0 20px 0" }}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.currentTarget.files[0];
            uploadBytes(imageRef, file);
            console.log(file);
          }}
        />
      </div>

      {url && <img src={url} width={240} alt="img" />}
      
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
