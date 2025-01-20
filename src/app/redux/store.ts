import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import passwordSlice from './passwordSlice';
import emailSlice from "./emailSlice";
import innSlice from "./innSlice";
import refreshSlice from "./refreshSlice";

// Create the store
const store = configureStore({
    reducer: {
    auth: authSlice,
    password: passwordSlice,
    email: emailSlice,
    inn: innSlice,
    refresh: refreshSlice
    }
});


// Infer types for state and dispatch
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

