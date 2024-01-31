import './CoursesPage.css'
import { Link } from 'react-router-dom'
import course_img from '../../assets/icons/course_img_1.png';

const CoursesPage = () => {
    const coursesPage = [
        {
            course_title: 'Web Design Fundamentals',
            course_desc: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
            course_link: "/",
            course_images: [course_img, course_img, course_img],
            course_tags: [{ label: "4 Weeks", link: "" }, { label: "Beginner", link: "" }],
            course_teacher: "John Smith",
            curriculum_body: [
                {
                    count: "01", label: "Introduction to HTML"
                },
                {
                    count: "02", label: "Styling with CSS"
                },
                {
                    count: "03", label: "Introduction to Responsive Design"
                },
                {
                    count: "04", label: "Design Principles for Web"
                },
                {
                    count: "05", label: "Building a Basic Website"
                },
            ]
        },
        {
            course_title: 'Web Design Fundamentals',
            course_desc: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
            course_link: "/",
            course_images: [course_img, course_img, course_img],
            course_tags: [{ label: "4 Weeks", link: "" }, { label: "Beginner", link: "" }],
            course_teacher: "John Smith",
            curriculum_body: [
                {
                    count: "01", label: "Introduction to HTML"
                },
                {
                    count: "02", label: "Styling with CSS"
                },
                {
                    count: "03", label: "Introduction to Responsive Design"
                },
                {
                    count: "04", label: "Design Principles for Web"
                },
                {
                    count: "05", label: "Building a Basic Website"
                },
            ]
        },
        {
            course_title: 'Web Design Fundamentals',
            course_desc: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
            course_link: "/",
            course_images: [course_img, course_img, course_img],
            course_tags: [{ label: "4 Weeks", link: "" }, { label: "Beginner", link: "" }],
            course_teacher: "John Smith",
            curriculum_body: [
                {
                    count: "01", label: "Introduction to HTML"
                },
                {
                    count: "02", label: "Styling with CSS"
                },
                {
                    count: "03", label: "Introduction to Responsive Design"
                },
                {
                    count: "04", label: "Design Principles for Web"
                },
                {
                    count: "05", label: "Building a Basic Website"
                },
            ]
        },
        {
            course_title: 'Web Design Fundamentals',
            course_desc: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
            course_link: "/",
            course_images: [course_img, course_img, course_img],
            course_tags: [{ label: "4 Weeks", link: "" }, { label: "Beginner", link: "" }],
            course_teacher: "John Smith",
            curriculum_body: [
                {
                    count: "01", label: "Introduction to HTML"
                },
                {
                    count: "02", label: "Styling with CSS"
                },
                {
                    count: "03", label: "Introduction to Responsive Design"
                },
                {
                    count: "04", label: "Design Principles for Web"
                },
                {
                    count: "05", label: "Building a Basic Website"
                },
            ]
        },
        {
            course_title: 'Web Design Fundamentals',
            course_desc: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
            course_link: "/",
            course_images: [course_img, course_img, course_img],
            course_tags: [{ label: "4 Weeks", link: "" }, { label: "Beginner", link: "" }],
            course_teacher: "John Smith",
            curriculum_body: [
                {
                    count: "01", label: "Introduction to HTML"
                },
                {
                    count: "02", label: "Styling with CSS"
                },
                {
                    count: "03", label: "Introduction to Responsive Design"
                },
                {
                    count: "04", label: "Design Principles for Web"
                },
                {
                    count: "05", label: "Building a Basic Website"
                },
            ]
        },
    ]

    return (
        <div className="CoursesPage">
            <div className="head">
                <div className="title">Online Courses on Design and Development</div>
                <div className="description">Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.</div>
            </div>

            <div className="body">
                {
                    coursesPage.map((course, index) => (
                        <div key={course} className="body_item">
                            <div className="row_">
                                <div className="row_item_left">
                                    <div className="title"> Web Design Fundamentals </div>
                                    <div className="description"> Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites. </div>
                                </div>
                                <div className="row_item_right">
                                    <Link to='/'>View Course</Link>
                                </div>
                            </div>

                            <div className="row_">
                                <img src={course_img} alt="" /> {/** X4 */}
                            </div>

                            <div className="row_">
                                <div className="tag_box">
                                    <Link to='/tags/1'>4 Weeks</Link>
                                    <Link to='/tags/1'>Beginner</Link>
                                </div>
                                <div className="name_box">By John Smith</div>
                            </div>

                            <div className="row_">
                                <div className="row_item_head">Curriculum</div>
                                <div className="row_item_body">
                                    <div className="_child">
                                        <div className="child_top">01</div>
                                        <div className="child_bottom">Introduction to HTML</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default CoursesPage;