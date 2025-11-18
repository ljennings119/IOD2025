import {useState, useRef } from 'react';

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false); //setting to not play
    const videoRef = useRef(null);

    function handleClick() {
        isPlaying ? videoRef.current.pause() : videoRef.current.play();
        setIsPlaying(!isPlaying);
        }

        return (
            <div className="VideoPlayer componentBox">
                <button onClick={handleClick}> {isPlaying ? 'Pause' : 'Play'} </button>
                <video ref={videoRef} width="250">
                    <source type="video/mp4" src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />              
                    </video>
            </div>
        );
}