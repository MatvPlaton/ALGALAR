import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state type
interface AuthState {
    token: string | null;
}

const initialState: AuthState = {
    token: null,
};

// Create the auth slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        clearToken: (state) => {
            state.token = null;
        },
    },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
