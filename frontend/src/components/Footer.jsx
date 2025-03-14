import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] sm:gap-14 gap-8 my-10 mt-10 text-sm items-center sm:items-start text-center sm:text-left">
            <div>
                <img src={assets.logo} className="sm:mb-5 mb-3 w-32 mx-auto sm:mx-0" alt="" />
                <p className="text-gray-600 w-full md:w-2/3 mx-auto sm:mx-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus sit nulla numquam itaque, veritatis enim eius dolores nam, ea atque
                    ipsa. Sed est nostrum molestias praesentium quas assumenda magni corrupti!
                </p>
            </div>

            <div>
                <p className="text-xl font-medium sm:mb-5 mb-1">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className="text-xl font-medium mb-5 mb-1">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>(02) 8657 0848</li>
                    <li>(0936) 534 2214</li>
                    <li>contact@inspireme.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className="py-5 text-sm text-center">&copy; 2025 InspireMe. All Rights Reserved.</p>
        </div>
    </div>
);
};

export default Footer;
