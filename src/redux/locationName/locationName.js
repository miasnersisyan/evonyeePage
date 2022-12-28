import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    pathName : 'Home',
}

const locationNameSlicer = createSlice({
    name : 'locationName',
    initialState,
    reducers : {
        changePathName : (state,action) => {
             state.pathName = action.payload
        },
        
    }
})

export const { changePathName } = locationNameSlicer.actions

export default locationNameSlicer.reducer