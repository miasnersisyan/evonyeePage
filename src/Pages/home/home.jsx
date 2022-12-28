
import { useState } from 'react'
import { memo } from 'react'
import HomeW2Comp from '../../Components/homew2Comp/homeW2Comp'
import Homew5Comp from '../../Components/homew5Comp/homew5Comp'

import './style.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import HomeSliderComp from '../../Components/homeSliderComp/homeSliderComp'


function SimpleSlider(){
    const settings = {
        dots : true,
        infinite : true,
        speed : 500,
        slidesToShow : 1,
        slidesToScroll : 1
      }

      let sliderArr = [
        {id : 1,src : './images/homesliderimg1.jpg',text : 'William Butter'},
        {id : 2,src : './images/homesliderimg1.jpg',text : 'Rosy Mike'},
        {id : 3,src : './images/homesliderimg1.jpg',text : 'Lianna John'},
      ]

      
      return (
        <Slider {...settings}>
            {
                sliderArr.map((elm) => {
                    return <HomeSliderComp key={elm.id} props = {elm} />
                })
            }
        </Slider>
      )
}




export default memo(function Home(){


    const [sliderDivX,setSliderDivX] = useState(0)

    let homew2Arr = [
        {id : 1,src : './images/homew2img1.jpg',btntext : 'HOME DECORATE'},
        {id : 2,src : './images/homew2img2.jpg',btntext : 'OFFICE DECORATE'},
        {id : 3,src : './images/homew2img3.jpg',btntext : 'FURNITURE DECORATE'},
        {id : 4,src : './images/homew2img4.jpg',btntext : 'LIGHTING DECORATE'}
    ]
    
    let homew5Arr = [
        {id : 1,src : './images/homw5img1.jpg',text : 'Clean and Decorating office..'},
        {id : 2,src : './images/homw5img2.jpg',text : 'Lighting and Decorating office..'}
    ]

   
  



    return(
       <>
        <div className='homew1' style={{backgroundImage : `url('./images/homebackimg1.jpg')`}}>
           


            <div className='homew1-1'>
                <div className='homew1-1-1'>
                    <div><button className='homew1-1btn1 icon-arrow-left' onClick={() => {
                        setSliderDivX(0)
                    }}></button></div>
                    <div><button className='homew1-1btn1 icon-arrow-right'  onClick={() => {
                        setSliderDivX(50)
                    }}></button></div>
                </div>
            </div>

               <div className='homew1-2-1parent'>
               <div className='homew1-2-1' style={{transform : `translate(-${sliderDivX}%)`}}>
                <div className='homew1-2-1d1'>
                    <div className='homew1-2-1d1d1'>
                        <div className='homew1box1'>
                            <h1 className='homew1box1ver1'>
                            DECORATE <br />SERVICE
                            </h1>
                            <p className='homew1box1p1'>
                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT..
                            </p>
                            <button className='homew1box1btn1'>Contact Us</button>
                        </div>
                    </div>
                    <div className='homew1-2-1d1d2'>
                        <div className='homew1img1div'>
                        <div className='homew1imgparentdiv'>
                           
                        </div>
                        <img src='./images/homew1img1.jpg' className='homew1img1' />
                        </div>
                    </div>
                </div>
                <div className='homew1-2-1d1'>
                <div className='homew1-2-1d1d1'>
                        <div className='homew1box1'>
                            <h1 className='homew1box1ver1'>
                            DECORATE <br />SERVICE
                            </h1>
                            <p className='homew1box1p1'>
                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT..
                            </p>
                            <button className='homew1box1btn1'>Contact Us</button>
                        </div>
                    </div>
                    <div className='homew1-2-1d1d2'>
                        <div className='homew1img1div'>
                        <div className='homew1imgparentdiv'>
                           
                        </div>
                        <img src='./images/homew1img1.jpg' className='homew1img1' />
                        </div>
                    </div>
                </div>
               </div>
               </div>
           

        </div>

        <div className='homew2'>
            <div className='G-mainDiv'>
                <h1 className='G-header'>WHAT WE DO</h1>
                <p className='G-textP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                <div className='homew2-1'>
                   {
                    homew2Arr.map((elm) => {
                        return <HomeW2Comp key={elm.id} props = {elm} />
                    })
                   }
                </div>
                <div className='homew2btn1div'>
                    <button className='G-mainBtn'>READ MORE</button>
                </div>
            </div>
        </div>

        <div className='w3'>
            <div className='G-mainDiv w3-1'>
                <div className='w3-1d1'>
                    <img src='./images/w3-1img1.jpg' className='w3-1d1img1' />
                    <div className='homew3-1posdiv'></div>
                </div>
                <div className='w3-1d1'>
                    <h1 className='G-header'>ABOUT</h1>
                    <p className='G-textP'>
                         ABOUT
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum..
                    </p>
                    <button className='G-mainBtn '>READ MORE</button>
                </div>
            </div>
        </div>

        <div className='w4' style={{backgroundImage : 'url(./images/homew4img.jpg)'}}>
            <div className='w4-1'>
                <div className='w4-1verdiv'>
                <h1 className='G-header'>
                BEST
                DECORATING FOR
                YOUR HOME
                </h1>
                </div>
                <div className='w4-1pdiv'>
                    <p className='G-textP'>
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                </div>
                <button className='G-mainBtn w4-1btn'>GET A QUOTE</button>
            </div>
        </div>
        

        <div className='w5'>
            <div className='G-mainDiv'>
                 <h1 className='G-header'>LATEST NEWS</h1>
                 <p className='G-textP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                 <div className='w5-1'>
                        {
                            homew5Arr.map((elm) => {        
                               return <Homew5Comp key = {elm.id} props={elm} />
                            })
                        }
                 </div>
            </div>
        </div>

        <div className='w6'>
            <div className='G-mainDiv'>
                 <h1 className='G-header'>REQUEST A CALL BACK</h1>
                 <p className='G-textP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                 <div className='w6-1'>
                <div className='w6-1d1'>
                    <input type='text' className='w6inp1' placeholder='Your Name' />
                    <input type='text' className='w6inp1' placeholder='Phone Number' />
                    <input type='text' className='w6inp1' placeholder='Email' />
                    <textarea type='text' className='w6textarea' placeholder='Message' />
                    <div className='G-center'>
                        <button className='G-mainBtn w6btn1'>SEND</button>
                    </div>
                </div>
                <div className='w6-1d1 mediaw6-1d1'>
                    <div className='w6-1d1-1'>
                    <img src='./images/homew6img1.jpg' className='w6img1' />
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div className='w7'> 
          <h1 className='G-header w7ver1'>TESTIMONIAL</h1>
          <div className='G-center'>
            <div className='G-mainDiv w7-1'>
                <SimpleSlider />
            </div>
          </div>
        </div>

        

       </>
    )
})