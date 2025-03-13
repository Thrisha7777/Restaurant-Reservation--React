import React from "react";
import { motion } from "framer-motion";
import "./Services.css"; // Import CSS

const LuxuryServices = () => {
  const services = [
    {
      title: "Exclusive Fine Dining",
      description:
        "Enjoy world-class gourmet meals prepared by Michelin-star chefs in an elegant setting.",
      icon: "🍷",
    },
    {
      title: "Private Dining & VIP Rooms",
      description:
        "Experience intimate and private dining in our luxury VIP rooms with personalized service.",
      icon: " 🍽️",
    },
    {
      title: "Sommelier Wine Pairing",
      description:
        "Indulge in the finest wines handpicked by expert sommeliers to complement your meal.",
      icon: "🍾",
    },
    {
      title: "Live Music & Entertainment",
      description:
        "Enjoy an enchanting dining experience with live jazz, piano performances, and cultural entertainment.",
      icon: " 🎻",
    },
    {
      title: "24/7 Concierge Reservations",
      description:
        "Our dedicated concierge team ensures seamless booking, anytime, anywhere.",
      icon: "🤵‍♂️",
    },
    {
      title: "Luxury Event Hosting",
      description:
        "Host grand events, weddings, and exclusive parties with top-tier catering and hospitality.",
      icon: " 🥂",
    },
  ];

  const customerFeedback = [
    {
      name: "Johnathan Doe",
      review:
        "Absolutely stunning experience! The ambiance, the food, and the service were top-notch.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Emily Williams",
      review:
        "The VIP dining experience was extraordinary. The staff made us feel like royalty!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Michael Smith",
      review:
        "The sommelier wine pairing was impeccable. Highly recommended for wine lovers.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Hazel Shiny",
      review:
        "Live music and candlelight dinner—this place is truly magical! Will visit again.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Kishan Das",
      review:
        "An absolutely incredible experience! From the moment we walked in, the ambiance was warm and inviting. The service was impeccable, and the food was nothing short of perfection. The chef’s tasting menu was a delightful journey of flavors. A must-visit for fine dining lovers!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Vijay Kumar",
      review:
        "The attention to detail in both service and presentation was outstanding. The live music complemented the sophisticated atmosphere perfectly. The sommelier’s wine pairing recommendations elevated our dining experience. Truly a five-star establishment!",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="luxury-services-container">
      {/* Title Animation */}
      <motion.h2
        className="luxury-services-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        🌟 Our Premium Services 🌟
      </motion.h2>
      <motion.p
        className="luxury-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Elevate your dining experience with our world-class luxury offerings.
      </motion.p>

      {/* Services Section */}
      <div className="luxury-services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="luxury-service-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Customer Feedback Section */}
      <motion.h2
        className="luxury-services-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        ✨ Customer Feedback ✨
      </motion.h2>
      <motion.p
        className="luxury-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        What our guests say about us
      </motion.p>

      <div className="feedback-grid">
        {customerFeedback.map((feedback, index) => (
          <motion.div
            key={index}
            className="feedback-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <p className="customer-rating">{feedback.rating}</p>
            <p className="customer-review">"{feedback.review}"</p>
            <p className="customer-name">- {feedback.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LuxuryServices;
