import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state type
interface PasswordState {
    inn: string | null;
}

const initialState: PasswordState = {
    inn: null,
};

// Create the password slice
const innSlice = createSlice({
    name: 'inn',
    initialState,
    reducers: {
        setInn: (state, action: PayloadAction<string>) => {
            state.inn = action.payload;
        },
        clearInn: (state) => {
            state.inn = null;
        },
    },
});

export const { setInn, clearInn } = innSlice.actions;
export default innSlice.reducer;
