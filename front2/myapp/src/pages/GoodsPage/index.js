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
            <img className="goods-image" src="https://c4.wallpaperflare.com/wallpaper/164/653/243/clock-detail-jewelry-luxury-wallpaper-preview.jpg" alt="Good 1" />
            <div className="goods-content">
              <h2 className="goods-title">Elegant Timepiece</h2>
              <p className="goods-description">Indulge in timeless luxury with our exquisite collection of elegant timepieces. Crafted with precision and attention to detail, each watch is a masterpiece of craftsmanship and style.</p>
              <p className="goods-price">$500</p>
              <button className="button">Shop Now</button>
            </div>
          </div>
          <div className="goods-card">
            <img className="goods-image" src="https://c0.wallpaperflare.com/preview/19/890/506/black-gucci-leather-shoulder-bag.jpg" alt="Good 2" />
            <div className="goods-content">
              <h2 className="goods-title">Luxurious Leather Bag</h2>
              <p className="goods-description">Elevate your fashion ensemble with our luxurious leather bags. Handcrafted from the finest materials, these bags exude sophistication and refinement, making them a perfect companion for any occasion.</p>
              <p className="goods-price">$800</p>
              <button className="button">Shop Now</button>
            </div>
          </div>
          <div className="goods-card">
            <img className="goods-image" src="https://cdn11.bigcommerce.com/s-e6kwfh/images/stencil/590x590/products/33457/85687/default_Side-headphones__04809.1577485689.jpg?c=2" alt="Good 3" />
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