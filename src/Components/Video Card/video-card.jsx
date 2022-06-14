import { Link } from "react-router-dom";

import './video-card.css'

const VideoCard = ({ video, cardDirection }) => {
    
    return (
        		

        <div className="card vertical">
        <Link to='/video'>
        <div className="card__product--img">
            
                <img className="img " src={video.thumbnailUrl} alt="video thumbnail"/>
           
            <span className="badge--text badge--grey">{video.videoLength}</span>
        </div>
        <div className="card__product--content">
            <h2 className="card__product--title">{video.title}</h2>
            <span className="card__product--category">{video.views} views</span>
            <img className="avatar__round avatar--sm" src={video.channelImg} alt='channel logo'/>
            <h4 className="card__product--company">{video.channelName} </h4>
            <p className="card__product--description"> {video.description} </p>
        </div>
        </Link>   												
    </div>	
                                        


    )
}

export default VideoCard;