import { useNavigate, useLocation } from "react-router-dom";
import {useAuth} from '../../Context/authContext'
import {useUserData} from '../../Context/userDataContext'
import {deleteFromHistoryData} from '../../Utilities/JS/dataHandlers/historyDataHandlers'
import './video-card.css'

const DynamicVideoCard = ({ video }) => {

    const {auth:{token}} = useAuth()
    const {userDataDispatch} = useUserData()
    const navigate = useNavigate();
    const {pathname} = useLocation()

    return (    		
        <div className="card dynamic vertical">
            <div onClick={() => navigate(`/video/${video.youtubeId}`)}>
                <div className="card__product--img">
                    <img className="img" src={video.thumbnailUrl} alt="video thumbnail"/>
                    <span className="badge--text badge--grey">{video.videoLength}</span>
                </div>
            </div>   
            <div className="card__product--content">
                <h2 className="card__product--title">{video.title}</h2>
                {pathname ==='/history' && 
                    <span onClick={()=>deleteFromHistoryData(video, token, userDataDispatch)}>
                        <i className="fas fa-trash"></i>
                    </span>}
            </div>           												
        </div>
    )
}

export default DynamicVideoCard;