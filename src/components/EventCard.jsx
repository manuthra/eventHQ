import React from 'react'
import { useNavigate } from "react-router-dom"
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

function EventCard({ event, onDelete }) {

    const navigate = useNavigate();

    return (
        <div className='card bg-dark text-white p-2 shadow-lg h-100' style={{ cursor: 'pointer', borderRadius: "10px", border: "1px solid aqua" }}>

            <img src={event.image} alt="eventimg" className='img-fluid rounded mb-2' style={{ height: "180px", objectFit: "cover" }} />

            <div className='mt-2 px-2'>
                <h5 className='fw-bold'>{event.title}</h5>

                <span className='badge bg-secondary'>{event.category}</span>

                <div className="mt-2 small text-light">

                    <p className="mb-1 d-flex align-items-center gap-2">
                        <FaMapMarkerAlt /> {event.location}
                    </p>

                    <p className="mb-2 d-flex align-items-center gap-2">
                        <FaClock /> {new Date(event.date).toDateString()}
                    </p>

                </div>

                <hr style={{ borderColor: "aqua" }} />

                <div className='mt-2'>
                    <div className='d-flex justify-content-between mt-2 align-items-center'>

                        <h5 className='mb-0 text-warning fw-bold'>₹{event.price}</h5>

                        <div className='d-flex'>

                            <button className='btn btn-primary btn-sm me-2' onClick={() => navigate("/booking", { state: event })}>
                                Book Now
                            </button>

                            <button className="btn btn-danger btn-sm" onClick={() => onDelete(event.id)}>
                                Delete
                            </button>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default EventCard