import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";

function CustomActivityFinder() { 
    // Fetches a random activity
    const [participants, setParticipants] = useState(1);
    // uses custom hook to handle the effect for loading external data
    const data = useData('https://www.boredapi.com/api/activity?' + 'participants=' + participants);
    // get the activity from the json or show error message if failed
    const activity = data ? data.activity : 'not found';
    
    
    return (
        <div className="CustomActivityFinder componentBox">
            <h3>Activity Finder</h3>
            <label>Choose number of participants:
                <select value={participants}
                    onChange={e => setParticipants(e.target.value)}>
                    <option>1</option><option>2</option><option>3</option>
                </select>
            </label>
            <div><strong>Suggested Activity:
            </strong>{activity}</div>
        </div>
    )
} // ++ Add a second use of useData to fetch activities based on type

export default CustomActivityFinder