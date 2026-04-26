import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";


function Footer() {
    return (
        <div className="bg-dark text-white mt-5 pt-4 pb-3" style={{ borderTop: "1px solid aqua" }}>

            <div className="container">

                <div className="row">

                    {/* About */}
                    <div className="col-12 col-md-4 mb-3">
                        <h5 className="fw-bold">Event HQ</h5>
                        <p className="text-secondary small">
                            Discover and book amazing events happening around you.
                            From music shows to tech meetups, we bring everything together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-6 col-md-2 mb-3">
                        <h6 className="fw-bold">Links</h6>
                        <ul className="list-unstyled small">
                            <li><a href="/" className="text-secondary text-decoration-none">Home</a></li>
                            <li><a href="/bookings" className="text-secondary text-decoration-none">Bookings</a></li>
                            <li><a href="/about" className="text-secondary text-decoration-none">About</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="col-6 col-md-3 mb-3">
                        <h6 className="fw-bold">Categories</h6>
                        <ul className="list-unstyled small">
                            <li className="text-secondary">Music</li>
                            <li className="text-secondary">Tech</li>
                            <li className="text-secondary">Comedy</li>
                            <li className="text-secondary">Food Fest</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-12 col-md-3 mb-3">
                        <h6 className="fw-bold">Contact</h6>

                        <p className="text-secondary small mb-1 d-flex align-items-center gap-2">
                            <FaMapMarkerAlt /> India
                        </p>

                        <p className="text-secondary small mb-1 d-flex align-items-center gap-2">
                            <FaEnvelope /> support@eventhq.com
                        </p>

                        <p className="text-secondary small d-flex align-items-center gap-2">
                            <FaPhoneAlt /> +91 98765 43210
                        </p>

                        {/* Social icons */}
                        <div className="d-flex gap-3 mt-2">
                            <FaInstagram style={{ cursor: "pointer" }} />
                            <FaFacebook style={{ cursor: "pointer" }} />
                            <FaTwitter style={{ cursor: "pointer" }} />
                        </div>

                    </div>

                </div>

                <hr style={{ borderColor: "aqua" }} />

                <div className="text-center small text-secondary">
                    &copy 2026 Event HQ. All rights reserved.
                </div>

            </div>

        </div>
    );
}

export default Footer;