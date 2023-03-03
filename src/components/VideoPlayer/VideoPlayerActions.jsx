import { Heart } from "../Icons/Heart"
import { Comment } from "../Icons/Comment"
import { Share } from "../Icons/Share"
import "./VideoPlayer.css"

export default function VideoPlayerActions() {
    return (
        <aside className="actions">
            <div className="action">
                <Heart />
            </div>
            <div className="action">
                <Comment />
            </div>
            <div className="action">
                <Share />
            </div>
        </aside>
    )
}