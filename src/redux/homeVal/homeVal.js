import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    homeVal : 'none'
}

const homeValSlicer = createSlice({
    name : 'homeVal',
    initialState,
    reducers : {
        changeHomeVal : (state,action) => {
           state.homeVal = action.payload
        }
    }
})

export const { changeHomeVal } = homeValSlicer.actions

export default homeValSlicer.reducer