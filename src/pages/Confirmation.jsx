import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Confirmation() {
    const location = useLocation();
    const navigate = useNavigate();

    const data = location.state;

    if (!data) {
        return (
            <h3 className="text-center mt-5 text-white">
                No booking data found
            </h3>
        );
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">

            <div className="card p-3 shadow-lg text-center" style={{ width: "380px", borderRadius: "12px" }}
            >

                {/* img */}
                <img src={data.event.image} alt="event" className="img-fluid rounded mb-3" style={{ height: "160px", objectFit: "cover" }} />

                {/* title */}
                <h5 className="fw-bold">{data.event.title}</h5>

                <span className="badge bg-secondary mb-2">
                    {data.event.category}
                </span>

                {/* success message */}
                <h6 className="text-success fw-bold mb-2">
                    Booking Confirmed
                </h6>

                <hr />

                {/* details */}
                <p className="mb-1"><b>Name:</b> {data.name}</p>
                <p className="mb-1"><b>Tickets:</b> {data.tickets}</p>
                <p className="mb-2"><b>Date:</b> {data.date}</p>

                {/* button */}
                <button className="btn btn-outline-secondary w-100 mb-2 fw-semibold" onClick={() => navigate("/")}>
                    Back to Home
                </button>

                <button className="btn btn-danger w-100 fw-semibold" style={{ borderRadius: "8px" }} onClick={() => {
                        alert("Booking cancelled");
                        navigate("/");
                    }}>Cancel Booking</button>

            </div>
        </div>
    );
}

export default Confirmation;