import { useState } from 'react'
import { v4 as uuid } from "uuid"
import Checkbox from './checkbox'
import {useAuth} from '../../Context/authContext'
import {useUserData} from '../../Context/userDataContext'
import {addPlaylistToData} from '../../Utilities/JS/dataHandlers/playListDataHandlers.js'
import './playlist-modal.css'

function PlayListModal({showModal , setShowModal, setViewModal, viewModal, video}) {

  const {auth:{token}} = useAuth()
  const {userData:{playlistData}, userDataDispatch} = useUserData()
  const [showInputBox, setShowInputBox] = useState(false)
  const [playlist, setPlaylist] = useState({id : '', playlistTitle : ''})

  const modalCloseHandler = () => {
    if(showModal){
      setShowModal(false)
    }else{
      setViewModal(false)
    }
  }

  const createPlaylistHandler = () =>{
    if(playlist.playlistTitle){
      addPlaylistToData(playlist, token, userDataDispatch)
      setPlaylist({_id : '', playlistTitle : ''})
      setShowInputBox(prev => !prev)
    }
  }
  return (
    <>
    {(showModal || viewModal) && 
    <section className="playlist--section">
      <article className="playlist--modal">
        <div className="playlist--modal__title-container">
          <span className="playlist-modal__title">Playlists</span>
          <span className="playlist-modal__close--btn"
                onClick={modalCloseHandler}>
            <i className="far fa-times-circle"></i>
          </span>
        </div>
        {playlistData.length ?
          <div className="playlist--modal__checkbox-container">
            {playlistData.map(playlist =>{ 
                    return (<Checkbox   
                                playlist={playlist} 
                                video={video} 
                                key={playlist._id}
                                token={token}
                                userDataDispatch={userDataDispatch}
                            />)
                          })
            }
          </div>
          : null}
        {showInputBox &&
        <div className="playlist--modal__input-container">
          <input  
              placeholder="Enter New Playlist"
              onChange ={(e) => setPlaylist({_id : uuid(), playlistTitle : e.target.value})}
              value={playlist.playlistTitle}
          />
        </div>}
        {!showInputBox ?
          <button 
              className="btn btn__primary btn__primary--animated"
              onClick={() => setShowInputBox(prev => !prev)}
          >
            <i className="fas fa-folder-plus"></i>
            Create new playlist
          </button>
        :
          <button className="btn btn__primary btn__primary--animated"
                  onClick={createPlaylistHandler}
          >
            <i className="fas fa-folder-plus"></i>
            Create
          </button>
        }
      </article>
    </section>}
    </>
  )
}

export default PlayListModal