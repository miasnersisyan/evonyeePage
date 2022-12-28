
import './style.css'
import { memo } from 'react'

export default memo(function Homew5Comp({props}){
    return (
        <div className='w5d1'>
            <div className='w5d1-1'>
                <img src = {props.src} className='w5d1img1' />
                <ul className='w5d1ul1'>
                    <li className='w5d1ul1li1'>Post By : Evonyee</li>
                    <li className='w5d1ul1li1'>Like  <span className='icon-point-right'></span></li>
                    <li className='w5d1ul1li1'>Comment <span className='icon-bubbles4'></span></li>
                    <li className='w5d1ul1li1'>Share <span className='icon-infinite'></span></li>
                </ul>
                <h1 className='w5d1h1'>{props.text}</h1>
                <p className='w5d1p1'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore consectetur adipiscing elit, ad minim veniam, quis nostrud exercitation</p>
            </div>
        </div>
    )   
},(prevVals,nextVals) => {
    let prev = JSON.stringify(prevVals)
    let next = JSON.stringify(nextVals)
    if(prev === next){
     return true
    }
    return false
 },(prevVals,nextVals) => {
    let prev = JSON.stringify(prevVals)
    let next = JSON.stringify(nextVals)
    if(prev === next){
     return true
    }
    return false
 })