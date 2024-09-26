import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import HeaderTop from './HeaderTop/HeaderTop'

const Header = () => {
    const [active, setActive] = useState([1, 0, 0, 0])

    const urls = [
        {
            label: 'Home',
            url: '/'
        },
        {
            label: 'Properties',
            url: '/properties'
        },
        {
            label: 'Property Details',
            url: '/properties-details'
        },
        {
            label: 'Contact Us',
            url: '/contact-us'
        }
    ]

    const handleChangeActive = (id) => {
        const newActive = new Array(active.length).fill(0)
        newActive[id] = 1
        setActive(newActive)
    }

    return (
        <>
            <HeaderTop />
            <header className='header_main'>
                <h1>
                    <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>villa</Link>
                </h1>
                <ul>
                    {urls.map((item, id) => (
                        <li key={id} style={{ color: `${active[id] === 1 ? 'rgb(225, 96, 55)' : ''}` }} onClick={() => handleChangeActive(id)}>
                            <Link to={item.url} style={{ color: 'inherit', textDecoration: 'none' }}>{item.label}</Link>
                        </li>
                    ))}

                    <button className="icon-button">
                        <div className="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24px" height="24px">
                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm-7-9h5v5h-5V10z" />
                            </svg>
                        </div>
                        <span className="button-text">Schedule a visit</span>
                    </button>
                </ul>
            </header>
        </>
    )
}

export default Header