import {useRef, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useDataContext} from '../../Context/dataContext'
import {useUserData} from '../../Context/userDataContext'
import {useAuth} from '../../Context/authContext'
import { addToHistoryData } from '../../Utilities/JS/dataHandlers/historyDataHandlers'
import { addToLikedData, deleteFromLikedData } from '../../Utilities/JS/dataHandlers/likedDataHandlers'
import { addToWatchLaterData, deleteFromWatchLaterData } from '../../Utilities/JS/dataHandlers/watchLaterDataHandlers'
import ReactPlayer from "react-player/youtube";
import '../../Utilities/CSS/Utilities.css'
import './video-player.css'

function VideoPlayer() {

  const [isLiked, setIsLiked] = useState(false)
  const [isInWatchLater, setIsInWatchLater] = useState(false)
  const {data:{videoData}} = useDataContext()
  const {userData:{likedData, watchLaterData},  userDataDispatch} = useUserData()
  const {auth:{token, isAuthorized}} = useAuth()
  const videoRef = useRef()
  const {youtubeId} = useParams()

  const video = videoData.find((video) => video.youtubeId === youtubeId)
  const {title, channelImg, views, channelName, description, _id } = video

  useEffect(() =>{
    likedData.find((video) => video._id === _id) && setIsLiked(true)
    watchLaterData.find((video) => video._id === _id) && setIsInWatchLater(true)
  },[likedData, watchLaterData, _id]) 
  
  document.title = `${title} | viewtube`

  return (
        <section className='grid__columns--70-30 main__body'>
        <div>
          <ReactPlayer
                  url={`https://www.youtube.com/embed/${youtubeId}`}
                  controls={true}
                  width="100%"
                  height="500px"
                  playing={true}
                  ref={videoRef}
                  onStart={addToHistoryData(video, token, userDataDispatch)}
                />
          <div className="card__product--content">
            <div className="card__product--primary">
              <div>
                <h2 className="card__product--title">{title}</h2>
                <span className="card__product--category">{views} views</span>
              </div>
              {isAuthorized &&
              <ul className="list-bulletless social-links side-shadow">
                <li onClick = {()=> { isLiked ?
                                        deleteFromLikedData(video, token, userDataDispatch, setIsLiked)
                                      : 
                                        addToLikedData(video, token, userDataDispatch, setIsLiked)}}
                    className='nav-list--item'>
                  <div className="nav-list--item__icon--wrapper">   
                    <button>
                      {isLiked? 
                          <i className="fas icon active--icon fa-thumbs-up"></i>
                          :
                          <i className="far icon fa-thumbs-up"></i> }
                        </button>
                        <span className="icon--text">Like</span>
                  </div>
                </li>
                <li onClick = {()=> { isInWatchLater ?
                                        deleteFromWatchLaterData(video, token, userDataDispatch, setIsInWatchLater)
                                      : 
                                        addToWatchLaterData(video, token, userDataDispatch, setIsInWatchLater)}}
                    className='nav-list--item'>
                  <div className="nav-list--item__icon--wrapper">   
                    <button>
                      {isInWatchLater? 
                        <i className="fas icon active--icon fa-list-alt"></i>
                          :
                          <i className="fas icon fa-list"></i>}
                        </button>
                        <span className="icon--text">Watch Later</span>
                  </div>
                </li>
                <li className='nav-list--item' >
                        <div className="nav-list--item__icon--wrapper">
                            <button>
                                <i className="far icon fa-folder"></i>
                            </button>
                            <span className="icon--text">Playlist</span>
                        </div>
                </li>
              </ul>}
            </div>
            <div className="card__product--secondary">
              <img className="avatar__round avatar--sm" src={channelImg} alt='channel logo'/>
              <h4 className="card__product--company">{channelName} </h4>
              <p className="card__product--description"> {description} </p>
            </div>
          </div> 
        </div>
          </section>
  )
}

export default VideoPlayer