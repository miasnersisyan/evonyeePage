
import { memo } from 'react'
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




export default memo(function Testimonial(){
    return (
        <div className='w7'> 
        <h1 className='G-header w7ver1'>TESTIMONIAL</h1>
        <div className='G-center'>
          <div className='G-mainDiv w7-1'>
              <SimpleSlider />
          </div>
        </div>
      </div>
    )
})