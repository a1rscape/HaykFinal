import React from 'react'
import './HeaderTop.css'
import { IoIosMail } from "react-icons/io";
import { FaMap } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const society = [<FaFacebook />, <FaTwitter />, <FaLinkedin />, <FaInstagram />]

const HeaderTop = () => {
    return (
        <div className='HeaderTop_main'>
            <div className='HeaderTop_left'>
                <IoIosMail size={24} style={{ color: 'rgb(255, 96, 55)', marginRight: '10px' }} />
                <span id='first'>hayk@azatyan.com</span>
                <FaMap size={24} style={{ color: 'rgb(255, 96, 55)', marginRight: '10px', marginLeft: '20px' }} />
                <span>Miami Sever Beach, FL 33160</span>
            </div>

            <div className='HeaderTop_right'>
                {society.map((icon, index) => (
                    <span key={index}>
                        {icon}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default HeaderTop