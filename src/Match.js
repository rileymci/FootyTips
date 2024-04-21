import React, { useState, useEffect } from 'react';

const Match = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await fetch('http://localhost:4000/matches');
                if (!response.ok) {
                    throw new Error('Failed to fetch matches');
                }
                const data = await response.json();
                setMatches(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMatches();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2>Sporting Matches</h2>
            <ul>
                {matches.map(match => (
                    <li key={match._id}>
                        Home Team: {match.homeTeam.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Match;
