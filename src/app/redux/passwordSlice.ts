import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state type
interface PasswordState {
    password: string | null;
}

const initialState: PasswordState = {
    password: null,
};

// Create the password slice
const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        clearPassword: (state) => {
            state.password = null;
        },
    },
});

export const { setPassword, clearPassword } = passwordSlice.actions;
export default passwordSlice.reducer;
