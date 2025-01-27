import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import FeaturedDestinations from "./FeaturedDestinations";
import Testimonials from "./Testimonials";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore the world's most beautiful destinations</p>
          <SearchBar />
        </div>
      </section>
      <FeaturedDestinations />
      <Testimonials />
    </div>
  );
};

export default Home;
