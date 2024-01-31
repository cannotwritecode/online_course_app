import { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/Logo.png'
import nav_toggle_btn from '../../assets/icons/nav_toggle_btn.png'
import './Navbar.css'
import { ArrowRightOutlined } from '@ant-design/icons'

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false)

    function handleToggle(e) {
        setToggleNav(!toggleNav)
    }

    return (
        <div className='top_wrapper'>
            {/* flash advert */}
            <Link to='/' className='flsh_sale_link'>
                <div className="flash_sale">
                    <span className="text">Free Courses 🌟 Sale Ends Soon, Get It Now</span>

                    <span className="icon">
                        <ArrowRightOutlined />
                    </span>
                </div>
            </Link>

            <nav className="main_nav_wrapper" >
                <div className="left">
                    <span className="logo_wrapper">
                        <img src={logo} alt="" />
                    </span>

                    <ul className="nav_link_grp">
                        <li className="btn nav_link active">
                            <Link to='/'>Home</Link>
                        </li>

                        <li className="btn nav_link">
                            <Link to='/courses'>Courses</Link>
                        </li>

                        <li className="btn nav_link">
                            <Link to='/about-us'>About us</Link>
                        </li>

                        <li className="btn nav_link">
                            <Link to='/pricing'>Pricing</Link>
                        </li>

                        <li className="btn nav_link">
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="right">
                    <Link to='/signup' className="btn signup_btn">Sign Up</Link>
                    <Link to='/login' className="btn login_btn">Login</Link>

                    <img className='toggleBtn' src={nav_toggle_btn} alt="" onClick={handleToggle} />
                </div>
            </nav >

            <ul className={` ${toggleNav === false ? "mobile_nav_link_grp_hide" : "mobile_nav_link_grp_show"} `}>
                <li className="btn nav_link active">
                    <Link to='/'>Home</Link>
                </li>

                <li className="btn nav_link">
                    <Link to='/courses'>Courses</Link>
                </li>

                <li className="btn nav_link">
                    <Link to='/about-us'>About us</Link>
                </li>

                <li className="btn nav_link">
                    <Link to='/pricing'>Pricing</Link>
                </li>

                <li className="btn nav_link">
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;