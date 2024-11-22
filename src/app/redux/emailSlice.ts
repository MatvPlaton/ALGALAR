import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state type
interface EmailState {
    email: string | null;
}

const initialState: EmailState = {
    email: null,
};

// Create the auth slice
const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        clearEmail: (state) => {
            state.email = null;
        },
    },
});

export const { setEmail, clearEmail } = emailSlice.actions;
export default emailSlice.reducer;
