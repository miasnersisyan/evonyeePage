
import { memo } from 'react'
import './style.css'
import { Link } from "react-router-dom";

export default memo(function Footer(){
    return (
        <>
         <div className='G-center'>
            <div className='footerW1'>
                <div className='G-center'>
                    <div className='footerW1-1'>
                        <div className='footerw1-1d1'>
                            <img src='./images/footerimg1.jpg' className='footerimg1' />
                            <p className='footerp1'>
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna strud exercitation
                            </p>
                        </div>
                        <div className='footerw1-1d2'>
                            <h1 className='footerver1'>Menu</h1>
                            <ul className='footerul1'>
                                <li className='footerli1'><Link  to="/" className='footerlink1' >Home</Link></li>
                                <li className='footerli1'><Link  to="/About" className='footerlink1' >About</Link></li>
                                <li className='footerli1'><a className='footerlink1' href=''>Services</a></li>
                                <li className='footerli1'><Link  to="/WhatWeDo" className='footerlink1' >What we do</Link></li>
                                <li className='footerli1'><Link  to="/Testimonial" className='footerlink1' >Testimonial</Link></li>
                                <li className='footerli1'><Link  to="/Contact" className='footerlink1' >Contact us</Link></li>
                            </ul>
                        </div>
                        <div className='footerw1-1d2'>
                        <h1 className='footerver1'>Instagram</h1>
                        <div className='footerbox1'>
                            <img src='./images/footerimg2.jpg' className='footerimg2' />
                            <p className='footerp2'>
                            Consectetur<br />Adipiscing
                            </p>
                        </div>
                        <div className='footerbox1'>
                            <img src='./images/footerimg3.jpg' className='footerimg2' />
                            <p className='footerp2'>
                            Consectetur<br />Adipiscing
                            </p>
                        </div>
                        </div>
                        <div className='footerw1-1d2'>
                        <h1 className='footerver1'>Subscribe</h1>
                        <input className='footerinp1' type='text' />
                        <button className='footerbtn1'>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <div className='G-center'>
                    <div className='footerW1-2'>
                        <div className='footerw1-2d1'>
                            <button className='icon-location footerbtn2'></button>
                            <h1 className='footerver2'>Location</h1>
                        </div>
                        <div className='footerw1-2d1'>
                            <button className='icon-envelop footerbtn2'></button>
                            <h1 className='footerver2'>Call +01 1234 567 890</h1>
                        </div>
                        <div className='footerw1-2d1'>
                            <button className='icon-phone-hang-up footerbtn2'></button>
                            <h1 className='footerver2'>demo@gmail.com</h1>
                        </div>
                    </div>
                </div>
            </div>
         </div>

         <div className='footerw2'>
            <p className='footerw2p1'>
               <span className='footerw2sp1 icon-facebook2'></span>
               <span className='footerw2sp1 icon-telegram'></span>
               <span className='footerw2sp1 icon-vk'></span>
               <span className='footerw2sp1 icon-youtube'></span>
               <span className='footerw2sp1 icon-linkedin'></span>
            </p>
            <p className='footerw2p2'>
            © 2020 All Rights Reserved. html.design
            </p>
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