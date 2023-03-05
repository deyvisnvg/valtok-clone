import Marquee from "react-fast-marquee"
import "./SongTicker.css"

export default function SongTicker({ songTitle }) {
    return (
        <div className="musicIcon">
            <Marquee gradient={false} speed={70}>
                <a href="">{songTitle}</a>
            </Marquee>
        </div>
    )
}