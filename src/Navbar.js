import React from 'react'
import './navbar.css'
import one from './images/1.jpg'
import two from './images/2.jpg'
import three from './images/3.jpg'
import four from './images/4.jpg'


function Navbar() {
  return (
    <>
        <div className='main-container'>
            <p>გამარჯობა! 598 05 30 53 / 599 46 47 11</p>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={one} alt="First slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={two} alt="Second slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={three} alt="Third slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={four} alt="Third slide"></img>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            <p>მოგესალმებით! მოგემსახურებით ევაკუატორით ნებისმიერ დროს 24/7-ზე! დაინტერესების შემთხვევისთვის დაუკონტაქდით ამ ნომერზე: 598 05 30 53 / 599 46 47 11</p>
        </div>
    </>
    )
}

export default Navbar
