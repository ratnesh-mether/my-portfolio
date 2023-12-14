import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pdfViewerFlag: false
}
export const slice = createSlice({
    name: "Slice",
    initialState,
    reducers: {
        setPdfViewerFlag: (state, action) => {
            console.log(state)
            state.pdfViewerFlag = action.payload;
        }
    },
});

export const { pdfViewerFlag, setPdfViewerFlag } = slice.actions;

export default slice.reducer;