import { configureStore } from "@reduxjs/toolkit";
import  api  from "./api";
import tokenReducer from './tokenSlice'


export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,  
        token: tokenReducer,    
    },
    middleware: (getDefaultMiddleWare) => 
        getDefaultMiddleWare().concat(api.middleware),
});

