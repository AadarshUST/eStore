/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./_cat-nav.scss";

const CatNav = () => {
    return (
        <div className="cat-nav-container container">
            <ul>
                <li className="list-items" ><a href="#">Men</a></li>
                <li className="list-items"><a href="#">Women</a></li>
                <li className="list-items"><a href="#">Kids</a></li>
                <li className="list-items"><a href="#">Best Offer</a></li>
            </ul>
        </div>


    )
};

export default CatNav;
