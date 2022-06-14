import './home.css'
import '../../Utilities/CSS/Utilities.css'
import Filter from '../../Components/Filter/filter'
import {useDataContext} from '../../Context/dataContext'
import VideoCard from '../../Components/Video Card/video-card'
import { filteredCategoryData, filterBySearch } from '../../Utilities/JS/filterFunctions'

function Home() {
  const {data:{videoData, selectedCategory, searchFor}} = useDataContext()

  const filteredData = filterBySearch(filteredCategoryData(videoData, selectedCategory), searchFor)

  return (
    <section className="video-list--container main__body">
      <Filter/>
      <section className='video-list--section'>
        {filteredData.map(video => <VideoCard video={video}/>)}
      </section>
    </section>
  )
}

export default Home