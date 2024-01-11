import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pdfViewerFlag: false,
    darkModeFlag: true
}
export const slice = createSlice({
    name: "Slice",
    initialState,
    reducers: {
        setPdfViewerFlag: (state, action) => {
            state.pdfViewerFlag = action.payload;
        },
        setDarkThemeFlag: (state, action) => {
            state.darkModeFlag = action.payload;
        }
    },
});

export const { pdfViewerFlag, setPdfViewerFlag, darkModeFlag, setDarkThemeFlag } = slice.actions;

export default slice.reducer;