import { useNavigate, useLocation } from "react-router-dom";
import {useAuth} from '../../Context/authContext'
import {useUserData} from '../../Context/userDataContext'
import {deleteFromHistoryData} from '../../Utilities/JS/dataHandlers/historyDataHandlers'
import {deleteFromLikedData} from '../../Utilities/JS/dataHandlers/likedDataHandlers'
import {deleteFromWatchLaterData} from '../../Utilities/JS/dataHandlers/watchLaterDataHandlers'
import {deleteVideoFromPlaylistData} from '../../Utilities/JS/dataHandlers/playListDataHandlers'
import './video-card.css'

const DynamicVideoCard = ({ video, playlist = null }) => {

    const {title, thumbnailUrl, videoLength, youtubeId } = video
    const {auth:{token}} = useAuth()
    const {userDataDispatch} = useUserData()
    const navigate = useNavigate();
    const {pathname} = useLocation()

    return (    		
        <div className="card dynamic vertical">
            <div onClick={() => navigate(`/video/${youtubeId}`)}>
                <div className="card__product--img">
                    <img className="img" src={thumbnailUrl} alt={`${title} thumbnail`}/>
                    <span className="badge--text badge--grey">{videoLength}</span>
                </div>
            </div>   
            <div className="card__product--content">
                <h2 className="card__product--title">{title}</h2>
                {pathname ==='/history' && 
                    <span onClick={()=>deleteFromHistoryData(video, token, userDataDispatch)}>
                        <i className="fas fa-trash"></i>
                    </span>}
                {pathname ==='/likes' && 
                <span onClick={()=>deleteFromLikedData(video, token, userDataDispatch)}>
                    <i className="fas icon active--icon fa-thumbs-up"></i>
                </span>}
                {pathname ==='/watch-later' && 
                <span onClick={()=>deleteFromWatchLaterData(video, token, userDataDispatch)}>
                <i className="fas  icon active--icon fa-list-alt"></i>
                </span>}
                {playlist &&
                    <span onClick={()=>deleteVideoFromPlaylistData(playlist, video, token, userDataDispatch)}>
                        <i className="fas fa-trash"></i>
                    </span>}
            </div>           												
        </div>
    )
}

export default DynamicVideoCard;