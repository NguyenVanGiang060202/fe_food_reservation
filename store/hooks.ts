// store/hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Hook thay thế cho useDispatch với type an toàn
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Hook thay thế cho useSelector với type an toàn
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
