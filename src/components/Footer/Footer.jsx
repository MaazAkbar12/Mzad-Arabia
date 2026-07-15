import React from "react";
import "./Footer.css";

export default function Footer() {

  return (

    <footer className="footer">


      <div className="footer-container">


        {/* Brand Section */}

        <div className="footer-brand">


          <h2>
            Aura Market
          </h2>


          <p>
            Providing a high-trust platform for curated high-value
            transactions since 2024.
          </p>



          <div className="social-links">

            <a href="#">
              ↗
            </a>

            <a href="#">
              ✉
            </a>

            <a href="#">
              ?
            </a>

          </div>


        </div>





        {/* Footer Links */}

        <div className="footer-links">



          <div>

            <h4>
              Shop
            </h4>

            <ul>

              <li>
                <a href="#">
                  New Arrivals
                </a>
              </li>


              <li>
                <a href="#">
                  Best Sellers
                </a>
              </li>

            </ul>


          </div>




          <div>

            <h4>
              Information
            </h4>

            <ul>

              <li>
                <a href="#">
                  About Us
                </a>
              </li>


              <li>
                <a href="#">
                  Terms of Service
                </a>
              </li>


            </ul>


          </div>





          <div>

            <h4>
              Help
            </h4>

            <ul>

              <li>
                <a href="#">
                  Contact Us
                </a>
              </li>


              <li>
                <a href="#">
                  FAQ
                </a>
              </li>


            </ul>


          </div>



        </div>



      </div>





      {/* Bottom Footer */}


      <div className="footer-bottom">


        <p>
          © 2024 Aura Market. All rights reserved.
        </p>



        <div className="payment-icons">

          <span>
            💳
          </span>

          <span>
            💵
          </span>


        </div>


      </div>


    </footer>

  );
}