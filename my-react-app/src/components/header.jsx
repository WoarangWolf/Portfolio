import { useRef, useState } from 'react';
import './header.css';

function Header() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toogleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    return(
        <header className="header">
            <h1>Welcome to My Portfolio</h1>
            <div className="audio-bubble" onClick={toogleAudio}>
                <audio ref={audioRef} source src="/audio/Moonlit Mirage.mp3" loop/>
                <span className={isPlaying ? 'playing' : 'paused'}>
                    <img src="/images/player.png" alt="player icon" className="audio-icon"/>
                </span>
            </div>
        </header>
    )
}

export default Header