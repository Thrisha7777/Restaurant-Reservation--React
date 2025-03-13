import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const text = "Welcome to Indian Restaurant";
  const words = text.split(" ");
  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < words.length) {
        setVisibleWords((prev) => [...prev, words[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 500); // Adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src="l.png" alt="Hotel Logo" className="hotel-logo" />
          <h1 className="logo">Luxury Hotel</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link> {/* Use Link instead of <a href> */}
          </li>
          <li>
            <Link to="/menu">Menu</Link> {/* Use Link instead of <a href> */}
          </li>
          <li>
            <Link to="/contact">Contact</Link>{" "}
            {/* Use Link instead of <a href> */}
          </li>
          <li>
            <Link to="/services">Our Services</Link>{" "}
            {/* Use Link instead of <a href> */}
          </li>
        </ul>
      </nav>

      {/* Hero Section with Image & Text */}
      <div className="hero-section">
        {/* Left Side - Image */}
        <div className="image-container">
          <img
            src="restaurant.jpg"
            alt="Restaurant"
            className="restaurant-image"
          />
        </div>

        {/* Right Side - Animated Text & Description */}
        <div className="text-container">
          <h1 className="animated-text">
            {visibleWords.map((word, index) => (
              <span key={index} className="word">
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="description">
            Experience world-class hospitality and comfort in our luxurious
            hotel. From elegant rooms to fine dining, we offer everything to
            make your stay unforgettable.
          </p>
          <button className="book-now" onClick={() => navigate("/reservation")}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
