import {useState} from "react"  // useState is a React hook

function MoodChanger() {
    // two variables :
// mood stores current mood, default happy
// setMood is a function for updating mood
    const [mood, setMood] = useState('happy')

    const handleWinLotto = () => {
        setMood('estatic')
    }

    const handleRunningLate = () => {
        let newMood = 'stressed'
        if (mood === 'stressed') newMood = 'really stressed'
        else if (mood === 'really stressed') newMood = 'giving up'

            setMood(newMood)
    }

    return (
        <div className="MoodChanger componentBox">
            Current Mood: {mood}
            <br></br>
            <br></br>
            <button onClick={() => setMood('tired')}>
                Stay Up Late
            </button>
            
            <button onClick={() => setMood('hungry')}>
                Skip Lunch
            </button>

            <button onClick={() => setMood('Full')}>
                Ate Lunch
            </button>

            <button onClick={handleRunningLate}>Running Late</button>
            

            </div>

    )
}

export default MoodChanger;