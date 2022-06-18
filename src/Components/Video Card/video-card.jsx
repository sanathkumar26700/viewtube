import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {useAuth} from '../../Context/authContext'
import './video-card.css'

const VideoCard = ({ video }) => {

    const {title, thumbnailUrl, channelImg, views, videoLength, channelName, description, youtubeId } = video
  const navigate = useNavigate();

    const {auth:{isAuthorized}} = useAuth()
    const [showActionCard, setShowActionCard] = useState(false)

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
            <div className={`${showActionCard} action--card` }>
                <div className="action--option"
                    
                >
                    <i className="fas fa-list"></i>
                    Watch Later
                </div>
                <div className="action--option"><i className="far fa-folder"></i>Playlist</div>
            </div>}
        </div>
    )
}

export default VideoCard;