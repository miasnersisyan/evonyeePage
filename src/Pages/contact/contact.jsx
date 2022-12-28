
import { memo } from 'react'
import './style.css'

export default memo(function Contact(){
    return (
     <>
      <div className='d1'>
        <div className='d1-1'>
            <div className='d1-1d1'>
                <button className='d1-1btn1 icon-phone-hang-up'></button>
                <h1 className='d1-1ver1'>Call +01 1234 567 890</h1>
            </div>
            <div className='d1-1d1'>
                <button className='d1-1btn1 icon-envelop'></button>
                <h1 className='d1-1ver1'>demo@gmail.com</h1>
            </div>
            <div className='d1-1d1'>
                <button className='d1-1btn1 icon-location'></button>
                <h1 className='d1-1ver1'>Location</h1>
            </div>
        </div>
      </div>
      <h1 className='G-header textCenter'>REQUEST A CALL BACK</h1>
      <p className='G-textP textCenter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <div className='d2'>
        <div className='d2-1'>
            <input type='text' className='d2-1inp1' placeholder='Your Name' />
            <input type='text' className='d2-1inp1' placeholder='Phone number' />
            <input type='text' className='d2-1inp1' placeholder='Email' />
            <textarea className='d2-1text1' placeholder='Message'></textarea>
            <div className='G-center'>
                <button className='G-mainBtn d2-1btn1'>SEND</button>
            </div>
        </div>
      </div>
     </>
    )
})