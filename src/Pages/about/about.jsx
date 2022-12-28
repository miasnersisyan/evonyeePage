
import { memo } from 'react'
import HomeW2Comp from '../../Components/homew2Comp/homeW2Comp'
import './style.css'

export default memo(function About(){


    let f1Arr = [
        {id : 1,src : './images/homew2img1.jpg',btntext : 'HOME DECORATE'},
        {id : 2,src : './images/homew2img2.jpg',btntext : 'OFFICE DECORATE'},
        {id : 3,src : './images/homew2img3.jpg',btntext : 'FURNITURE DECORATE'},
        {id : 4,src : './images/homew2img4.jpg',btntext : 'LIGHTING DECORATE'},
        {id : 1,src : './images/homew2img1.jpg',btntext : 'HOME DECORATE'},
        {id : 2,src : './images/homew2img2.jpg',btntext : 'OFFICE DECORATE'},
        {id : 3,src : './images/homew2img3.jpg',btntext : 'FURNITURE DECORATE'},
        {id : 4,src : './images/homew2img4.jpg',btntext : 'LIGHTING DECORATE'},
    ]


    return (
      <>
      <div className='f1'>
        <div className='G-mainDiv'>
            <div className='f1-1'>
              {
                f1Arr.map((elm) => {
                    return <HomeW2Comp key={elm.id} props = {elm} />
                })
              }
              </div>
              <div className='G-end'>
                <button className='G-mainBtn'>READ MORE</button>
              </div>
        </div>
      </div>

      <div className='f1'>
            <div className='G-mainDiv f2-1'>
                <div className='f2-1d1'>
                    <img src='./images/aboutf2img1.jpg' className='f2img1' />
                    <div className='f2-1d1posdiv'></div>
                </div>
                <div className='f2-1d2'>
                    <h1 className='G-header'>BEST HOME DECORATION</h1>
                    <p className='G-textP'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..</p>
                    <button className='G-mainBtn'>GET A QUOTE</button>
                </div>
            </div>
      </div>

      <div className='f1'>
            <div className='G-mainDiv f2-1'>
                <div className='f2-1d1'>
                    <img src='./images/aboutf2img2.jpg' className='f2img1' />
                    <div className='f2-1d1posdiv'></div>
                </div>
                <div className='f2-1d2'>
                    <h1 className='G-header'>BEST HOME DECORATION</h1>
                    <p className='G-textP'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..</p>
                    <button className='G-mainBtn'>GET A QUOTE</button>
                </div>
            </div>
      </div>
      
      </>
    )
})