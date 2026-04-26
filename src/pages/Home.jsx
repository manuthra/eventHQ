import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import EventCard from '../components/EventCard'
import { getEventsAPI } from "../services/eventAPI";
import { useNavigate } from "react-router-dom";
import { deleteEventAPI } from "../services/eventAPI";
import Footer from '../components/Footer';



function Home() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [city, setCity] = useState("");


    useEffect(() => {
        const user = localStorage.getItem("user");

        if (!user) {
            window.location.href = "/login";
        } else {
            getEvents();
        }
    }, []);

    const getEvents = async () => {
        try {
            const result = await getEventsAPI()
            setEvents(result.data);
        } catch (error) {
            console.log(err);

        }
    }


    const handleDelete = async (id) => {
        await deleteEventAPI(id)
        getEvents()
    }


    return (
        <>
            <Navbar />
            <div className='container-fluid mt-4'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-inner">

                        {/* Slide 1 */}
                        <div className="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1558008258-3256797b43f3"
                                className="d-block w-100 carousel-img"
                                alt="event"/>
                        </div>

                        {/* Slide 2 */}
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg"
                                className="d-block w-100 carousel-img"
                                alt="event" />
                        </div>

                        {/* Slide 3 */}
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/9443903/pexels-photo-9443903.jpeg"
                                className="d-block w-100 carousel-img"
                                alt="event"/>
                        </div>

                        {/* Slide 4 */}
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/1840320/pexels-photo-1840320.jpeg"
                                className="d-block w-100 carousel-img"
                                alt="event"/>
                        </div>

                        {/* Slide 5 */}
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/16039776/pexels-photo-16039776.jpeg"
                                className="d-block w-100 carousel-img"
                                alt="event"/>
                        </div>

                    </div>

                    {/* Controls */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>

                </div>
                <br />
                <br />

                <div className="mb-5 text-white">

                    {/* top quote section */}
                    <div className="d-flex gap-3 align-items-center mb-4">

                        {/* gradient line */}
                        <div className="quote-line"></div>

                        {/* text */}
                        <h4 className="fw-bold mb-0" style={{ lineHeight: "1.5" }}>
                            Find Events You’ll Love,<br />
                            Happening Around You.
                        </h4>
                    </div>

                    {/* chips */}
                    <div className="d-flex flex-wrap gap-2">

                        <span className="chip">Kochi</span>
                        <span className="chip">Delhi</span>
                        <span className="chip">Mumbai</span>
                        <span className="chip">Chennai</span>
                        <span className="chip">Bangalore</span>
                        <span className="chip">Hyderabad</span>

                    </div>
                </div>

                <div className="mb-4">

                    {/* heading and button */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="text-white mb-0">All Events</h5>
                        <button onClick={() => navigate("/add")} className="btn btn-primary btn-sm">
                            + Add Event</button>
                    </div>

                    {/* search input */}
                    <input type="text" className="form-control mb-2" placeholder="Search events..."
                        value={search} onChange={(e) => setSearch(e.target.value)}
                    />

                    {/* category dropdown */}
                    <select className="form-select mb-2" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value=''>All Categories</option>
                        <option value='Music'>Music</option>
                        <option value='Tech'>Tech</option>
                        <option value='Comedy'>Comedy</option>
                        <option value='Food Fest'>Food Fest</option>
                    </select>

                    {/* city dropdown */}
                    <select className="form-select mb-2" value={city} onChange={(e) => setCity(e.target.value)}>
                        <option value=''>All Cities</option>
                        <option value='Kochi'>Kochi</option>
                        <option value='Chennai'>Chennai</option>
                        <option value='Banglore'>Bangalore</option>
                        <option value='Hyderabad'>Hyderabad</option>
                    </select>

                    {/* clear button */}
                    <button className="btn btn-outline-secondary w-100" onClick={() => { setSearch(""); setCategory(""); setCity(""); }}>Clear</button>

                </div>
                <div className="row">
                    {
                        events.filter((item) => {
                            const matchSearch =
                                item.title?.toLowerCase().includes(search.toLowerCase());

                            const matchCategory =
                                category === "" || item.category === category;

                            const matchCity =
                                city === "" ||
                                item.location?.toLowerCase().includes(city.toLowerCase());

                            return matchSearch && matchCategory && matchCity;
                        }).length > 0 ? (

                            events
                                .filter((item) => {
                                    const matchSearch =
                                        item.title?.toLowerCase().includes(search.toLowerCase());

                                    const matchCategory =
                                        category === "" || item.category === category;

                                    const matchCity =
                                        city === "" ||
                                        item.location?.toLowerCase().includes(city.toLowerCase());

                                    return matchSearch && matchCategory && matchCity;
                                })
                                .map((item) => (
                                    <div
                                        key={item.id} className="col-12 col-md-4 col-sm-6 mb-5 px-4">
                                        <EventCard event={item} onDelete={handleDelete} />
                                    </div>
                                ))

                        ) : (

                            <div className="text-center text-light mt-4">
                                No Events Found
                            </div>

                        )
                    }
                </div>
            </div>
        </>
    );

}
export default Home;
