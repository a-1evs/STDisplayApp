import React from 'react';
import EventCard from "@/components/event-card";
import eventData from "../json/events.json";
import Header from "@/components/header"; // Importing the Header component

export default function EventDisplay() {
    const currentDayOfWeek = new Date().getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const currentDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][currentDayOfWeek];
    const eventsForCurrentDay = eventData[currentDay] || [];

    // Dummy data for weather, date, and current week of camp
    const weather = "Sunny";
    const date = new Date().toLocaleDateString();
    const currentWeek = "Week A"; // You can modify this logic based on your camp's schedule

    return (
        <div>
            <Header weather={weather} date={date} currentWeek={currentWeek} />
            {eventsForCurrentDay.map((event, index) => (
                <EventCard key={index} title={event.Name} staffNames={event.Staff.join(", ")} />
            ))}
        </div>
    );
}
