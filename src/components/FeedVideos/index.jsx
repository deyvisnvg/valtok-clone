import { VideoPlayer } from "../"
import "./FeedVideos.css"

const VIDEOS = [
    {
        id: 1,
        autor: 'Anonimo',
        description: 'Arriba Peru!',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8c5fbd6873a58940bc5c349287d0eadd~c5_100x100.jpeg?x-expires=1678122000&x-signature=MpDGs4lfs8UmvNaNZrpFoEV5VwQ%3D',
        songTitle: "Vídeo en reproducción, sígueme para mas vídeos chavales...",
        likes: 1123,
        shares: 134,
        comments: 133,
        src: 'https://youtu.be/T4Rc_SPbxZQ?t=1'
    },
    {
        id: 2,
        autor: 'Anonimo2',
        description: '#canciones #anuel #labichota #famosos #dedicatoria #respuesta #viral  muy buena respuesta y muy acertada!🫡',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8c5fbd6873a58940bc5c349287d0eadd~c5_100x100.jpeg?x-expires=1678122000&x-signature=MpDGs4lfs8UmvNaNZrpFoEV5VwQ%3D',
        songTitle: "Vídeo en reproducción, sígueme para mas vídeos chavales...",
        likes: 2123,
        shares: 234,
        comments: 239,
        src: 'https://youtu.be/Hb3i6XLtvy8?t=5'
    },
    {
        id: 3,
        autor: 'Anonimo3',
        description: '#canciones #anuel #labichota #famosos #dedicatoria #respuesta #viral  muy buena respuesta y muy acertada!🫡',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8c5fbd6873a58940bc5c349287d0eadd~c5_100x100.jpeg?x-expires=1678122000&x-signature=MpDGs4lfs8UmvNaNZrpFoEV5VwQ%3D',
        songTitle: "Vídeo en reproducción, sígueme para mas vídeos chavales...",
        likes: 3123,
        shares: 334,
        comments: 338,
        src: 'https://youtu.be/StjFTXa7wg8?t=5'
    },
    {
        id: 4,
        autor: 'Anonimo4',
        description: '#canciones #anuel #labichota #famosos #dedicatoria #respuesta #viral  muy buena respuesta y muy acertada!🫡',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8c5fbd6873a58940bc5c349287d0eadd~c5_100x100.jpeg?x-expires=1678122000&x-signature=MpDGs4lfs8UmvNaNZrpFoEV5VwQ%3D',
        songTitle: "Vídeo en reproducción, sígueme para mas vídeos chavales...",
        likes: 4123,
        shares: 434,
        comments: 437,
        src: 'https://youtu.be/uCCEZuIzpQo?t=4'
    },
    {
        id: 5,
        autor: 'Anonimo5',
        description: 'Arriba Peru!',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8c5fbd6873a58940bc5c349287d0eadd~c5_100x100.jpeg?x-expires=1678122000&x-signature=MpDGs4lfs8UmvNaNZrpFoEV5VwQ%3D',
        songTitle: "Vídeo en reproducción, sígueme para mas vídeos chavales...",
        likes: 5123,
        shares: 534,
        comments: 536,
        src: 'https://youtu.be/o2m1XJ5T99E?t=4'
    },
    {
        id: 6,
        autor: 'Anonimo6',
        description: 'Arriba Peru!',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8c5fbd6873a58940bc5c349287d0eadd~c5_100x100.jpeg?x-expires=1678122000&x-signature=MpDGs4lfs8UmvNaNZrpFoEV5VwQ%3D',
        songTitle: "Vídeo en reproducción, sígueme para mas vídeos chavales...",
        likes: 5123,
        shares: 534,
        comments: 536,
        src: 'https://youtu.be/2wUZk3Mqn6U?t=17'
    },
    {
        id: 7,
        autor: 'Anonimo7',
        description: 'Arriba Peru!',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8c5fbd6873a58940bc5c349287d0eadd~c5_100x100.jpeg?x-expires=1678122000&x-signature=MpDGs4lfs8UmvNaNZrpFoEV5VwQ%3D',
        songTitle: "Vídeo en reproducción, sígueme para mas vídeos chavales...",
        likes: 7123,
        shares: 734,
        comments: 736,
        src: 'https://youtu.be/dAjQziWh9wU?t=22'
    },
    {
        id: 8,
        autor: 'Anonimo8',
        description: 'Arriba Peru!',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8c5fbd6873a58940bc5c349287d0eadd~c5_100x100.jpeg?x-expires=1678122000&x-signature=MpDGs4lfs8UmvNaNZrpFoEV5VwQ%3D',
        songTitle: "Vídeo en reproducción, sígueme para mas vídeos chavales...",
        likes: 8123,
        shares: 834,
        comments: 836,
        src: 'https://youtu.be/NCAo9YU3pA4?t=5'
    },
    {
        id: 9,
        autor: 'Anonimo9',
        description: 'Arriba Peru!',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8c5fbd6873a58940bc5c349287d0eadd~c5_100x100.jpeg?x-expires=1678122000&x-signature=MpDGs4lfs8UmvNaNZrpFoEV5VwQ%3D',
        songTitle: "Vídeo en reproducción, sígueme para mas vídeos chavales...",
        likes: 9123,
        shares: 934,
        comments: 936,
        src: 'https://youtu.be/WVvEpmrJlLI?t=31'
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