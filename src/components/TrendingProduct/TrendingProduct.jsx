import React from "react";
import "./TrendingProduct.css";
import { useTranslation } from "react-i18next";

 

export default function TrendingProduct() {
const { t } = useTranslation();
  const trendingItems = [
    {
      id: 1,
      brand: "Audio Labs",
      name: "Sonic-X Wireless Headphones",
      price: "$299.00",
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
    },
    {
      id: 2,
      brand: "KeyWorks",
      name: "Tactile Artisan Keyboard",
      price: "$450.00",
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
    },
    {
      id: 3,
      brand: "Form & Clay",
      name: "Organic Sculptural Vase",
      price: "$125.00",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 4,
      brand: "Nomad Collective",
      name: "Cognac Leather Weekender",
      price: "$380.00",
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
    },
    {
  id: 5,
  brand: "Urban Gear",
  name: "Premium Travel Backpack",
  price: "$220.00",
  img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
}
  ];


  return (
    <>


      {/* Trending Products */}

      <section className="trending-section">


        <div className="trending-container">


          <div className="trending-header">


            <div>

              

              <h2>
                {t("trending_now")}
              </h2>

            </div>



            <div className="slider-buttons">

              <button>
                ←
              </button>

              <button>
                →
              </button>

            </div>


          </div>



          <div className="product-grid">


            {
              trendingItems.map((item)=> (

                <div className="product-card" key={item.id}>


                  <div className="product-image">

                    <div
                      className="image-bg"
                   style={{
  backgroundImage: `url(${item.img})`
}}
                    >

                    </div>

                  </div>



                  <div className="product-content">


                    <p className="brand">
                      {item.brand}
                    </p>


                    <h3>
                      {item.name}
                    </h3>



                    <div className="product-footer">


                      <span className="price">
                        {item.price}
                      </span>


                      <button className="cart-button">
                        🛒
                      </button>


                    </div>


                  </div>


                </div>

              ))
            }


          </div>


        </div>


      </section>





      



    </>
  );
}