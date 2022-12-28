
import { memo } from 'react'
import './style.css'

export default memo(function HomeW2Comp({props}){

   
    return (
        <div className='homew2d1'>
             <div className='G-center'>
            <img src={props.src} className='homew2d1img1' />
            </div>
            <div className='G-center'>
                <button className='homew2d1btn1'>{props.btntext}</button>
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