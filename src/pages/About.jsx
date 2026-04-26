import React from "react"
import { useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

function About() {

    const navigate = useNavigate()

    return (
        <div className="container mt-4 px-2" style={{ overflow: "hidden" }}>

            <button
                className="btn btn-outline-light mb-3"
                onClick={() => navigate("/")}
                style={{ borderRadius: "20px", padding: "6px 14px", border: "1px solid rgba(0,255,255,0.5)", color: "white", backdropFilter: "blur(5px)" }} >
                <FaArrowLeft className="me-2" /> Back </button>

            <div className="row justify-content-center">

                <div className="col-12 col-sm-10 col-md-9 col-lg-7">

                    <div
                        className="card text-white shadow-lg mt-2"
                        style={{ borderRadius: "14px", border: "1px solid rgba(0,226,226,0.88)", padding: "20px", background: "rgba(0,0,0,0.4)" }}
                    >

                        <h4 className="text-center mb-2" style={{ letterSpacing: "1px" }}>
                            About Event HQ
                        </h4>

                        <hr style={{ borderColor: "rgba(0,255,255,0.5)", margin: "8px 0" }} />

                        <p style={{ fontSize: "15px", lineHeight: "22px", marginTop: "10px", textAlign: "justify", color: "white" }}>
                            Event HQ is a modern event booking platform designed to simplify the process of discovering
                            and managing events. The application allows users to explore a wide range of events across
                            different categories and locations, providing detailed information such as pricing, venue,
                            and schedule. With a user-friendly interface, the platform ensures that users can quickly
                            browse events and complete bookings in just a few steps. All bookings are stored and can be
                            accessed later through the “My Bookings” section, making it easy for users to keep track of
                            their plans. This project is built using React for the frontend, while json-server is used as
                            a mock backend to simulate real-time data operations such as adding events, booking tickets,
                            and managing user interactions. The main objective of Event HQ is to demonstrate how a
                            real-world event management system works by implementing core functionalities like CRUD
                            operations, routing, and dynamic data handling, while maintaining a clean and responsive
                            user interface.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default About