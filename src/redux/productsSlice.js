import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, deleteDoc, doc } from "firebase/firestore";
import { productsRef, db } from "../config/firebase";

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (_, { getState }) => {
    await addDoc(productsRef, getState().products.draftProduct);
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    await deleteDoc(doc(db, "products", id));
  }
);

const initialState = {
  draftProduct: {
    name: "Nokia",
    description: "3310",
    price: "1600",
    tags: ["old", "haltbar"],
  },
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeDraftProductName: (state, action) => {
      state.draftProduct.name = action.payload;
    },
    changeDraftProductDescription: (state, action) => {
      state.draftProduct.description = action.payload;
    },
    changeDraftProductprice: (state, action) => {
      state.draftProduct.price = action.payload;
    },
    addDraftProductTag: (state, action) => {
      state.draftProduct.tags.push(action.payload);
    },
    deleteDraftProductTag: (state, action) => {
      state.draftProduct.tags = state.draftProduct.tags.filter(
        (tag) => tag !== action.payload
      );
    },
    clearDraftProduct: (state) => {
      state.draftProduct = initialState.draftProduct;
    },
    setDraftProduct: (state, action) => {
      state.draftProduct = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  changeDraftProductName,
  changeDraftProductDescription,
  changeDraftProductprice,
  addDraftProductTag,
  deleteDraftProductTag,
  clearDraftProduct,
  setDraftProduct,
  setProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
