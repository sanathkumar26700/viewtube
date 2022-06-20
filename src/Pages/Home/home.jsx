import Filter from '../../Components/Filter/filter'
import VideoCard from '../../Components/Video Card/video-card'
import Loader from '../../Components/Loader/loader'
import {useDataContext} from '../../Context/dataContext'
import { filteredCategoryData, filterBySearch } from '../../Utilities/JS/filterFunctions'
import './home.css'
import '../../Utilities/CSS/Utilities.css'

function Home() {
  const {data:{videoData, selectedCategory, searchFor, isLoading}} = useDataContext()
  document.title = 'Home | viewtube'
  const filteredData = filterBySearch(filteredCategoryData(videoData, selectedCategory), searchFor)

  return (
    <>
    {
      isLoading ?
        <Loader/>
    :
        
      (filteredData.length ?
          <section className="video-list--container main__body">
            <Filter/>
            <section className='video-list--section'>
              {filteredData.map(video => <VideoCard video={video}/>)}
            </section>
          </section>
        :
        <h1 className='empty-list--text'>No related video are available for now 😕</h1>)         
    }
    </>
  )
}

export default Home