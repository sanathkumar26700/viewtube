import './home.css'
import '../../Utilities/CSS/Utilities.css'
import Filter from '../../Components/Filter/filter'
import {useDataContext} from '../../Context/dataContext'
import VideoCard from '../../Components/Video Card/video-card'

function Home() {
  const {data:{videoData, selectedCategory}} = useDataContext()

  const filteredData = () =>{ 
      if(selectedCategory === 'All'){
        return videoData
      }else{
        return videoData.filter(video => selectedCategory === video.categoryName)
      }
    }

console.log(filteredData())
  return (
    <section className="video-list--container main__body">
      <Filter/>
      <section className='video-list--section'>
        {filteredData().map(video => <VideoCard video={video}/>)}
      </section>
    </section>
  )
}

export default Home