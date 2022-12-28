import { createSlice } from "@reduxjs/toolkit"


const initialState = {
     width : 0,
     opacity : 0,
     marginLeft : 0,
     paddingLeft : 0,
     val : false
}

const searchInpSlicer = createSlice({
    name : 'searchInp',
    initialState,
    reducers : {
        changeInpWidth : (state,action) => {
           state.width = action.payload
        },
        changeInpOpacity : (state,action) => {
            state.opacity = action.payload
        },
        changeInpML : (state,action) => {
            state.marginLeft = action.payload
        },
        changeInpPL : (state,action) => {
            state.paddingLeft = action.payload
        },
        changeVal : (state,action) => {
          state.val = action.payload
        }
    }
})

export const { changeInpWidth,changeInpOpacity,changeInpML,changeInpPL,changeVal } = searchInpSlicer.actions

export default searchInpSlicer.reducer