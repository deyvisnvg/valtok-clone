import AlbumDisk from "../Icons/AlbumDisk";
import SongTicker from "../SongTicker";
import "./VideoDescription.css"

export default function VideoDescription({ autor, description, albumCover, songTitle }) {
    return (
        <footer className="description">
            <div className="text-description">
                <strong>
                    <a href="#" className="author">
                        @{autor}
                    </a>
                </strong>
                <p>{description}</p>
                <SongTicker
                    songTitle={songTitle}
                />
            </div>
            <div className="album">
                <AlbumDisk />
                <img src={albumCover} alt="albumCover" />
            </div>
        </footer >
    )
}