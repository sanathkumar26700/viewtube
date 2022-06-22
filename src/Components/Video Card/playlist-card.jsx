import { useNavigate } from "react-router-dom";
import {useAuth} from '../../Context/authContext'
import {useUserData} from '../../Context/userDataContext'
import {deletePlaylistFromData} from '../../Utilities/JS/dataHandlers/playListDataHandlers.js'
import './video-card.css'

const PlaylistCard = ({ playlist }) => {

    const {playlistTitle, videos, _id } = playlist
    const {auth:{token}} = useAuth()
    const {userDataDispatch} = useUserData()
    const navigate = useNavigate();

    return (    		
        <div className="card dynamic vertical">
            <div onClick={() => navigate(`/playlist/${_id}`)}>
                <div className="card__product--img">
                    <img 
                        className="img" 
                        src={videos[0] ? videos[0].thumbnailUrl : '/image assets/novideos--playlistcover.png'} 
                        alt={`${playlistTitle} thumbnail`}/>
                    {videos[0] && <span className="playlist-count--text badge--grey">{videos.length}</span>}
                </div>
            </div>   
            <div className="card__product--content">
                <h2 className="card__product--title">{playlistTitle}</h2>
                    <span onClick={()=>deletePlaylistFromData(playlist, token, userDataDispatch)}>
                        <i className="fas fa-trash"></i>
                    </span>
            </div>           												
        </div>
    )
}

export default PlaylistCard;