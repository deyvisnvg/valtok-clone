import ReactPlayer from "react-player"
import VideoPlayerActions from "./VideoPlayerActions"
import VideoDescription from "../VideoDescription"
import "./VideoPlayer.css"

export default function VideoPlayer(props) {
    const { src, likes, shares, comments, autor, description, albumCover, songTitle } = props
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
            <VideoPlayerActions
                likes={likes}
                shares={shares}
                comments={comments}
            />
            <VideoDescription
                autor={autor}
                description={description}
                albumCover={albumCover}
                songTitle={songTitle}
            />
        </div>
    )
}