import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reservation.css"; // Import CSS file

const initialTables = [
  { id: 1, seats: 4, status: "Available" },
  { id: 2, seats: 2, status: "Available" },
  { id: 3, seats: 6, status: "Available" },
  { id: 4, seats: 4, status: "Available" },
  { id: 5, seats: 2, status: "Available" },
  { id: 6, seats: 4, status: "Available" },
  { id: 7, seats: 6, status: "Available" },
  { id: 8, seats: 2, status: "Available" },
  { id: 9, seats: 4, status: "Available" },
  { id: 10, seats: 4, status: "Available" },
];

const Reservation = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    partySize: "",
  });

  // State for error messages
  const [errors, setErrors] = useState({});

  // State for managing table status
  const [tableData, setTableData] = useState(initialTables);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";

    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time";
    if (!formData.partySize) newErrors.partySize = "Please select a party size";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Find an available table for the selected party size
      const selectedTable = tableData.find(
        (table) =>
          table.status === "Available" &&
          table.seats >= parseInt(formData.partySize)
      );

      if (selectedTable) {
        // Update table status to "Reserved"
        const updatedTables = tableData.map((table) =>
          table.id === selectedTable.id
            ? { ...table, status: "Reserved" }
            : table
        );
        setTableData(updatedTables); // ✅ Fixes the ReferenceError

        // Redirect to confirmation page with reservation details
        navigate("/confirmation", {
          state: { reservationData: formData, reservedTable: selectedTable },
        });
      } else {
        alert("No available table for the selected party size.");
      }
    }
  };

  return (
    <div className="reservation-container">
      <h2 className="reservation-title">Reservations</h2>

      {/* Stats Grid */}
      <div className="stats-container">
        <div className="stats-box">
          <span>10</span>
          <p>Total Tables</p>
        </div>
        <div className="stats-box">
          <span>{tableData.filter((t) => t.status === "Reserved").length}</span>
          <p>Reserved Tables</p>
        </div>
        <div className="stats-box">
          <span>
            {tableData.filter((t) => t.status === "Available").length}
          </span>
          <p>Available Tables</p>
        </div>
      </div>

      {/* Current Table Status */}
      <div className="table-status">
        <h3>Current Table Status</h3>
        <div className="table-grid">
          {tableData.map((table) => (
            <div
              key={table.id}
              className={`table-box ${
                table.status === "Reserved" ? "reserved" : ""
              }`}
            >
              <p>Table {table.id}</p>
              <p>{table.seats} Seats</p>
              <span className="status">{table.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reservation Form */}
      <div className="reservation-form">
        <h3>Make a Reservation</h3>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <span className="error">{errors.date}</span>}

          <label>Time</label>
          <select name="time" value={formData.time} onChange={handleChange}>
            <option value="">Select Time</option>
            <option>12:00 PM</option>
            <option>2:00 PM</option>
            <option>6:00 PM</option>
            <option>8:00 PM</option>
          </select>
          {errors.time && <span className="error">{errors.time}</span>}

          <label>Party Size</label>
          <select
            name="partySize"
            value={formData.partySize}
            onChange={handleChange}
          >
            <option value="">Select Party Size</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </select>
          {errors.partySize && (
            <span className="error">{errors.partySize}</span>
          )}

          <button type="submit">Reserve Now</button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
