import { VideoPlayer } from "../"
import "./FeedVideos.css"

const VIDEOS = [
    {
        id: 1,
        autor: 'Anonimo',
        description: 'Arriba Peru!',
        likes: 123,
        shares: 234,
        comments: 333,
        src: 'https://youtu.be/T4Rc_SPbxZQ?t=1'
    },
    {
        id: 2,
        autor: 'Anonimo2',
        description: 'Arriba Peru!',
        likes: 123,
        shares: 234,
        comments: 333,
        src: 'https://youtu.be/zFc_QaFxNgk?t=5'
    },
    {
        id: 3,
        autor: 'Anonimo3',
        description: 'Arriba Peru!',
        likes: 123,
        shares: 234,
        comments: 333,
        src: 'https://youtu.be/StjFTXa7wg8?t=5'
    },
    {
        id: 4,
        autor: 'Anonimo4',
        description: 'Arriba Peru!',
        likes: 123,
        shares: 234,
        comments: 333,
        src: 'https://youtu.be/uCCEZuIzpQo?t=4'
    }
]

export default function FeedVideos() {
    return (
        VIDEOS.map(video => {
            return (
                <div key={video.id} className="item">
                    <VideoPlayer {...video} />
                </div>
            )
        })
    )
}