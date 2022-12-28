
import { memo } from 'react'
import './style.css'

export default memo(function HomeSliderComp({props}){
    return (
        <div className='w7d1'>
            <div className='w7d1d1'>
                <img src={props.src} className='w7d1img1' />
            </div>
            <div className='w7d1d2'>
                <h1 className='w7d1ver1'>{props.text}</h1>
                <p className='w7d1p1'>Home Rentel</p>
                <p className='w7d1p2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..
                </p>
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
 })