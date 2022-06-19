import axios from 'axios'
import { toast } from 'react-toastify'

const getLikedData = async(token, userDataDispatch) => {
    try{
        const response = await axios.get('/api/user/likes',{headers : {authorization: token}});
        if(response.status === 200){
            userDataDispatch({type : 'LIKED_DATA', payload : response?.data?.likes})
        }
    }catch(err){
        toast.error('Something went wrong')
    }
}

const addToLikedData = async(video, token, userDataDispatch, setIsLiked) => {
    try{
        const response = await axios.post(
            "/api/user/likes",
            { video },
            { headers: { authorization: token } })
        if(response.status === 201){
            userDataDispatch({type : 'LIKED_DATA', payload : response?.data?.likes})
            setIsLiked(false)
            toast.success('You liked a video 😉')
        }
    }catch(err) {
        toast.error('Oops, something went wrong!')
    }
}

const deleteFromLikedData = async(video, token, userDataDispatch) => {
    try{
        const response = await axios.delete(
            `/api/user/likes/${video._id}`,
            { headers: { authorization: token } })
        if(response.status === 200){
            userDataDispatch({type : 'LIKED_DATA', payload : response?.data?.likes})
            toast.success('Video unliked 😐')
        }
    }catch(err) {
        toast.error('Oops, something went wrong!')
    }
}

export {getLikedData, addToLikedData, deleteFromLikedData}