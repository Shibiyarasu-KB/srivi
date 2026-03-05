import React from "react";
import ygeventData from "../Events.json";   // <-- correct path

function Events() {
    const events = ygeventData.ygevent || [];

    return (
        <div className="p-6">
            {events.map((event, index) => (
                <div key={index} className="shadow m-6 p-4 bg-gray-100 rounded-lg">
                    <h2 className="text-2xl font-bold">{event.Name}</h2>
                    <p className="font-semibold">{event.Date} | {event.Time}</p>
                    <p className="italic text-blue-600">{event.Location}</p>
                    <p className="mt-2 text-gray-700">{event.Description}</p>
                </div>
            ))}
        </div>
    );
}

export default Events;