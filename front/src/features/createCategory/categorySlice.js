import { gql } from "@apollo/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../ApolloClient";

const ADD_CATEGORY = gql`
  mutation ADD_CATEGORY($input: CategoryInput!, $image: Upload) {
    addCategory(input: $input, image: $image) {
      id
      name
      image
    }
  }
`;

const DELETE_CATEGORY = gql`
  mutation DELETE_CATEGORY($id: ID!) {
    deleteCategory(id: $id) {
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

// Slice definition
const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
        createCategoryLoading: false,
        getCategoriesLoading: false,
        getCategoriesError: null,
        createCategoryError: null,
        createCategoriesError: null,
    },
    reducers: {
        resetError: (state) => {
            state.createCategoryError = null;
        },
        resetLoading: (state) => {
            state.createCategoryLoading = false;
        },
        addCategoryLocal: (state, action) => {
            const newCategory = action.payload;
            const existingIndex = state.categories.findIndex(
                (category) => category.id === newCategory.id
            );

            if (existingIndex !== -1) {
                state.categories[existingIndex] = newCategory;
            } else {
                state.categories.push(newCategory);
            }
        },
        deleteCategoryLocal: (state, action) => {
            const idToDelete = action.payload;
            state.categories = state.categories.filter(
                (category) => category.id !== idToDelete
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCategory.pending, (state) => {
                state.createCategoryLoading = true;
                state.createCategoryError = null;
            })
            .addCase(createCategory.fulfilled, (state) => {
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
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.getCategoriesLoading = false;
                state.createCategoriesError = action.payload;
            });
    }
});

export default categorySlice.reducer;
export const { resetError, resetLoading, addCategoryLocal, deleteCategoryLocal } = categorySlice.actions;

// Thunks
export const createCategory = createAsyncThunk("category/createCategory", async (formData, { rejectWithValue, dispatch }) => {
    try {
        const { data } = await client.mutate({
            mutation: ADD_CATEGORY,
            variables: {
                input: { name: formData.name, id: formData.id, image: (typeof formData.image === 'string') ? formData.image : null },
                image: (formData.image instanceof File) ? formData.image : null,
            },
            context: {
                useMultipart: true,
            },
            fetchPolicy: "no-cache",
        });

        const category = data.addCategory;
        dispatch(addCategoryLocal(category));

        return category;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const deleteCategory = createAsyncThunk("category/deleteCategory", async (id, { rejectWithValue, dispatch }) => {
    try {
        const { data } = await client.mutate({
            mutation: DELETE_CATEGORY,
            variables: {
                id: id,
            },
            fetchPolicy: "no-cache",
        });

        dispatch(deleteCategoryLocal(id)); 

        return data.deleteCategory;
    } catch (error) {
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
        return rejectWithValue(error.message);
    }
});
