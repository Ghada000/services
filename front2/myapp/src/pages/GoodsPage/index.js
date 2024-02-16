import React from 'react'
import NavbarGoods from '@/components/navbarGoods'
import './goods.css'
function index() {
  return (
    <div>
      <NavbarGoods />
      <div className="container">
        <div className="goods-container">
          <div className="goods-header">
            <h1>Welcome to Our Goods Page</h1>
            <p>Explore our curated selection of exceptional goods designed to elevate your lifestyle.</p>
          </div>
          <div className="goods-card">
            <img className="goods-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGeggmz-qr-ZePU_voD614Rhv0Dl6oRkkjsGv6YYtKsw&s" alt="Good 1" />
            <div className="goods-content">
              <h2 className="goods-title">Elegant Timepiece</h2>
              <p className="goods-description">Indulge in timeless luxury with our exquisite collection of elegant timepieces. Crafted with precision and attention to detail, each watch is a masterpiece of craftsmanship and style.</p>
              <p className="goods-price">$500</p>
              <button className="button">Shop Now</button>
            </div>
          </div>
          <div className="goods-card">
            <img className="goods-image" src="path_to_image_2" alt="Good 2" />
            <div className="goods-content">
              <h2 className="goods-title">Luxurious Leather Bag</h2>
              <p className="goods-description">Elevate your fashion ensemble with our luxurious leather bags. Handcrafted from the finest materials, these bags exude sophistication and refinement, making them a perfect companion for any occasion.</p>
              <p className="goods-price">$800</p>
              <button className="button">Shop Now</button>
            </div>
          </div>
          <div className="goods-card">
            <img className="goods-image" src="path_to_image_3" alt="Good 3" />
            <div className="goods-content">
              <h2 className="goods-title">Premium Headphones</h2>
              <p className="goods-description">Experience unparalleled sound quality with our premium headphones. Designed for audiophiles, these headphones deliver crystal-clear audio and unmatched comfort, ensuring an immersive listening experience every time.</p>
              <p className="goods-price">$300</p>
              <button className="button">Shop Now</button>
            </div>
          </div>
          {/* Add more goods cards as needed */}
        </div>
      </div>
    </div>
  );
}


export default index