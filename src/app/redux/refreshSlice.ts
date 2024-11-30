import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state type
interface RefreshState {
    refreshToken: string | null;
}

const initialState: RefreshState = {
    refreshToken: null,
};

// Create the refresh slice
const refreshSlice = createSlice({
    name: 'refresh',
    initialState,
    reducers: {
        setRefreshToken: (state, action: PayloadAction<string>) => {
            state.refreshToken = action.payload;
        },
        clearRefreshToken: (state) => {
            state.refreshToken = null;
        },
    },
});

export const { setRefreshToken, clearRefreshToken } = refreshSlice.actions;
export default refreshSlice.reducer;
