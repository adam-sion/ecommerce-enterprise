import { gql } from "@apollo/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../../ApolloClient";

const ADD_CATEGORY = gql`
  mutation ADD_CATEGORY($input: CategoryInput!, $image: Upload!) {
    addCategory(input: $input, image: $image) {
      id
      name
      image
    }
  }
`;

export const createCategory = createAsyncThunk("auth/getUser", async (formData, { rejectWithValue }) => {
    try {
        console.log('hihidsd');
        console.log(formData);
        const { data } = await client.mutate({
            mutation: ADD_CATEGORY,
            variables: {
                input: { name: formData.name },
                image: formData.image,
              },
              context: {
                useMultipart: true,
              },
        });
        return data;
    } catch (error) {
        console.error("Create product error:", error);
        return rejectWithValue(error.message);
    }
});

// Slice definition
const categorySlice = createSlice({
    name: "category",
    initialState: {
        createProductLoading: false,
         createProductError: null,
        productCreated: null,
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
            .addCase(createCategory.pending, (state) => {
                state.createProductLoading = true;
                state.createProductError = null;
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.createProductLoading = false;
                state.productCreated = {...action.payload};
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.createProductLoading = false;
                state.createProductError = action.payload;
            });
    }
});

export default categorySlice.reducer;
export const { resetError, resetLoading } = categorySlice.actions;
