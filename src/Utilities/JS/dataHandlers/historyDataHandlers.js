import axios from 'axios'
import { toast } from 'react-toastify'

const getHistoryData = async(token, userDataDispatch) => {
    try{
        const response = await axios.get('/api/user/history',{headers : {authorization: token}});
        if(response.status === 200){
            userDataDispatch({type : 'HISTORY_DATA', payload : response?.data?.history})
        }
    }catch(err){
        toast.error('Something went wrong')
    }
}

const AddToHistoryData = async(video, token, userDataDispatch) => {
    try{
        const response = await axios.post(
            "/api/user/history",
            { video },
            { headers: { authorization: token } })
            console.log(response)
        if(response.status === 201){
            userDataDispatch({type : 'HISTORY_DATA', payload : response?.data?.history})
        }
    }catch(err) {
        console.log(err)
    }
}

const deleteFromHistoryData = async(video, token, userDataDispatch) => {
    try{
        const response = await axios.delete(
            `/api/user/history/${video._id}`,
            { headers: { authorization: token } })
            console.log(response)
        if(response.status === 200){
            userDataDispatch({type : 'HISTORY_DATA', payload : response?.data?.history})
            toast.success('Video deleted from history 😉')
        }
    }catch(err) {
        console.log(err)
    }
}

const deleteAllHistoryData = async(token, userDataDispatch) => {
    try{
        const response = await axios.delete(
            "/api/user/history/all",
            { headers: { authorization: token } })
        if(response.status === 200){
            userDataDispatch({type : 'HISTORY_DATA', payload : response?.data?.history})
            toast.success('Your history is cleared 😉')
        }
    }catch(err) {
        console.log(err)
    }
}

export {getHistoryData, AddToHistoryData, deleteFromHistoryData, deleteAllHistoryData}