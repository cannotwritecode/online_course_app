import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Partials/Footer";
import Navbar from "./Components/Partials/Navbar";
import CoursesPage from './Components/CoursesPage/CoursesPage';
// import Signup from "./Components/Signup/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route path="/signup" element={<Signup />} /> */}

        {/* contact page */}

        {/* signup page */}

        {/* login  page */}

        {/* pricing page */}

        {/* about page */}

        {/* courses page */}
        <Route index path="/courses" element={<CoursesPage />} />


        {/* course open page */}

        {/* home page */}
        <Route index path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;