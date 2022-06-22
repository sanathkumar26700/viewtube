import {addVideoToPlaylistData, deleteVideoFromPlaylistData} from '../../Utilities/JS/dataHandlers/playListDataHandlers.js'
import './playlist-modal.css'
import '../../Utilities/CSS/Utilities.css'

function Checkbox({playlist, video, token, userDataDispatch}) {
  
  const inPlaylist = playlist.videos.find((item) => item._id === video._id)

  const playlistDataHandler = () =>{
  inPlaylist ? 
    deleteVideoFromPlaylistData(playlist, video, token, userDataDispatch)
  : 
    addVideoToPlaylistData(playlist, video, token, userDataDispatch) 
}
  return (
    <>
        <ul className='list-bulletless'>
            <li>
                <input onClick={playlistDataHandler} id={playlist._id} type="checkbox" defaultChecked={inPlaylist?.id === video.id}/>
                <label htmlFor={playlist._id}>{playlist.playlistTitle}</label>
            </li>          
        </ul>      
    </>
  )
}

export default Checkbox