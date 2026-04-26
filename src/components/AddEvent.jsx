import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddEvent() {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [location, setLocation] = useState("")
    const [price, setPrice] = useState("")
    const [organizer, setOrganizer] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit = async () => {

        if (title == "" || category == "" || location == "") {
            alert("fill all fields")
            return
        }


        let newEvent = {
            title: title,
            category: category,
            location: location,
            price: price,
            organizer: organizer,
            date: date,
            image: image

        }

        await fetch("https://eventhq-s55w.onrender.com/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent)
        })

        alert("event added")
        navigate("/")
        
    }

    return (
        <div className="container mt-4">

            <div className="card p-3" style={{ width: "340px", margin: "auto" }}>

                <h5>Add Event</h5>

                <input type="text" className="form-control mb-2" placeholder="title" onChange={(e) => setTitle(e.target.value)} />

                <select className="form-select mb-2" onChange={(e) => setCategory(e.target.value)}>
                    <option value="">select category</option>
                    <option>Concert</option>
                    <option>Comedy</option>
                    <option>Technical</option>
                    <option>Workshop</option>
                    <option>Food Fest</option>
                </select>

                <input type="text" className="form-control mb-2" placeholder="location" onChange={(e) => setLocation(e.target.value)} />

                <input type="number" className="form-control mb-2" placeholder="price" onChange={(e) => setPrice(e.target.value)} />

                <input type="text" className="form-control mb-2" placeholder="image url" onChange={(e) => setImage(e.target.value)} />
                <select className="form-select mb-3" onChange={(e) => setOrganizer(e.target.value)}>
                    <option value="">select organizer</option>
                    <option>BookMyShow</option>
                    <option>Paytm Insider</option>
                    <option>Insider.in</option>
                    <option>District</option>
                    <option>Zomato Live</option>
                    <option>Skillbox</option>
                </select>

                <input type="date" className="form-control mb-2" onChange={(e) => setDate(e.target.value)} />
                <button className="btn btn-primary btn-sm mb-2" onClick={handleSubmit}>Add</button>

                <button className="btn btn-secondary btn-sm" onClick={() => navigate("/")}>Cancel </button>

            </div>

        </div>
    )
}

export default AddEvent