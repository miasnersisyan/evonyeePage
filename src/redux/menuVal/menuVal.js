import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    left : 100
}

const menuValSlicer = createSlice({
    name : 'menuVal',
    initialState,
    reducers : {
        changeMenuVal : (state,action) => {
           state.left = action.payload
        }
    }
})

export const { changeMenuVal } = menuValSlicer.actions

export default menuValSlicer.reducer

