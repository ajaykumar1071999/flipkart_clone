import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { homeReducer } from "./slicers/homeslice";
const rootReducer = combineReducers({
    home: homeReducer,
})

export const store = configureStore({ reducer: rootReducer });