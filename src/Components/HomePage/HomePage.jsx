import './homepage.css';
import { Link } from 'react-router-dom';

import { ArrowRightOutlined, AlignRightOutlined } from '@ant-design/icons';

import logo from '../../assets/icons/Logo.png';

import banner_icon_1 from '../../assets/icons/banner_icon_1.png';
import banner_icon_2 from '../../assets/icons/banner_icon_2.png';

import adobe from '../../assets/icons/adobe.png';
import amazon from '../../assets/icons/amazon.png';
import netflix from '../../assets/icons/netflix.png';
import ntion from '../../assets/icons/ntion.png';
import spotify from '../../assets/icons/spotify.png';
import zapier from '../../assets/icons/zapier.png';
import zoom from '../../assets/icons/zoom.png';

import test_video from '../../assets/videos/test.mp4';
import test_video_poster from '../../assets/videos/test_video_poster.png';

import ext_link from '../../assets/icons/ext_link.png';

import course_img_1 from '../../assets/icons/course_img_1.png';
import course_img_2 from '../../assets/icons/course_img_2.png';
import course_img_3 from '../../assets/icons/course_img_3.png';
import course_img_4 from '../../assets/icons/course_img_4.png';
import course_img_5 from '../../assets/icons/course_img_5.png';
import course_img_6 from '../../assets/icons/course_img_6.png'

const benefits = [
    {
        id: '01',
        title: "Flexible Learning Schedule",
        subtitle: "Fit your coursework around your existing commitments and obligations.",
        url: ""
    },
    {
        id: '02',
        title: "Expert Instruction",
        subtitle: "Learn from industry experts who have hands-on experience in design and development",
        url: ""
    },
    {
        id: '03',
        title: "Diverse Course Offerings",
        subtitle: "Explore a wide range of design and development courses covering various topics.",
        url: ""
    },
    {
        id: '04',
        title: "Updated Curriculum",
        subtitle: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
        url: ""
    },
    {
        id: '05',
        title: "Practical Projects and Assignments",
        subtitle: "Develop a portfolio showcasing your skills and abilities to potential employers.",
        url: ""
    },
    {
        id: '06',
        title: "Interactive Learning Environment",
        subtitle: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
        url: ""
    },
]

const courses = [
    {
        img: course_img_1,
        tags: ['4 weeks', 'Beginner'],
        author: "John Smith",
        course_title: "Web Design Fundamentals",
        description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
        link: ""
    },
    {
        img: course_img_2,
        tags: ['6 weeks', 'Intermediate'],
        author: "Emily Johnson",
        course_title: "UI/UX Design",
        description: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques. the fundamentals of web design, including HTML, CSS, and responsive design principles.",
        link: ""
    },
    {
        img: course_img_3,
        tags: ['8 weeks', 'Intermediate'],
        author: "David Brown",
        course_title: "Mobile App Development",
        description: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
        link: ""
    },
    {
        img: course_img_4,
        tags: ['10 weeks', 'Beginner'],
        author: "Sarah Thompson",
        course_title: "Graphic Design For Beginners",
        description: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
        link: ""
    },
    {
        img: course_img_5,
        tags: ['10 weeks', 'Intermediate'],
        author: "Michael Adams",
        course_title: "Front-End Web Development",
        description: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
        link: ""
    },
    {
        img: course_img_6,
        tags: ['6 weeks', 'Advance'],
        author: "Jennifer Wilson",
        course_title: "Advanced JavaScript",
        description: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
        link: ""
    },
]

const HomePage = () => {
    return (
        <div className='HomePage_wrapper'>

            {/* flash advert */}
            <Link to='/'>
                <div className="flash_sale">
                    <span className="text">Free Courses 🌟 Sale Ends Soon, Get It Now</span>

                    <span className="icon">
                        <ArrowRightOutlined />
                    </span>
                </div>
            </Link>

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
            <div className="banner_wrapper">
                <div className="banner_wrapper_inner">
                    <div className="row_1">
                        <img src={banner_icon_1} alt="" />
                        <img src={banner_icon_2} alt="" />
                        <span className="unlock">Unlock</span>  Your Creative Potential
                    </div>
                    <div className="row_2">with Online Design and Development Courses.</div>
                    <div className="row_3">Learn from Industry Experts and Enhance Your Skills.</div>
                    <br />
                    <div className="row_4">
                        <Link to='/' className='explore_courses btn'>Explore Courses</Link>
                        <Link to='/' className='view_pricing btn'>View Pricing</Link>
                    </div>
                </div>
            </div>

            {/* partner companies */}
            <div className="partner_companies_wrapper">
                <div className="partner_companies_wrapper_inner">
                    <img src={zapier} alt="" />
                    <span className="divider"></span>
                    <img src={spotify} alt="" />
                    <span className="divider"></span>
                    <img src={zoom} alt="" />
                    <span className="divider"></span>
                    <img src={amazon} alt="" />
                    <span className="divider"></span>
                    <img src={adobe} alt="" />
                    <span className="divider"></span>
                    <img src={ntion} alt="" />
                    <span className="divider"></span>
                    <img src={netflix} alt="" />
                </div>
            </div>

            {/* video banner */}
            <div className="video_banner_wrapper">
                {/* <div className="video_banner_wrapper_inner"> */}
                <video
                    className="video_banner_wrapper_inner"
                    src={test_video}
                    poster={test_video_poster}
                    // autoPlay
                    controls
                    muted
                ></video>
                {/* </div> */}
            </div>

            {/* banefits */}
            <div className="benefits_wrapper">
                <div className="benefits_wrapper_inner">
                    <div className="head_row">
                        <div className="title">Benefits</div>
                        <div className="sub_title">
                            <span>
                                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                            </span>
                            <span>
                                <Link to='/' className='btn'>view all</Link>
                            </span>
                        </div>
                    </div>

                    <div className="body_row">
                        {
                            benefits.map((item, index, arr) => (
                                <div key={index} className="body_item">
                                    <div className="id_row">{item.id}</div>
                                    <div className="title_row">{item.title}</div>
                                    <div className="subtitle_row">{item.subtitle}</div>
                                    <div className="url_row">
                                        <Link to='/'>
                                            {item.url}
                                            <img src={ext_link} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

            {/* our courses */}
            <div className="our_courses_wrapper">
                <div className="our_courses_inner">
                    <div className="head_row">
                        <div className="title">Our Courses</div>
                        <div className="sub_title">
                            <span>
                                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                            </span>
                            <span>
                                <Link to='/' className='btn'>view all</Link>
                            </span>
                        </div>
                    </div>

                    <div className="body_row">
                        {
                            courses.map((item, index, arr) => (
                                <div className="body_item" key={index}>
                                    <div className="row_1">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="row_2">
                                        <div className="tags">
                                            {
                                                item.tags.map((tag, index, arr) => (
                                                    <span className="tag" key={index}>{tag}</span>
                                                ))
                                            }
                                        </div>
                                        <div className="author">By {item.author}</div>
                                    </div>
                                    <div className="row_3">{item.course_title}</div>
                                    <div className="row_4">{item.description}</div>
                                    <Link to={item.link} className="row_5">
                                        Get It Now
                                    </Link>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

            {/* our testimonials */}

            {/* our pricing */}

            {/* FAQ */}

        </div>
    )
}

export default HomePage;