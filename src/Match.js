// Match.js

import React, { useState, useEffect } from 'react';

const Match = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await fetch('http://localhost:4000/matches');
                if (response.ok) {
                    const data = await response.json();
                    setMatches(data);
                } else {
                    console.error('Failed to fetch matches');
                }
            } catch (error) {
                console.error('Error fetching matches:', error);
            }
        };

        fetchMatches();
    }, []);

    return (
        <div>
            <h2>Sporting Matches</h2>
            <ul>
                
            </ul>
        </div>
    );
};

export default Match;
