import {useUserData} from '../../Context/userDataContext'
import PlaylistCard from '../../Components/Video Card/playlist-card'
import '../../Utilities/CSS/Utilities.css'

function Playlist() {

  const {userData:{ playlistData }} = useUserData()
  document.title='Playlists | viewtube'
console.log(playlistData)
  return (
    <section className="main__body">
    { playlistData.length?
    <>
      <nav className="nav__container">
        <h1 className="page--title">Playlists {playlistData.length ? `(${playlistData.length})` : ''}</h1>
      </nav>
      <section className="video-list--section main__body">
        {playlistData.map(playlist => <PlaylistCard key={playlist._id} playlist={playlist}/>)}
      </section>
    </>
    :
    <h1 className='empty-list--text'>You don't have any playlists 😕</h1>
    }      
    </section>
  )
}

export default Playlist