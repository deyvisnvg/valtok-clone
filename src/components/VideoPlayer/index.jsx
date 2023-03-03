import ReactPlayer from "react-player"
import VideoPlayerActions from "./VideoPlayerActions"
import "./VideoPlayer.css"

export default function VideoPlayer({ src }) {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={src}
                width='100%'
                height='100%'
                config={{
                    youtube: {
                        playerVars: { controls: 1 }
                    }
                }}
                light
                playing
                loop
                volume={0.5}
            />
            <VideoPlayerActions />
        </div>
    )
}