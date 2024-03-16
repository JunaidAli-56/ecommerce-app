import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import proCategoryService from "./proCategoryService";

const initialState = {
    productCategories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const getCategory = createAsyncThunk("productCategory/get-productCategories", async (thunkAPI) => {
    try {
        return await proCategoryService.getCategory();
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const createCategory = createAsyncThunk("category/create-categories", async (categoryData, thunkAPI) => {
    try {
        return await proCategoryService.createCategory(categoryData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})


export const proCategorySlice = createSlice({
    name: 'productCategories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.productCategories = action.payload;
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdCategory = action.payload;
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
    },
})

export default proCategorySlice.reducer;