import { gql } from "@apollo/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../ApolloClient";

const ADD_CATEGORY = gql`
  mutation ADD_CATEGORY($input: CategoryInput!, $image: Upload!) {
    addCategory(input: $input, image: $image) {
      id
      name
      image
    }
  }
`;

const GET_CATEGORIES = gql`
query GET_CATEGORIES {
 categories {
 id
 name
 image
 }
}
`

export const createCategory = createAsyncThunk("category/createCategory", async (formData, { rejectWithValue }) => {
    try {
        const { data } = await client.mutate({
            mutation: ADD_CATEGORY,
            variables: {
                input: { name: formData.name },
                image: formData.image,
              },
              context: {
                useMultipart: true,
              },
              fetchPolicy: "no-cache",
        });
        return data.addCategory;
    } catch (error) {
        console.error("Create category error:", error);
        return rejectWithValue(error.message);
    }
});

export const getCategories = createAsyncThunk("category/getCategories", async (__, { rejectWithValue }) => {
    try {
        const { data } = await client.query({
            query: GET_CATEGORIES,
              fetchPolicy: "no-cache",
        });
        return data.categories;
    } catch (error) {
        console.error("Create category error:", error);
        return rejectWithValue(error.message);
    }
});

// Slice definition
const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
        createCategoryLoading: false,
        getCategoriesLoading:false,
        getCategoriesError:null,
         createCategoryError: null,
    },
    reducers: {
        resetError: (state) => {
            state.createCategoryError= null
        },
        resetLoading: (state) => {
            state.createCategoryLoading=false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCategory.pending, (state) => {
                state.createCategoryLoading = true;
                state.createCategoryError = null;
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.createCategoryLoading = false;

            })
            .addCase(createCategory.rejected, (state, action) => {
                state.createCategoryLoading = false;
                state.createCategoryError = action.payload;
            })
            .addCase(getCategories.pending, (state) => {
                state.getCategoriesLoading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.getCategoriesLoading = false;
                state.categories = action.payload;
                console.log(state.categories);

            })
            .addCase(getCategories.rejected, (state, action) => {
                state.getCategoriesLoading = false;
                state.createCategoryError = action.payload;
            });
    }
});

export default categorySlice.reducer;
export const { resetError, resetLoading } = categorySlice.actions;
