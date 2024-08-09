import { RootState } from './../Store/Store';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../Store/Store";



// типизированный диспатч
export const useAppDispatch = () => useDispatch<AppDispatch>()
//типизированный useSelector для работы со стэйтом
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector