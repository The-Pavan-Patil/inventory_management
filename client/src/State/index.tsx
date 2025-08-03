import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
    isDarkMode : boolean;
    isSidebarCollapesed: boolean;
}

const initialState : InitialStateTypes = {
    isDarkMode: false,
    isSidebarCollapesed: false
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsSidebarCollapesed: (state,action: PayloadAction<boolean>) => {
            state.isSidebarCollapesed = action.payload;
        },
        setIsDarkMode: (state,action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        }
    }
})

export const { setIsSidebarCollapesed , setIsDarkMode } = globalSlice.actions; 
export default globalSlice.reducer;
//exporting the actions