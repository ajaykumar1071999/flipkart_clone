import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        homeList: [],
    },
    reducers: {
        getHomeList: (state, { payload }) => {
            state.homeList = payload;
        }
    }
})

export const { getHomeList } = homeSlice.actions;
export const homeSelector = (state) => state.home;
export const homeReducer = homeSlice.reducer;