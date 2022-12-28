
import { useEffect } from 'react'
import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { changeHomeVal } from '../../redux/homeVal/homeVal'
import { changePathName } from '../../redux/locationName/locationName'
import { changeMenuVal } from '../../redux/menuVal/menuVal'
import { changeInpML, changeInpOpacity, changeInpPL, changeInpWidth, changeVal } from '../../redux/searchInpVals/searchinpval'
import './style.css'

export default memo(function Header(){

    const dispatch = useDispatch()

    const inpWidth = useSelector((state) => state.searchInp.width)
    const inpOpacity = useSelector((state) => state.searchInp.opacity)
    const inpML = useSelector((state) => state.searchInp.marginLeft)
    const inpPL= useSelector((state) => state.searchInp.paddingLeft)
    const inpVal= useSelector((state) => state.searchInp.val)

    const pathName = useSelector((state) => state.locationName.pathName)
    let homeVal = useSelector((state) => state.homeVal.homeVal)

    let location = useLocation()



     
    useEffect(() => {
        if(window.innerWidth > 1000){
            if(location.pathname === '/'){
                dispatch(changePathName('Home'))
                dispatch(changeHomeVal('none'))
            }else if(location.pathname === '/About'){
                dispatch(changePathName('About Us'))
                dispatch(changeHomeVal('block'))
            }else if(location.pathname === '/WhatWeDo'){
                dispatch(changePathName('What We Do'))
                dispatch(changeHomeVal('block'))
            }else if(location.pathname === '/Testimonial'){
                dispatch(changePathName('Testimonial'))
                dispatch(changeHomeVal('block'))
            }else if(location.pathname === '/Contact'){
                dispatch(changePathName('Contact Us'))
                dispatch(changeHomeVal('block'))
            }
        }else{
            dispatch(changeHomeVal('block'))
        }
    },[location])

   


    return(
        <>
         <div className='w1'>
            <div className='w1-1 G-mainDiv'>
                <div className='w1-1d1'>
                 <img src='./images/menuimg.jpg' className='w1img1' onClick={() => {
                    dispatch(changeMenuVal(0))
                 }} />
                 <a href=''>   <img src='./images/logoimg.jpg' className='w1img2' /></a>
                </div>
                <div className='w1-1d1 mediaw1-1d1'>
                    <button className='icon-user-check w1btn1 w1btnnone'></button>
                    <input className='headerinp1' type='text' style={{
                        width : `${inpWidth}px`,
                        opacity : `${inpOpacity}`,
                        marginLeft : `${inpML}px`,
                        paddingLeft : `${inpPL}px`
                    }} />
                    <button className='icon-equalizer w1btn1' onClick={() => {
                        if(!inpVal){
                            dispatch(changeInpML(20))
                            dispatch(changeInpOpacity(1))
                            dispatch(changeInpPL(20))
                            dispatch(changeInpWidth(300))
                            dispatch(changeVal(true))
                        }else{
                            dispatch(changeInpML(0))
                            dispatch(changeInpOpacity(0))
                            dispatch(changeInpPL(0))
                            dispatch(changeInpWidth(0))
                            dispatch(changeVal(false))
                        }
                    }}></button>
                </div>
            </div>
         </div>
         <div className='w2' style={{backgroundImage : `url('./images/pagesbackimg.jpg')`,display : `${homeVal}`}}>
           <div className='darkDiv'>
            <h1 className='pagesName'>{pathName}</h1>
           </div>
           <div className='w2-1'></div>
         </div>
        </>
    )
},(prevVals,nextVals) => {
    let prev = JSON.stringify(prevVals)
    let next = JSON.stringify(nextVals)
    if(prev === next){
     return true
    }
    return false
 })