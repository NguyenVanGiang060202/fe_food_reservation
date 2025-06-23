import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/auth/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Types cho useSelector và useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
