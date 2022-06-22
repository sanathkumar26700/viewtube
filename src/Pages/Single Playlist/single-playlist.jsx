import { useUserData } from '../../Context/userDataContext'
import { useParams } from 'react-router-dom'
import DynamicVideoCard from '../../Components/Video Card/dynamic-videoCard'
import '../../Utilities/CSS/Utilities.css'

function SinglePlaylist() {

  const {userData:{ playlistData }} = useUserData()
  const { playlistId } = useParams()
  const playlist = playlistData.find(playlist => playlist._id === playlistId)
  const videos = playlist.videos
  document.title=`${playlist.playlistTitle} | viewtube`

  return (
    <section className="main__body">
    {videos.length?
    <>
      <nav className="nav__container">
        <h1 className="page--title">{videos.length ? `${playlist.playlistTitle} (${videos.length})` : ''}</h1>
      </nav>
      <section className="video-list--section main__body">
        {videos.map(video => <DynamicVideoCard video={video} playlist={playlist}/>)}
      </section>
    </>
    :
    <h1 className='empty-list--text'>You haven't added any videos in {playlist.playlistTitle} 😕</h1>
    }      
    </section>
  )
}

export default SinglePlaylist