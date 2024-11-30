import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import authSlice from './authSlice'; // Your slices
import passwordSlice from './passwordSlice';
import emailSlice from "./emailSlice";
import innSlice from "./innSlice";
import refreshSlice from "./refreshSlice";
// Persist configuration
const persistConfig = {
    key: 'root',
    storage,
};

// Combine reducers
const rootReducer = combineReducers({
    auth: authSlice,
    password: passwordSlice,
    email: emailSlice,
    inn: innSlice,
    refresh: refreshSlice
});

// Persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable checks for redux-persist
        }),
});

export const persistor = persistStore(store);

// Infer types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

