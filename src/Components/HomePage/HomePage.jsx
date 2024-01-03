import './homepage.css';
import { Link } from 'react-router-dom';

import { ArrowRightOutlined, AlignRightOutlined } from '@ant-design/icons';

import logo from '../../assets/icons/Logo.png'

const HomePage = () => {
    return (
        <div className='HomePage_wrapper'>

            {/* flash advert */}
            <div className="flash_sale">
                <span className="text">Free Courses 🌟 Sale Ends Soon, Get It Now</span>

                <span className="icon">
                    <ArrowRightOutlined />
                </span>
            </div>

            {/* navbar */}
            <nav className="main_nav_wrapper">
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
                </div>

                <div className="toggle_btn_box">
                    <button className='toggleBtn'>
                        <AlignRightOutlined />
                    </button>
                </div>
            </nav>

            {/* banner */}

            {/* partner companies */}

            {/* video banner */}

            {/* banefits */}

            {/* our courses */}

            {/* our testimonials */}

            {/* our pricing */}

            {/* FAQ */}

           
           

        </div>
    )
}

export default HomePage;