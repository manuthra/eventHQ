import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function Booking() {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState("");

    const event = location.state || JSON.parse(localStorage.getItem("event")); // receive event data

    // If user directly opens booking page
    if (!event) {
        return (
            <h3 className="text-center mt-5 text-white">
                No event selected
            </h3>
        );
    }

    const handleBooking = async () => {

        const tickets = document.getElementById("tickets").value;

        if (!name || !tickets) {
            alert("Please fill all fields");
            return;
        }
        if (tickets < 1 || tickets > 4) {
            alert("Maximum 4 tickets allowed");
            return;
        }


        const data = {
            name,
            event: event,
            tickets,
            date: new Date().toLocaleString(),
        };
        await fetch("http://localhost:3001/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        // then navigate
        navigate("/confirmation", { state: data });

    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
            <div className="card p-4 shadow-lg mt-5" style={{ width: "400px", borderRadius: "12px" }}>
                {/* event img */}
                <img src={event.image} alt="event" className="img-fluid rounded mb-3" style={{ height: "150px", objectFit: "cover" }} />

                {/* event details */}
                <h5 className="text-center fw-bold">{event.title}</h5>
                <p className="text-center text-secondary">{event.category}</p>

                <h6 className="text-center text-danger mb-2">
                    ₹{event.price}
                </h6>

                <h6 className="text-center text-muted mb-3">
                    You are booking: {event.title}
                </h6>

                <hr />

                {/* Input fields*/}
                <input type="text" className="form-control mb-2" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />

                <div className="row">
                    <div className="col-6">
                        <input type="email" className="form-control mb-2" placeholder="Email" />
                    </div>

                    <div className="col-6">
                        <input type="number" className="form-control mb-2" placeholder="Tickets" id="tickets" min="1" max="4" required />
                    </div>
                </div>

                {/*  button */}
                <button className="btn btn-primary w-100 fw-bold" onClick={handleBooking}>
                    Confirm Booking
                </button>
            </div>
        </div>
    );
}

export default Booking;