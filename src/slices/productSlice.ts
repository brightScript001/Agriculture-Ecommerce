import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  productName: string;
  description: string;
  costPerKg: number;
}

interface ProductsState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  isProductCreated: boolean;
  newProductName: string | null;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null,
  isProductCreated: false,
  newProductName: null,
};

// Async thunks
export const getProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const res = await fetch("http://localhost:3000/products");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return res.json();
  }
);

export const createProduct = createAsyncThunk<Product, Product>(
  "products/createProduct",
  async (product) => {
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error("Failed to create product");
    }
    return response.json();
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetProductCreated: (state) => {
      state.isProductCreated = false;
      state.newProductName = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.products = action.payload;
        }
      )
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Failed to fetch products";
      })
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        createProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.isLoading = false;
          state.products.push(action.payload);
          state.isProductCreated = true;
          state.newProductName = action.payload.productName;
        }
      )
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Failed to create product";
      });
  },
});

export default productsSlice.reducer;
export const { resetProductCreated } = productsSlice.actions;
