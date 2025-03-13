import React, { useState } from "react";
import "./About.css"; // Import external CSS file

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(selectedMember === member ? null : member);
  };

  return (
    <div className="about-container">
      {/* Logo */}
      <div className="logo-container">
        <img src="restaurant.jpg" alt="Logo" className="logo" />
      </div>

      {/* About Us Section */}
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <div className="about-section">
          <h3 className="about-heading">Our Story</h3>
          <p className="about-text">
            Founded in 2020, Indian Restaurant emerged from a passion to
            celebrate India’s diverse gastronomic heritage. Our restaurant
            bridges the culinary traditions of North and South India, offering
            an authentic and immersive dining experience.
          </p>
        </div>

        <div className="about-section">
          <h3 className="about-heading">Our Mission</h3>
          <p className="about-text">
            We aim to transport our guests through India’s rich flavors,
            showcasing the depth of tandoori traditions and the vibrant spices
            of coastal cuisine. Each dish tells a story of region, culture, and
            culinary craftsmanship.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h3 className="about-heading">Meet Our Team</h3>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member"
              onClick={() => handleMemberClick(member)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <h4 className="team-name">{member.name}</h4>
              <p className="team-role">{member.role}</p>
              {selectedMember === member && (
                <div className="description-cloud">
                  <p>{member.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Chef Venkatesh",
    role: "Executive Chef",
    image: "chef1.jpg",
    description:
      "An expert in traditional Indian flavors with 20 years of experience in fine dining.",
  },
  {
    name: "Chef Damu",
    role: "Restaurant Manager",
    image: "chef2.jpg",
    description:
      "A passionate manager ensuring top-quality service and customer satisfaction.",
  },
  {
    name: "Rangaraj",
    role: "Head of Innovation",
    image: "chef3.jpg",
    description:
      "A creative culinary master bringing innovation to Indian cuisine.",
  },
];

export default AboutUs;
