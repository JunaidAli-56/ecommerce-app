import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import barndService from "./brandService"

const initialState = {
    brands: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const getBrands = createAsyncThunk("brand/get-brands", async (thunkAPI) => {
    try {
        return await barndService.getBrands();
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBrands.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBrands.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.brands = action.payload;
            })
            .addCase(getBrands.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
    }
})

export default brandSlice.reducer;