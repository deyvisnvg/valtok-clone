import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css"

const SRC = 'https://youtu.be/T4Rc_SPbxZQ?t=1'

export default function VideoPlayer() {

    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={SRC}
                width='100%'
                height='100%'
                config={{
                    youtube: {
                        playerVars: { controls: 0 }
                    }
                }}
                light
                playing
            />
        </div>

    )
}