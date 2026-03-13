import ygeventData from "../Events.json"; // <-- correct path

function Events() {
    const events = ygeventData.ygevent || [];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto py-8">
            {events.map((event, index) => (
                <div key={index} className="shadow-xl m-6 p-4 bg-gray-200 rounded-lg">
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