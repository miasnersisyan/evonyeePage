
import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import menuVal, { changeMenuVal } from '../../redux/menuVal/menuVal'
import './style.css'
import { Link } from "react-router-dom";
export default memo(function MenuComp(){

    const menuLeft = useSelector((state) => state.menuVal.left)
    const dispatch = useDispatch()


    return (
        <div className='menuDiv' style={{left : `-${menuLeft}%`}}>
            <div className='menuDivPosdiv'></div>
            <ul className='menuDiv-1'>
               <li className='menuUlLi1'><Link to="/" className='pageRout1'>01. HOME</Link></li>
               <li className='menuUlLi1'><Link to='/About' className='pageRout1'>02. ABOUT</Link></li>
               <li className='menuUlLi1'><Link to='/WhatWeDo' className='pageRout1'>03. WHAT WE DO</Link></li>
               <li className='menuUlLi1'><Link to='/Testimonial' className='pageRout1'>04. TESTIMONIAL</Link></li>
               <li className='menuUlLi1'><Link to='/Contact' className='pageRout1'>05. CONTACT US</Link></li>
            </ul>
            <span className='menuDivbtn icon-plus' onClick={() => {
                dispatch(changeMenuVal(100))
            }}></span>
        </div>
    )
})