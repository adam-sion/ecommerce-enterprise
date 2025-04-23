import { gql } from "@apollo/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../ApolloClient";

const ADD_PRODUCT = gql`
  mutation ADD_PRODUCT($input: ProductInput!, $image: Upload!, $thumbnails: [Upload!]!) {
    addProduct(input: $input, image: $image, thumbnails: $thumbnails) {
    id
    title
    price
    materials
    thumbnails
    sizes
    image
    description
    stockQuantity
    createdAt
    category {
    id
    name
    image
    }
}
  }
`;

const DELETE_PRODUCT = gql`
  mutation DELETE_PRODUCT($id: ID!) {
    deleteProduct(id: $id) {
    title
}
  }
`;



export const deleteProduct = createAsyncThunk("product/deleteProduct", async (id, { rejectWithValue }) => {
    try {
        const { data } = await client.mutate({
            mutation: DELETE_PRODUCT,
            variables: {id:id},
              fetchPolicy: "no-cache",
        });

        return data.deleteProduct;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


export const createProduct = createAsyncThunk("product/createProduct", async (formData, { rejectWithValue }) => {
    try {
        const { data } = await client.mutate({
            mutation: ADD_PRODUCT,
            variables: {
                input: { title: formData.title, price: formData.price, materials: formData.materials,
                    sizes: formData.sizes, description: formData.description, stockQuantity: formData.stockQuantity,
                    categoryId: formData.categoryId
                 },
                image: formData.image,
                thumbnails: formData.thumbnails
              },
              context: {
                useMultipart: true,
              },
              fetchPolicy: "no-cache",
        });
        return data.addProduct;
    } catch (error) {
        console.log(error.message);
        console.error("Create product error:", error);
        return rejectWithValue(error.message);
    }
});


// Slice definition
const createProductSlice = createSlice({
    name: "createProduct",
    initialState: {
        createProductLoading: false,
         createProductError: null,
         deleteProductLoading:false,
         deleteProductError:null
    },
    reducers: {
        resetError: (state) => {
            state.createProductError= null
        },
        resetLoading: (state) => {
            state.createProductLoading=false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.pending, (state) => {
                state.createProductLoading = true;
                state.createProductError = null;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.createProductLoading = false;
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.createProductLoading = false;
                state.createProductError = action.payload;
            })

            .addCase(deleteProduct.pending, (state) => {
                state.deleteProductLoading = true;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.deleteProductLoading = false;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.deleteProductLoading = false;
                state.deleteProductError = action.payload;
            });
    }
});

export default createProductSlice.reducer;
export const { resetError, resetLoading } = createProductSlice.actions;
