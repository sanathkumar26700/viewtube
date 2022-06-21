import {useUserData} from '../../Context/userDataContext'
import DynamicVideoCard from '../../Components/Video Card/dynamic-videoCard'
import '../../Utilities/CSS/Utilities.css'

function WatchLater() {
  const {userData:{ watchLaterData }} = useUserData()
  document.title='Watch Later | viewtube'

  return (
    <section className="main__body">
    {watchLaterData.length?
    <>
      <nav className="nav__container">
        <h1 className="page--title">Watch Later {watchLaterData.length ? `(${watchLaterData.length})` : ''}</h1>
      </nav>
      <section className="video-list--section main__body">
        {watchLaterData.map(video => <DynamicVideoCard video={video}/>)}
      </section>
    </>
    :
    <h1 className='empty-list--text'>You have no videos to watch later 😕</h1>
    }      
    </section>
  )
}

export default WatchLater