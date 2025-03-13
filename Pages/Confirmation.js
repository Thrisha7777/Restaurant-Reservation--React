import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Confirmation.css"; // Import CSS

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reservationData = location.state?.reservationData || {};

  // Generate a random reservation ID
  const reservationId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="confirmation-container">
      <div className="overlay">
        <div className="confirmation-card">
          <img src="/accept.png" alt="Success" className="checkmark-icon" />
          <h2>THANK YOU</h2>
          <p>
            Your reservation has been confirmed. We’re excited to welcome you to
            an unforgettable dining experience.
          </p>

          <div className="reservation-details">
            <p>
              <strong>Name:</strong> {reservationData.name || "Guest"}
            </p>
            <p>
              <strong>Date:</strong> {reservationData.date}
            </p>
            <p>
              <strong>Time:</strong> {reservationData.time}
            </p>
            <p>
              <strong>Guests:</strong> {reservationData.partySize}
            </p>
            <p>
              <strong>Reservation ID:</strong> {reservationId}
            </p>
          </div>

          <p className="confirmation-text">
            A confirmation email has been sent to your inbox with these details.
          </p>

          <button className="home-button" onClick={() => navigate("/")}>
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
