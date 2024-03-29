import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import colorService from "./colorService"

const initialState = {
    colors: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const getColors = createAsyncThunk("color/get-colors", async (thunkAPI) => {
    try {
        return await colorService.getColors();
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
export const createColors = createAsyncThunk("color/create-colors", async (colorData, thunkAPI) => {
    try {

        return await colorService.createColor(colorData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getColors.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getColors.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.colors = action.payload;
            })
            .addCase(getColors.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createColors.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createColors.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdColor = action.payload;
            })
            .addCase(createColors.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
    }
})

export default colorSlice.reducer;