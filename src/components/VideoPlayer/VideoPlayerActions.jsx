import { Heart } from "../Icons/Heart"
import { Comment } from "../Icons/Comment"
import { Share } from "../Icons/Share"
import "./VideoPlayer.css"

export default function VideoPlayerActions({ likes, shares, comments }) {
    const handleLike = () => {
        alert('like')
    }

    const handleComment = () => {
        alert('comment')
    }

    const handleShare = () => {
        alert('share')
    }

    return (
        <aside className="actions">
            <button className="action" onClick={handleLike}>
                <Heart />
                <span title="likes">{likes}</span>
            </button>
            <button className="action" onClick={handleComment}>
                <Comment />
                <span title="comemnts">{comments}</span>
            </button>
            <button className="action" onClick={handleShare}>
                <Share />
                <span title="shares">{shares}</span>
            </button>
        </aside>
    )
}