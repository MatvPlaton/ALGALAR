// redux/ReduxProvider.tsx
'use client'; // Required for client-side state management

import { Provider } from 'react-redux';
import store from './store';

interface ReduxProviderProps {
    children: React.ReactNode;
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
