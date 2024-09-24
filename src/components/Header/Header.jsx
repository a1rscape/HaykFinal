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
                    <button>Schedule a visit</button>
                </ul>
            </header>
        </>
    )
}

export default Header