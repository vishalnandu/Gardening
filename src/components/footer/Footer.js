import React from 'react';
import "./Style.scss";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faInstagramSquare } from '@fortawesome/free-solid-svg-icons'

 function Footer() {
    return (
        <div className="footer">
            <div className="information">
                <h3>
                    Weclome to Gardening.com
                </h3>
                <p>
                Who else understands your love for gardening better than team Ugaoo? Come, let's join hands to create green spaces that speak volumes about your love for gardening. Our extensive product range, decent prices and presence in cities like Pune, Mumbai, Dehli, Bangalore, Calcutta, Chennai, Hyderabad to name a few; will not only help you grow your own food, but will also assist in creating a
                </p>
            </div>
            <hr></hr>
            <div className="follow-us">
                <h4>FOLLOW US</h4>
                <div className="icons">
                    {/* <FontAwesomeIcon icon={faInstagramSquare}/> */}
                </div>
            </div>
            
        </div>
    )
}
export default Footer;