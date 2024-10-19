import React from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';

const TimeAgo = ({ dateString }) => {
    // Ensure that the dateString is defined and a valid string
    if (!dateString) {
        return <span>Invalid date</span>;
    }

    let date;
    try {
        // Attempt to parse the date string
        date = parseISO(dateString);
    } catch (error) {
        console.error("Invalid date format:", error);
        return <span>Invalid date format</span>;
    }

    // Check if the parsed date is valid
    if (isNaN(date)) {
        return <span>Invalid date</span>;
    }

    // Format the time ago
    const timeAgo = formatDistanceToNow(date, { addSuffix: true });

    return <span>{timeAgo}</span>;
};

export default TimeAgo;
