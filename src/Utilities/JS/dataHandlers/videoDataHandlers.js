import axios from "axios";
import { toast } from "react-toastify";

const getAllVideos = async(dataDispatch) =>{
    try{
        const response = await axios.get('/api/videos');
        dataDispatch({type : "LOAD_VIDEOS", payload : {isLoading : false, videoData : response?.data?.videos}})
        }catch(err){
            toast.error('Something went wrong!')
        }
}

export {getAllVideos}