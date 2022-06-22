import {useAuth} from '../../Context/authContext'
import {useUserData} from '../../Context/userDataContext'
import DynamicVideoCard from '../../Components/Video Card/dynamic-videoCard'
import {deleteAllHistoryData} from '../../Utilities/JS/dataHandlers/historyDataHandlers'
import '../../Utilities/CSS/Utilities.css'

function History() {

  const {auth:{token}} = useAuth()
  const {userData:{ historyData}, userDataDispatch} = useUserData()
  document.title='History | viewtube'

  return (
    <section className="main__body">
    {historyData.length?
    <>
      <nav className="nav__container">
        <h1 className="page--title">History {historyData.length ? `(${historyData.length})` : ''}</h1>
        <span 
          onClick={()=>deleteAllHistoryData(token, userDataDispatch)}
          className="page-clear--btn btn btn__underlined btn__underlined--animated">Clear History</span>
      </nav>
      <section className="video-list--section main__body">
        {historyData.map(video => <DynamicVideoCard video={video}/>)}
      </section>
    </>
    :
    <h1 className='empty-list--text'>You haven't watched any videos yet 😕</h1>
    }      
    </section>
  )
}

export default History