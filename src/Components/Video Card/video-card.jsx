import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {useAuth} from '../../Context/authContext'
import { addToWatchLaterData, deleteFromWatchLaterData } from '../../Utilities/JS/dataHandlers/watchLaterDataHandlers'
import {useUserData} from '../../Context/userDataContext'
import './video-card.css'

const VideoCard = ({ video }) => {

    const {title, thumbnailUrl, channelImg, views, videoLength, channelName, description, youtubeId, _id } = video
  const navigate = useNavigate();

    const {auth:{token ,isAuthorized}} = useAuth()
    const {userData:{watchLaterData}, userDataDispatch} = useUserData()

    const [showActionCard, setShowActionCard] = useState(false)
    const [isInWatchLater, setIsInWatchLater] = useState(false)

    useEffect(() =>{
        watchLaterData.find((video) => video._id === _id) && setIsInWatchLater(true)
    },[watchLaterData, _id]) 

    return (
        		
        <div className="card vertical">
            <div onClick={() => navigate(`/video/${youtubeId}`)}>
                <div className="card__product--img">
                    <img className="img" src={thumbnailUrl} alt="video thumbnail"/>
                    <span className="badge--text badge--grey">{videoLength}</span>
                </div>
                <div className="card__product--content">
                    <h2 className="card__product--title">{title}</h2>
                    <span className="card__product--category">{views} views</span>
                    <img className="avatar__round avatar--sm" src={channelImg} alt='channel logo'/>
                    <h4 className="card__product--company">{channelName} </h4>
                    <p className="card__product--description"> {description} </p>
                </div>
            </div>   												
            <i onClick={()=>{isAuthorized ? setShowActionCard(prev => !prev) : navigate('/login-page')}} 
                className="fas option--icon fa-ellipsis-v">
            </i>
            {showActionCard&&
            <div className={`${showActionCard} action--card` }
                onClick={()=>{ setShowActionCard(prev => !prev)}} >
                <div className={`action--option ${isInWatchLater ? `active--option` : ''}`}
                        onClick = {()=> { isInWatchLater ?
                                        deleteFromWatchLaterData(video, token, userDataDispatch, setIsInWatchLater)
                                      : 
                                        addToWatchLaterData(video, token, userDataDispatch, setIsInWatchLater)}}
                >
                {isInWatchLater? 
                    <i className="fas active--icon fa-list-alt"></i>
                :
                    <i className="fas fa-list"></i>}
                    Watch Later
                </div>
                <div className="action--option"><i className="far fa-folder"></i>Playlist</div>
            </div>}
        </div>
    )
}

export default VideoCard;