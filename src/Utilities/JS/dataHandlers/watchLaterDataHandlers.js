import axios from 'axios'
import { toast } from 'react-toastify'

const getWatchLaterData = async(token, userDataDispatch) => {
    try{
        const response = await axios.get('/api/user/watchlater',{headers : {authorization: token}});
        if(response.status === 200){
            userDataDispatch({type : 'WATCHLATER_DATA', payload : response?.data?.watchlater})
        }
    }catch(err){
        toast.error('Oops, something went wrong!')
    }
}

const addToWatchLaterData = async(video, token, userDataDispatch, setIsInWatchLater) => {
    try{
        const response = await axios.post(
            "/api/user/watchlater",
            { video },
            { headers: { authorization: token } })
        if(response.status === 201){
            userDataDispatch({type : 'WATCHLATER_DATA', payload : response?.data?.watchlater})
            setIsInWatchLater(false)
            toast.success('Added video to watch later!')
        }
    }catch(err) {
        toast.error('Oops, something went wrong!')
    }
}

const deleteFromWatchLaterData = async(video, token, userDataDispatch, setIsInWatchLater) => {
    try{
        const response = await axios.delete(
            `/api/user/watchlater/${video._id}`,
            { headers: { authorization: token } })
        if(response.status === 200){
            userDataDispatch({type : 'WATCHLATER_DATA', payload : response?.data?.watchlater})
            setIsInWatchLater(false)
            toast.success('Removed from your watch later list')
        }
    }catch(err) {
        toast.error('Oops, something went wrong!')
    }
}

export {getWatchLaterData, addToWatchLaterData, deleteFromWatchLaterData}