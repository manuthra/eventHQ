import React, { useEffect, useState } from "react"
import { FaMapMarkerAlt, FaClock, FaTicketAlt } from "react-icons/fa"
import { getBookingsAPI, deleteBookingAPI } from "../services/eventAPI";

function Bookings() {

    const [bookings, setBookings] = useState([])

    const getBookings = async () => {
        const response = await getBookingsAPI()
        setBookings(response.data)
    }

    useEffect(() => {
        getBookings()
    }, [])

    return (
        <div className="container mt-4">

            <h4 className="text-white mb-3">My Bookings</h4>

            <div className="row">

                {bookings.length > 0 ? (

                    bookings.map((item) => (
                        <div key={item.id} className="col-md-4 mb-3">

                            <div className="card bg-dark text-white p-2" style={{ border: "1px solid aqua" }}>

                                <img src={item.event.image} alt="event" className="img-fluid rounded mb-2"
                                    style={{ height: "170px", objectFit: "cover" }} />

                                <div className="px-2">

                                    <h6>{item.event.title}</h6>

                                    <span className="badge bg-secondary mb-2"> {item.event.category}</span>

                                    <p className="small mb-1">
                                        <FaMapMarkerAlt /> {item.event.location}
                                    </p>

                                    <p className="small mb-1">
                                        <FaClock /> {new Date(item.event.date).toDateString()}
                                    </p>

                                    <p className="small">
                                        <FaTicketAlt /> {item.tickets} tickets
                                    </p>

                                    <hr />

                                    <div className="d-flex justify-content-between align-items-center">

                                        <span className="text-warning"> ₹{item.event.price}</span>

                                        <button className="btn btn-danger btn-sm" onClick={
                                            async () => {
                                                await deleteBookingAPI(item.id)
                                                getBookings()
                                            }}>Cancel</button>

                                    </div>

                                </div>

                            </div>

                        </div>
                    ))

                ) : (

                    <p className="text-secondary">No bookings</p>

                )}

            </div>

        </div>
    )
}

export default Bookings