
import { configureStore } from '@reduxjs/toolkit'
import homeValSlicer from './homeVal/homeVal'
import locationNameSlicer from './locationName/locationName'
import searchInpSlicer from './searchInpVals/searchinpval'
import menuValSlicer from './menuVal/menuVal'



const store = configureStore({
    reducer : {
        searchInp : searchInpSlicer,
        locationName : locationNameSlicer,
        homeVal : homeValSlicer,
        menuVal : menuValSlicer
    }
})

export default store