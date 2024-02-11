import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const getUserFromLocal = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
const initialState = {
    // user: userDefaultState,
    user: getUserFromLocal,
    orders: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
}

export const login = createAsyncThunk('auth/admin-login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const serializedError = {
            name: error.name,
            message: error.message,
            stack: error.stack,
            // Add more properties if needed
        };
        return thunkAPI.rejectWithValue(serializedError)
    }
})

export const getOrders = createAsyncThunk("order/get-orders", async (thunkAPI) => {
    try {
        return await authService.getOrders();
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                // state.user = null;
                state.message = action.error;
            })
            .addCase(getOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.orders = action.payload;
                state.message = "success";
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
    }
})


export default authSlice.reducer;