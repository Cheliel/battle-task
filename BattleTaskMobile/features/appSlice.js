import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        screen: 'splash'
    },
    reducers: {
        openScreen: (state, action)=>{
            state.screen = action.payload.screen;
            state.id = action.payload.id;
        },
    },
});

export const { openScreen } = appSlice.actions;

export const getCurrentIdParam = state => state.app.id;
export const getCurrentScreen = state => state.app.screen;

export default appSlice.reducer;