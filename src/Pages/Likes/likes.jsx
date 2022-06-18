import {useUserData} from '../../Context/userDataContext'
import DynamicVideoCard from '../../Components/Video Card/dynamic-videCard'
import '../../Utilities/CSS/Utilities.css'

function Likes() {

  const {userData:{ likedData }} = useUserData()
  document.title='Likes | viewtube'

  return (
    <section className="main__body">
    {likedData.length?
    <>
      <nav className="nav__container">
        <h1 className="page--title">Liked {likedData.length ? `(${likedData.length})` : ''}</h1>
      </nav>
      <section className="video-list--section main__body">
        {likedData.map(video => <DynamicVideoCard video={video}/>)}
      </section>
    </>
    :
    <h1 className='empty-list--text'>You haven't liked any videos yet 😕</h1>
    }      
    </section>
  )
}

export default Likes