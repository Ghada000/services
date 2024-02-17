import React from 'react'
import NavbarServices from '@/components/navbarServices'
import "./style.css"

function index() {
  return (
    <div>
        <NavbarServices/>
        <div className="container">
        <div className="goods-container">
          <div className="goods-header">
            <h1>Welcome to Our services Page</h1>
            <p>
Let us embark upon an exploration of the diverse array of services offered on our website.</p>
          </div>
          <div className="goods-card">
            <img className="goods-image" src="https://c0.wallpaperflare.com/preview/585/550/396/baby-babysitter-babysitting-beautiful.jpg" alt="Good 1" />
            <div className="goods-content">
              <h2 className="goods-title">Babysitting</h2>
              <p className="goods-description">
Welcome to our premier platform dedicated to providing exceptional babysitting services tailored to meet the unique needs of families.</p>
            
             
            </div>
          </div>
          <div className="goods-card">
            <img className="goods-image" src="https://c1.wallpaperflare.com/preview/989/90/549/hospital-assistance-care-for-caretaker.jpg" alt="Good 2" />
            <div className="goods-content">
              <h2 className="goods-title"> Assistance for seniors</h2>
              <p className="goods-description">
Welcome to our premier platform dedicated to providing exceptional assistance for elderly  tailored to meet the unique needs of families .</p>
             
            </div>
          </div>
          <div className="goods-card">
            <img className="goods-image" src="https://c0.wallpaperflare.com/preview/603/12/903/person-indoor-clean-cleaning.jpg" alt="Good 3" />
            <div className="goods-content">
              <h2 className="goods-title">Housekeeping</h2>
              <p className="goods-description"> 
Welcome to our premier platform dedicated to providing exceptional housekeeping services tailored to meet the unique needs of families .</p>
          
            </div>
          </div>
          {/* Add more goods cards as needed */}
        </div>
      </div>
    </div>
  );
}

export default index