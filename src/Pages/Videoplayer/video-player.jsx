import {useRef} from 'react'
import {useParams} from 'react-router-dom'
import {useDataContext} from '../../Context/dataContext'
import {useUserData} from '../../Context/userDataContext'
import {useAuth} from '../../Context/authContext'
import { AddToHistoryData } from '../../Utilities/JS/dataHandlers/historyDataHandlers'
import ReactPlayer from "react-player/youtube";
import '../../Utilities/CSS/Utilities.css'
import './video-player.css'

function VideoPlayer() {

  const {data:{videoData}} = useDataContext()
  const {userData:{historyData},  userDataDispatch} = useUserData()
  const {auth:{token, isAuthorized}} = useAuth()
  const videoRef = useRef()
  const {youtubeId} = useParams()

  console.log(historyData)

  const video = videoData.find((video) => video.youtubeId === youtubeId)
  document.title = `${video.title} | viewtube`

  return (
        <section className='grid__columns--70-30 main__body'>
        <div>
          <ReactPlayer
                  url={`https://www.youtube.com/embed/${video?.youtubeId}`}
                  controls={true}
                  width="100%"
                  height="500px"
                  playing={true}
                  ref={videoRef}
                  onStart={AddToHistoryData(video, token, userDataDispatch)}
                />
          <div className="card__product--content">
            <div className="card__product--primary">
              <div>
                <h2 className="card__product--title">{video.title}</h2>
                <span className="card__product--category">{video.views} views</span>
              </div>
              <ul className="list-bulletless social-links side-shadow">
                <li className='nav-list--item'>
                        <div className="nav-list--item__icon--wrapper">
                            <span>
                                <i className="far icon fa-thumbs-up"></i>
                            </span>
                            <span className="icon--text">Like</span>
                        </div>
                </li>
                <li className='nav-list--item'>
                        <div className="nav-list--item__icon--wrapper">
                            <span>
                                <i className="fas icon fa-list"></i>
                            </span>
                            <span className="icon--text">Watch Later</span>
                        </div>
                </li>
                <li className='nav-list--item' >
                        <div className="nav-list--item__icon--wrapper">
                            <span>
                                <i className="far icon fa-folder"></i>
                            </span>
                            <span className="icon--text">Playlist</span>
                        </div>
                </li>
              </ul>
            </div>
            <div className="card__product--secondary">
              <img className="avatar__round avatar--sm" src={video.channelImg} alt='channel logo'/>
              <h4 className="card__product--company">{video.channelName} </h4>
              <p className="card__product--description"> {video.description} </p>
            </div>
          </div> 
        </div>
          </section>
  )
}

export default VideoPlayer